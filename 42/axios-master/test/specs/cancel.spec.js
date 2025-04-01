var Cancel = axios.Cancel;
var CancelToken = axios.CancelToken;

describe('cancel', function() {
  beforeEach(function() {
    jasmine.Ajax.install();
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  describe('when called before sending request', function() {
    it('rejects Promise with a Cancel object', function (done) {
      var source = CancelToken.source();
      source.cancel('Operation has been canceled.');
      axios.get('/foo', {
        cancelToken: source.token
      }).catch(function (thrown) {
        expect(thrown).toEqual(jasmine.any(Cancel));
        expect(thrown.message).toBe('Operation has been canceled.');
        done();
      });
    });
  });

  describe('when called after request has been sent', function() {
    it('rejects Promise with a Cancel object', function (done) {
      var source = CancelToken.source();
      axios.get('/foo/bar', {
        cancelToken: source.token
      }).catch(function (thrown) {
        expect(thrown).toEqual(jasmine.any(Cancel));
        expect(thrown.message).toBe('Operation has been canceled.');
        done();
      });

      getAjaxRequest().then(function (request) {
        // call cancel() when the request has been sent, but a response has not been received
        source.cancel('Operation has been canceled.');
        request.respondWith({
          status: 200,
          responseText: 'OK'
        });
      });
    });

    it('calls abort on request object', function (done) {
      var source = CancelToken.source();
      var request;
      axios.get('/foo/bar', {
        cancelToken: source.token
      }).catch(function() {
        // jasmine-ajax sets statusText to 'abort' when request.abort() is called
        expect(request.statusText).toBe('abort');
        done();
      });

      getAjaxRequest().then(function (req) {
        // call cancel() when the request has been sent, but a response has not been received
        source.cancel();
        request = req;
      });
    });
  });

  describe('when called after response has been received', function() {
    // https://github.com/axios/axios/issues/482
    it('does not cause unhandled rejection', function (done) {
      var source = CancelToken.source();
      axios.get('/foo', {
        cancelToken: source.token
      }).then(function () {
        window.addEventListener('unhandledrejection', function () {
          done.fail('Unhandled rejection.');
        });
        source.cancel();
        setTimeout(done, 100);
      });

      getAjaxRequest().then(function (request) {
        request.respondWith({
          status: 200,
          responseText: 'OK'
        });
      });
    });
  });
});
