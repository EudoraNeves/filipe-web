<template>
  <div class="projects">
    <div class="project" v-for="(project, index) in projects" :key="index">
      <div class="project-name">{{project.name}}</div>
      <a :href="project.url">
        <img :src="`${publicPath}${project.name}.png`" :alt="project.name" srcset />
      </a>
      <div class="project-desc">{{project.desc}}</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import tweets from "@/components/tweets.vue";

export default {
  name: "Projects",
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
      projects: [
        {
          time: "2018",
          company: "",
          name: "redmist",
          img: "../../assets/imgs/redmist.png",
          url: "https://redmist.gg/",
          techs: "",
          desc: ""
        },
        {
          time: "2019",
          company: "",
          name: "apexsquad",
          img: "@/assets/imgs/apexsquad.png",
          url: "https://apexsquad.gg/",
          techs: "",
          desc: ""
        },
        {
          time: "2019",
          company: "",
          name: "gamenanza",
          img: "@/assets/imgs/gamenanza.png",
          url: "https://gamenanza.com/",
          techs: "",
          desc: ""
        }
        // {
        //   time: "",
        //   company: "",
        //   name: "go to my github",
        //   img: "",
        //   url: "",
        //   techs: "",
        //   desc: ""
        // }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.projects {
  width: 100%;
  column-count: 2;
  column-width: 200px;
  column-gap: 55px;
  column-rule: dotted 1px #ccc;
  margin-top: 25px;

  .project {
    box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
    .project-name, img {
      padding: 15px;
      width: 100%;
      height: auto;
    }
  }
}
</style>
