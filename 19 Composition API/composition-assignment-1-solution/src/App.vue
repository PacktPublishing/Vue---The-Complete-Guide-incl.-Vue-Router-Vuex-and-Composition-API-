<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="goalVisibility">{{ goal }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoalVisibility">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// import { reactive } from 'vue';

export default {
  data() {
    return {
      goal: 'Finish the course!',
      goalVisibility: false
    };
  },
  methods: {
    toggleGoalVisibility() {
      this.goalVisibility = !this.goalVisibility;
    }
  }
  // setup() {
  //   // const courseGoal = ref('Finish the course!');
  //   // const goalIsVisible = ref(false);
  //   // const courseData = ref({
  //   //   goal: 'Finish the course!',
  //   //   goalVisibility: false
  //   // });
  //   const courseData = reactive({
  //     goal: 'Finish the course!',
  //     goalVisibility: false
  //   });

  //   function toggleGoalVisibility() {
  //     // goalIsVisible.value = !goalIsVisible.value;
  //     // courseData.value.goalVisibility = !courseData.value.goalVisibility;
  //     courseData.goalVisibility = !courseData.goalVisibility;
  //   }

  //   return {
  //     goal: courseData.goal,
  //     courseData,
  //     toggleGoalVisibility,
  //   };
  // },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>