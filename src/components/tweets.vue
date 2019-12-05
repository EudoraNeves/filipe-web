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
        <a :href="tweetsNews.url">
          <div class="tweetsNews-text">{{tweetsNews.content}}</div>
          <div class="tweetsNews-time">{{tweetsNews.date}}</div>
        </a>
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
  },
  data() {
    return {
      //https://github.com/ninabreznik/noauth-twitterfeed
      twitterFeed: require("noauth-twitterfeed"),
      tweetsNewsList: []
    };
  },
  methods: {
    getTweets(length = 5) {
      this.twitterFeed({ username: "redmistgg" }, (err, tweets) => {
        this.tweetsNewsList = JSON.parse(JSON.stringify(tweets)).slice(0, length);
        // console.log(this.tweetsNewsList)
      });
    }
  },
  mounted() {
    this.getTweets(4); //If put in the created, when visit the a link and go back, it will show the default length amount, instead of the passed parameter 4
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
  padding-left: 25px;
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
