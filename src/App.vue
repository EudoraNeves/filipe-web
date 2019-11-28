<template>
  <div id="app">
    <div class="header">
      <div class="header-firstLine mainFrame">
        <div class="contentFrame">
          <div class="greeting">Hi {{visitor}}</div>
          <div class="medias">
            <img src="../src/assets/imgs/weChat.png" alt="wechat" @click="weChat()" />
            <a href="https://www.linkedin.com/in/filipe-neves-12293a31/" target="_blank">
              <img src="../src/assets/imgs/linkedIn.png" alt="linkedIn" />
            </a>
            <a href="https://www.facebook.com/filnev" target="_blank">
              <img class="lastMedia" src="../src/assets/imgs/fb.png" alt="facebook" />
            </a>
          </div>
        </div>
      </div>
      <div class="header-secondLine mainFrame">
        <div class="contentFrame">
          <div class="name">
            <span>filipe</span>
            <span class="neves">neves</span>
            <span class="v4">v4</span>
          </div>
          <div id="nav">
            <router-link to="/home" class="router-link">HOME</router-link>
            <!--<router-link to="/">, what will happen is that this component will be active for every route. This may not be something that we want, so we can use the exact prop like so: <router-link to="/" exact>. Now the component will only get the active class applied when it is an exact match at /.-->
            <router-link to="/projects" class="router-link">PROJECTS</router-link>
            <router-link to="/resume" class="router-link">RESUME</router-link>
            <router-link to="/contact" class="router-link">CONTACT</router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container contentFrame flex-row-spaceBetween">
      <div class="content">
        <keep-alive>
          <!--keep-alive标签缓存路由组件,保证路由组件之间互相切换数据还在-->
          <router-view />
        </keep-alive>
      </div>
      <div class="sideBar">
        <tweets></tweets>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import tweets from "@/components/tweets.vue";

export default {
  name: "app",
  components: {
    tweets
  },
  metaInfo: {
    title: "Filipe Neves",
    titleTemplate: "%s | Senior Developer",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { vmid: "description", property: "description", content: "Filipe Neves is a senior developer within 10+ experience. His skillet includes: Backend (C#, PHP, Python, NodeJS, JavaScript), Frontend (Vue, React, jQuery), Database (MySQL, Microsoft SQL, MongoDB, Redis)."},
      { vmid: "keywords", property: "keywords", content: "Filipe Neves, backend, fullstack, C#, PHP, Python, NodeJS, JavaScript" }
    ]
  },
  data() {
    return {
      visitor: ""
    };
  },
  methods: {
    weChat() {
      alert("add me in wechat: filipenevespt");
    }
    // greet() {
    // }
  },
  mounted() {
    // this.greet();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

::placeholder {
  color: grey;
  opacity: 0.5;
}

body {
  box-sizing: border-box;
  line-height: 1.4;
}

.mainFrame {
  border: 1px solid #707070;
  width: 100%;
}

.contentFrame {
  // border: 1px solid #707070;
  border-top: 0;
  width: 68%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.content {
  position: relative;
  width: 100%;
  height: 100vh;
}
.flex-row-spaceBetween {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.flex-column {
  display: flex;
  flex-direction: column;
}

#app {
  font-family: bahnschrift;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #646464;
  font-size: 12px;
}
.header-firstLine {
  height: 51px;
  background-color: #000000;

  .medias {
    text-align: right;
    border: 0;

    img {
      padding-right: 20px;
      cursor: pointer;
    }
    .lastMedia {
      padding-right: 0;
    }
  }
}
.header-secondLine {
  color: #707070;
  background-color: #e3e8e9;
  height: 151px;
  line-height: 151px;
  .contentFrame {
    border: 0;
    padding: 0 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .name {
    font-size: 25px;
    .neves {
      font-weight: bold;
    }
    .v4 {
      font-size: 12px;
    }
  }

  #nav {
    .router-link-active {
      border-bottom: 5px solid;
      border-image: linear-gradient(
          to top,
          #707070 1px,
          #a4c0e9 1px,
          #a4c0e9 4px,
          #707070 4px
        )
        5;
    }
    .router-link {
      color: #707070 !important;
      font-size: 20px;
      text-decoration: none;
      margin-right: 50px;
      position: relative;
      // &:focus {
      //   &:after {
      //     position: absolute;
      //     content: "";
      //     height: 3px;
      //     width: 100%;
      //     left: 0;
      //     bottom: -7px;
      //     background: #a4c0e9;
      //     border-top: 1px solid #707070;
      //     border-bottom: 1px solid #707070;
      //   }
      // }
    }
  }
}
</style>
