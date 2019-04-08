<template>
  <div id="logintemp">
    <router-view/>
    <div id="back">
  <div class="backRight">
    <!--
    <video preload="preload" id="video" autoplay="autoplay" loop="loop">

  </video>
-->
    </div>
  <div class="backLeft"></div>
</div>
<div id="slideBox">
  <div class="topLayer">
    <div class="left">
      <div style="width: 100%;">
        <p>
        <img src="../assets/logo.png" style="margin-left: 42%; margin-top: 50px;">
      </p>
      </div>
      <div class="content">
        <!-- Error display for login errors -->
        <div v-if="error" v-for="error in errors">
          <p class="help is-danger">{{ error }}</p>
        </div>
        <!-- Success display, only shows on register success -->
        <div style="width: 100px; text-align: center; display:block;"><h2>LOGIN</h2></div>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input class="input" type="text" placeholder="Enter your email" v-model="credentials.email" style="width: 100%;">

          <label for="password" class="form-label">Password</label>
          <input class="input" type="password" placeholder="Enter your password"v-model="credentials.password"  style="width: 100%;">
        </div>
        <div class="field">
          <div class="control">
            <button @click="login">Login</button>
          </div>
        </div>
      </div>
      </div>
      <footer style=" position: fixed;
    left: 0;
    bottom: 10px;
    font-size: 11px;
    margin-left: 85px;
    text-align: center;">
      </footer>

    </div>
  </div>
</div>
</template>

<script>

  import { store } from '@/store';
  import axios from 'axios';
  import router from '../router';
  const API_URL = 'http://127.0.0.1:3001';
  const LOGIN_URL = `${API_URL}/auth/sign_in`;
	export default {
    data() {
      return {
        credentials: {
          email: '',
          password: '',
          user_name: '',
        },
        errors: [],
        loginTab: false,
      };
    },
    methods: {
      login() {
        // Submit user login
        axios.post(LOGIN_URL, {
          email: this.credentials.email,
          password: this.credentials.password,
        })
        .then((response) => {
          console.log("succ");
          console.log(response.data.data);

          //UserStore.login(this.username, this.password);
          this.$store.state.user.isAuth = true;
          this.$store.state.user.username = response.data.data.user_name;
          this.$store.state.user.token = response.data.data.id;


          this.$router.push('/home/show');
          //
          //self.$router.push('/customer/list');

        })
        // If error(s), log to user
        .catch((error) => {
          error.response.data.errors.forEach((errorText) => {
            this.errors.push(errorText);
          });
        });
      },
    }
  };
</script>

<style>
#logintemp {
  height: 90vh;
  overflow: hidden;
  width: 100% !important;
  box-sizing: border-box;
}
#logintemp video {
  height: 99.5%;
  width: 100%;
  background-color: #222;
  box-shadow: 0 4px 16px rgba(0,0,0,0.9), 0 5px 16px rgba(0,0,0,0.9);
}
.backRight {
  background-color: grey;
  position: absolute;
  right: 0;
  width: 80%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
}
#logintemp .left {
  width: 45%;
  height: 100%;
  background: #222;
  left: 0;
  position: absolute;
  color: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.9), 0 5px 16px rgba(0,0,0,0.9);
}
#logintemp .content {
  margin: 0 auto;
  display: block;

}
#logintemp .content h2 {
  color: #03A9F4;
  font-weight: 300;
  font-size: 35px;
}
#logintemp button {
  background: #03A9F4;
  padding: 10px 16px;
  width: auto;
  font-weight: 600;
  text-transform:  uppercase;
  font-size: 14px;
  color: #fff;
  line-height: 16px;
  letter-spacing: 0.5px;
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
  border: 0;
  outline: 0;
  margin: 15px 15px 15px 0;
  transition: all 0.25s;
}
#logintemp button:hover {
  background: #0288D1;
  box-shadow: 0 4px 7px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1);
}
.off {
  background: none;
  color: #03A9F4;
  box-shadow: none;
}
.left .off:hover {
  box-shadow: none;
  color: #03A9F4;
  background: #363A3D;
}
#logintemp input {
  background: transparent;
  border: 0;
  outline: 0;
  width: 300px;
  border-bottom: 1px solid #45494C;
  font-size: 14px;
  color: #959595;
  padding: 8px 0;
  margin-top: 0px;
  margin-bottom: 40px;
}
</style>
