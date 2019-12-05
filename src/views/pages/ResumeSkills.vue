<template>
  <div id>
    <ExperienceProgress />
    <!-- <div>{{msg}}</div>
    <div>{{explain}}</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import ExperienceProgress from '@/components/ExperienceProgress.vue'

export default {
  name: "",
  components: {
    ExperienceProgress
  },
  props: {
    msg: Array,
    explain: String
  },

  data() {
    return {};
  },

  methods: {},

  mounted() {}
};
</script>

<style lang="scss" scoped>

</style>
