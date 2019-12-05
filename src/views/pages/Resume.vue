<template>
  <div class="resume">
    <div class="nav" ref="resumeNav" :class="{sticky: isSticky}">
      <router-link to="/resume/experience">Experience</router-link>
      <router-link to="/resume/skills">Skills</router-link>
      <router-link to="/resume/education">Education</router-link>
      <router-link to="/resume/others">Others</router-link>
    </div>
    <div class="content">
      <router-view
        :msg="msgToComponents"
        explain="通过路由向路router-view由组件传参（这里传了数组）, 这里的msg相当于各路由组件的props"
      ></router-view>
      <!--通过路由向路由组件传参, 这里的msg相当于各路由组件的props-->
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
      msgToComponents: ["filipe", "haina"],
      isSticky: false
    };
  },

  methods: {
    stickyResumeNav() {
      // let navTop = this.$refs.resumeNav.offsetTop;
      // console.log(navTop)
      let scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
      window.onscroll = () => {
        if (scrolled > 202) {
          this.isSticky = true;
        } else {
          this.isSticky = false;
        }
      };
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.stickyResumeNav);
    });
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
.resume {
  @include flex(row, flex-start);
  align-items: flex-start;
  .nav {
    @include flex(column, flex-start);
    // border: 1px solid red;
    width: 20%;
    padding: 23px;
    box-shadow: -0.4em 0.4em 0.4em #1b93ee;
    z-index: 999;
    a {
      font-size: 15px;
      height: 30px;
      line-height: 30px;
      color: #000000;
      border-bottom: 1px dotted #1b93ee;
    }
    .router-link-active {
      color: #0086ec;
    }
  }
  .sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    background-color: #e3e8e9;
  }
}
</style>

