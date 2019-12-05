<template>
  <div class="home">
    <div class="intro">
      <h2>INTRO</h2>
      <p>
        Portuguese expat living in Shanghai, China. Seasoned tech lead with 8
        years of experience in China across a wide variety of technologies, both
        frontend and backend.
      </p>
      <p>
        Very detailed and process oriented with a healthy dose of OCD for well
        documented and written code. Feel comfortable with most modern web
        technologies and always willing to learn new things for new projects!
      </p>
    </div>
    <div class="selfie">
      <img src="@/assets/imgs/filipe.jpg" alt srcset />
    </div>
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
.home {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #6992a8;
  height: 100%;
  color: #ffffff;
  text-align: left;
  .intro {
    margin: 8% auto;
    width: 50%;
    h2 {
      text-align: center;
      font-size: 45px;
    }
    p {
      font-size: 30px;
      margin: 10% auto;
    }
  }

  .selfie img {
    margin: 30% 25px;
    width: 300px;
  }
}
</style>
