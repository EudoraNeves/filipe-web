<template>
  <div id="experienceProgress">
    <div class="skill" v-for="(skill, index) in skills" :key="index">
      <el-progress type="circle" :percentage="skill.percentage" :status="skill.stauts"></el-progress>
      <h2>{{skill.name}}</h2>
      <p>{{skill.desc}}</p>
    </div>
    <!-- <el-progress type="circle" :percentage="100" status="success"></el-progress> -->
    <!-- <el-progress type="circle" :percentage="100" status="warning"></el-progress>
    <el-progress type="circle" :percentage="100" status="exception"></el-progress>-->

    <div class="languages">
      <div class="language">
        <h3>Portuguese:</h3>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="100" :format="format" status="success"></el-progress>
      </div>
      <div class="language">
        <h3>English:</h3>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="100" :format="format" status="success"></el-progress>
      </div>
      <div class="language">
        <h3>Dutch:</h3>
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="70"
          status="warning"
          :format="format"
        ></el-progress>
      </div>
      <div class="language">
        <h3>Spanish:</h3>
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="70"
          status="warning"
          :format="format"
        ></el-progress>
      </div>
      <div class="language">
        <h3>Chinese:</h3>
        <el-progress
          :text-inside="true"
          :stroke-width="20"
          :percentage="20"
          status="exception"
          :format="format"
        ></el-progress>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "ExperienceProgress",
  components: {},
  props: {},
  data() {
    return {
      skills: [
        {
          name: "FRONT-END",
          percentage: 80,
          status: "success",
          desc: "Frontend skillsets: Vue, React, jQuery"
        },
        {
          name: "BACKEND",
          percentage: 100,
          status: "success",
          desc: "Backend skillsets: C#, PHP, Python, NodeJS, JavaScript"
        },
        {
          name: "DATABASE",
          percentage: 100,
          status: "success",
          desc: "Database skillsets: MySQL, Microsoft SQL, MongoDB, Redis"
        }
      ]
      // languageProficiency: null
    };
  },
  methods: {
    format(percentage) {
      // return percentage === 100 ? "Native" : `${percentage}%`;
      let proficiency = ''
      switch (true) {
        case (percentage > 70 && percentage <= 100):
          proficiency = "Native";
          break;
        case (percentage > 20 && percentage <= 70):
          proficiency = "Proficient";
          break;
        case (percentage > 0 && percentage <= 20):
          proficiency = "Basic";
          break;
        default:
          proficiency = `${percentage}%`;
          break;
      }
      return proficiency
    }
  },
  mounted: function() {}
};
</script>

<style lang="scss" scoped>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
#experienceProgress {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .skill {
    padding: 15px;
    width: 100%;
  }
  .languages {
    margin: 0 auto;
    width: 60%;

    .language {
      text-align: left;
      margin: 10px;
    }
  }
}
</style>