<template>
  <div id>
    resume skills
    <div>{{msg}}</div>
    <div>{{explain}}</div>
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
