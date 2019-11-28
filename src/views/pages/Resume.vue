<template>
  <div class="resume">
    <div class="nav">
      <router-link to="/resume/experience">Experience</router-link>
      <router-link to="/resume/skills">Skills</router-link>
      <router-link to="/resume/education">Education</router-link>
      <router-link to="/resume/others">Others</router-link>
    </div>
    <div class="content">
      <router-view :msg="msgToComponents" explain="通过路由向路router-view由组件传参（这里传了数组）, 这里的msg相当于各路由组件的props"></router-view> <!--通过路由向路由组件传参, 这里的msg相当于各路由组件的props-->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "resume",
  components: {
    // HelloWorld
  },
  data() {
    return {
      msgToComponents: ['filipe', 'haina']
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin flex($direction, $justify) {
  display: flex;
  flex-direction: $direction;
  justify-content: $justify;
  align-items: center;
}
.nav {
  @include flex(row, space-around);
  // border: 1px solid red;
  width: 80%;
  margin: 0 auto;
  padding-top: 23px;
  a {
    font-size: 15px;
  }
  .router-link-active {
    color: #0086ec;
  }
}
.content {
  border: 1px solid brown;
}
</style>

