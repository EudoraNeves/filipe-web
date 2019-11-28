<template>
  <div id="contactPage">
    <h1>contact &nbsp;&nbsp;&nbsp;&nbsp;us</h1>

    <div class="formContainer">
      <form
        id="formContact"
        action
        method="post"
        autocomplete="on"
        autocapitalize="on"
        ref="contactForm"
      >
        <div class="formContact-item fn">
          <label for="fn">*family name:&nbsp;&nbsp;</label>
          <input
            type="text"
            name="fn"
            id="fn"
            placeholder="please enter your family name"
            v-model="contactForm.fn"
            @keyup.enter.stop="$event.target.parentNode.nextElementSibling.children[1].focus()"
          />
        </div>
        <div class="formContact-item gn">
          <label for="fn">*given name:&nbsp;&nbsp;</label>
          <input
            type="text"
            name="gn"
            id="gn"
            placeholder="please enter your given name"
            v-model="contactForm.gn"
            @keyup.enter="$event.target.parentElement.nextSibling.children[1].focus()"
          />
        </div>
        <div class="formContact-item email">
          <label for="email">*email:&nbsp;&nbsp;</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="please enter your email address"
            v-model="contactForm.email"
            @keyup.enter="$event.target.nextElementSibling.focus()"
          />
        </div>
        <div class="formContact-item phone">
          <label for="phone">*Tel:&nbsp;&nbsp;</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="please enter your phone number"
            v-model="contactForm.phone"
            @keyup.enter="$event.target.nextElementSibling.focus()"
          />
        </div>
        <div class="formContact-item msg">
          <label for="msg">*messgae:&nbsp;&nbsp;</label>
          <textarea
            name="msg"
            id="msg"
            cols="30"
            rows="10"
            placeholder="please leave your messgae here"
            v-model="contactForm.msg"
          ></textarea>
        </div>
        <div class="formContact-item submit">
          <input type="submit" name="submit" id="submit" value="submit" @click.prevent="postUser" />
          <!-- .prevent修饰符防止表格reload重载 -->
        </div>
      </form>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "contact",
  components: {},
    metaInfo: {
    title: "Filipe Neves",
    titleTemplate: "%s | Contact Info",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { vmid: "description", property: "description", content: "Email: me@filipeneves.net; Tel: +8615355156713"},
      { vmid: "keywords", property: "keywords", content: "Filipe Neves, contact" }
    ]
  },

  props: {
  },
  data() {vistor
    return {
      contactForm: {
        fn: null,
        gn: null,
        email: null,
        phone: null,
        msg: null
        // contactUser: {
        //     name: this.contactForm.gn + this.contactForm.fn, email: this.contactForm.email, phone: this.contactForm.phone, messgawe: this.contactForm.msg
        // }
      },

      endPoints: {
        contactEndPoint: "http://192.168.163.100:3000",
        registerEngPoint: "http://192.168.163.100:3000/register",
        logInEngpoint: "http://192.168.163.100:3000/login"
      }

      // msg: {
      //   beforeCreates: "beforeCreate",
      //   createds: "created",
      //   beforeMounts: "beforeMount",
      //   mounteds: "mounted",
      //   beforeUpdates: "beforeUpdate",
      //   updateds: "updated",
      //   beforeDestroys: "beforeDestroy",
      //   destroyeds: "destroyed"
      // }
    };
  },
  methods: {
    postUser: function() {
      //确保所有input框都填好信息，否则警告且按提交按钮不能够提交
      if (
        !this.contactForm.fn || //如果fn值不存在（即不为空）
        !this.contactForm.gn ||
        !this.contactForm.email ||
        !this.contactForm.phone ||
        !this.contactForm.msg
      ) {
        alert("there's some info missing!");
        return false;
      }
      //提交成功后清除input框信息，并警示信息已提交
      else {
        this.$axios({
          method: "post",
          url: this.endPoints.contactEndPoint,
        //   headers: {
        //     "Content-type": "application/json;charset=UTF-8"
        //   },
          data: {
            name: this.contactForm.gn + this.contactForm.fn,
            email: this.contactForm.email,
            phone: this.contactForm.phone,
            message: this.contactForm.msg
          }

          //   headers: {
          //     "Content-type": "application/json;charset=UTF-8"
          //   },
          //   params: {
          //     name: this.contactForm.gn + this.contactForm.fn,
          //     email: this.contactForm.email,
          //     phone: this.contactForm.phone,
          //     message: this.contactForm.msg
          //   }
        })
          .then(response => {
            alert("Your message has been sent!");
            this.contactForm = {
              fn: null,
              gn: null,
              email: null,
              phone: null,
              msg: null
            };
            console.log(response);
            this.$parent.visitor = response.data.name;
          })
          .catch(error => {
            alert(error);
          });
      }
    }
  },
  mounted: function() {}

  //VUE lifecycle 生命周期

  // beforeCreate: function() {
  //   alert("beforeCreate 创建前状态==============> el 和 data 并未初始化 ");
  //   console.log(this.msg.beforeCreates); // undefined
  // },
  // created: function() {
  //   alert(
  //     "created 创建完毕状态==============> 完成了 data 数据的初始化，el没有"
  //   );
  //   console.log(this.msg.createds); // undefined
  // },
  // beforeMount: function() {
  //   alert(
  //     "beforeMount 挂载前状态==============> 完成了 el 和 data 初始化， 虚拟Dom已经配置，但页面还未显示"
  //   );
  //   console.log(this.msg.beforeMounts); // undefined
  // },
  // mounted: function() {
  //   alert("mounted 挂载结束状态==============> 完成挂载，页面显示");
  //   console.log(this.msg.mounteds); // mounted
  // },
  // beforeUpdate: function() {
  //   alert(
  //     "beforeUpdate 更新前状态==============> 页面还未更新，但虚拟Dom已经配置"
  //   );
  //   console.log(this.msg.beforeUpdates); //
  // },
  // updated: function() {
  //   alert("updated 更新完成状态==============>页面更新");
  //   console.log(this.msg.updateds); //
  // },
  // beforeDestroy: function() {
  //   alert("beforeDestroy vue销毁前状态");
  //   console.log(this.msg.beforeDestroys); //
  // },
  // destroyed: function() {
  //   alert("destroyed vue被销毁");
  //   console.log(this.msg.destroyeds); //
  // }
};
</script>

<style lang="scss" scoped>
#contactPage {
  //   border: 1px solid green;
  h1 {
    font-size: 40px;
    text-transform: uppercase;
    margin-top: 4%;
  }
  .formContainer {
    margin: 6% auto;
  }
  form {
    width: 80%;
    margin: 0 auto;
    // border: 1px solid red;
    display: flex;
    flex-direction: column;
    text-transform: capitalize;
    .formContact-item {
      //   border: 1px solid yellow;
      margin: 5px 0;
      label {
        display: inline-block;
        min-width: 14%;
        // border: 1px solid black;
        text-align: right;
        font-size: 16px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
        vertical-align: top;
      }

      input,
      textarea {
        display: inline-block;
        width: 50%;
        outline: 0;
        border-radius: 2%;
        border: 1px solid rgba(0, 0, 0, 0.14);
      }
      input:not(#submit) {
        height: 30px;
        line-height: 30px;
      }
      input[type="submit"] {
        width: 80px;
      }
    }
  }
}
</style>