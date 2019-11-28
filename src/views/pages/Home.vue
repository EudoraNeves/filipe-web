<template>
  <div class="home">
    <p>This This is home page This This  is home page This This is home page This This is home page This This is home page This</p>
    <!-- <tweets></tweets> -->
  </div>
</template>

<script>
// @ is an alias to /src
import tweets from "@/components/tweets.vue";

export default {
  name: "home",
  components: {
    // tweets
  }
};
</script>

<style lang="scss" scoped>
// .home {
//   display: flex;
//   flex-direction: row;
//   .tweets {
//   }
// }
</style>
