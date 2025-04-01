<template>
    <p>Counter is: {{ counter }}</p>
</template>

<script>
    import {mapGetters} from 'vuex';
    import * as types from '../store/types';
    export default {
        computed: {
            ...mapGetters({
                counter: types.DOUBLE_COUNTER
            })
        }
    }
</script>