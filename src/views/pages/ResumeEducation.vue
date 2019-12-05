<template>
  <div id="resumeEducation">
    <div class="education">
      <img src="../../assets/imgs/uva-logo.png" alt />
      <h2>Bachelor of Science in Computer Science</h2>
      <h2>2007 - 2010</h2>
    </div>
    <div class="education">
      <img src="../../assets/imgs/uvs-logo.png" alt />
      <h2>Bachelor of Science in Computer Science</h2>
      <h2>2010</h2>
    </div>

    <!-- <div>{{msg}}</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "",
  components: {
    // HelloWorld
  },
  props: {
    msg: Array
  },
  data() {
    return {};
  },

  methods: {},

  mounted() {}
};
</script>

<style lang="scss" scoped>
#resumeEducation {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  .education {

    img {
      max-width: 300px;
      height: 250px;
      // &:first-of-type {
      //   clip: rect(350px, 250px, 300px, 0px)!important;
      // }
    }
  }
}
</style>
