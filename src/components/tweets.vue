<template>
  <div class="tweets">
    <div class="tweets-mark flex-row-spaceBetween">
      <div class="tweets-mark-name">TWEETS FEED</div>
      <div class="tweets-mark-logo flex-row-spaceBetween">
        <div class="tweets-mark-logo-icon">
          <a href="https://twitter.com/filipenevesnet" target="_blank">
            <img src="../assets/imgs/tweets.png" />
          </a>
        </div>
        <div class="tweets-mark-logo-text">Follow</div>
      </div>
    </div>

    <div class="paddingLeft7px">
      <a href="https://twitter.com/filipenevesnet" target="_blank">
        <div class="profile flex-row-spaceBetween">
          <div class="profile-img">
            <img src="../assets/imgs/filipeProfile.jpg" alt srcset />
          </div>
          <div class="profile-name">
            <div>Filipe Neves</div>
            <div class="profile-name-emailSuffix flex-column">@filipenevespt</div>
          </div>
        </div>
      </a>
      <div class="tweetsNews" v-for="(tweetsNews, n) in tweetsNewsList" :key="n">
        <div class="tweetsNews-text">{{tweetsNews.text}}</div>
        <div class="tweetsNews-time">{{tweetsNews.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "tweets",
  components: {
    // HelloWorld
  },
  data() {
    return {
      tweetsNewsList: [
        {
          text: "gagrgd dssf awefgaesr ergrth gdrh tdty jfy jytrs ersf",
          time: "5 days ago"
        },
        {
          text: "gagrg ddssf awef gaesrg ergrthgd rhtd tyjfyj ytrsersf",
          time: "5 days ago"
        },
        {
          text: "gagrg ddssfawef gaesrge rgrthgd rhtdty jfyjy trsersf",
          time: "5 days ago"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.tweets {
  //   border: 1px solid #707070;
  width: 245px;
  height: 315px;
  overflow: hidden;
  height: 100vh;
  // margin-right: 15px;
  // margin-top: 30px;
  .tweets-mark {
    line-height: 28px;
    padding-right: 15px;
    padding-top: 23px;
    .tweets-mark-name {
      font-size: 20px;
      color: #8a8a8a;
    }
    .tweets-mark-logo {
      color: #0086ec;
    }
  }
    a {
      text-decoration: none;
      color: #646464;
  }
  .paddingLeft7px {
    padding: 23px 15px 23px 7px;
    word-wrap: break-word;
    text-align: left;
    .profile {
      justify-content: flex-start;
      .profile-img {
        margin-right: 10px;
        img {
          width: 46px;
          height: 46px;
          border-radius: 50%;
        }
      }
      .profile-name {
        font-size: 18px;
        text-align: left;
      }
      .profile-name-emailSuffix {
        color: #0086ec;
        font-size: 12px;
      }
    }
    .tweetsNews {
      padding-top: 23px;
      .tweetsNews-time {
        color: #c2c2c2;
        text-align: right;
      }
    }
  }
}
</style>
