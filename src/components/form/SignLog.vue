<template>
  <b-row align-h="center" :class="['c-margin', formName == 'Log In' ? 'login' : 'signup']">

    <b-col cols="11" sm="6" md="6" lg="5" xl="5" align-self="stretch">
      
      <h1 class="display-4 text-center mb-3">{{ formName }}</h1>
      <p class="text-center text-muted">Free access to our dashboard.</p>

      <b-form>
        <div role="group" class="mb-4">
          <label for="username">Username:</label>
          <b-form-input
            id="username"
            type="text"
            v-model="username"
            :state="usernameState"
          ></b-form-input>

          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            Username must have at least 4 characters
          </b-form-invalid-feedback>

        </div>

        <div role="group" class="mb-3">
          <div class="row">
            <label for="password" class="col">Password:</label>
            <div class="col-auto">
              <!-- Help text -->
              <template v-if="formName == 'Log In'">
                <router-link to="/reset-password" class="form-text small text-muted">Forgot password?</router-link>
              </template>
            </div>
          </div>

          <b-form-input
            id="password"
            v-model="password"
            type="password"
            :state="passwordState"
          ></b-form-input>

          <!-- This will only be shown if the preceding input has an invalid state -->
          <b-form-invalid-feedback id="input-live-feedback">
            The password must have at least 8 characters
          </b-form-invalid-feedback>
        </div>
        <template v-if="formName == 'Sign Up'">
          <div role="group" class="mb-4">
            <div class="row">
              <label for="cpassword" class="col">Confirm Password:</label>
            </div>
            <b-form-input
              id="cpassword"
              v-model="cpassword"
              type="password"
              :state="cpasswordState"
            ></b-form-input>

            <!-- This will only be shown if the preceding input has an invalid state -->
            <b-form-invalid-feedback id="input-live-feedback">
              Your password does not match
            </b-form-invalid-feedback>
            
          </div>

        </template>

        <b-form-checkbox
          id="remember"
          v-model="remember"
          name="remember"
          class="mb-3"
        >
          Remember me
        </b-form-checkbox>

        <span>{{ errData }}</span>
        <b-button block  variant="primary" size="lg" class="mb-3" @click="signlog(formName)">
          {{ formName }}
        </b-button>
        <template v-if="formName == 'Sign Up'">
          <div class="text-center">
            <small class="text-muted text-center">
              Already have an account <router-link to="/login">Log In</router-link>
            </small>
          </div>
        </template>
        <template v-if="formName == 'Log In'">
          <div class="text-center">
            <small class="text-muted text-center">
              Don't have an account yet? <router-link to="/signup">Sign up</router-link>
            </small>
          </div>
        </template>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    formName: {
      type: String
    },
  },
  data() {
    return {
      err: '',
      username: '',
      password: '',
      cpassword: '',
      remember: false
    };
  },
  beforeCreate () {
    if (localStorage.getItem('isAuthenticated') == 'true') {
      this.$router.push('/');
    }
  },
  computed: {
    usernameState() {
      return this.username == '' ? null : this.username.length > 4 ? true : false;
    },
    passwordState() {
      return this.password == '' ? null : this.password.length > 7 ? true : false;
    },
    cpasswordState() {
      return this.cpassword == '' ? null : this.cpassword == this.password ? true : false;
    },
    errData() {
      return this.err;
    }
  },
  methods: {
    // Delegates the form data to login/signup
    signlog (formName) {
      const body = {
        username: this.username,
        password: this.password
      };
      formName == 'Log In' ? this.login(body) : this.signup(body);
    },
    async login (body) {
      const res = await axios.post('/api/auth/login', body);
      if(res.status == 200) {
        localStorage.setItem('osuAccessToken', res.data.accessToken);
        localStorage.setItem('osuRefreshToken', res.data.refreshToken);
        localStorage.setItem('isAuthenticated', 'true');
        this.$router.push('/');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-control {
  border-color: #D2DDEC;
}

@media (min-width: 360px) {
  .c-margin {

    &.signup {
      margin-top: calc(100vh / 20);
    }
    
    &.login {
      margin-top: calc(100vh / 9);
    }
  }
}

@media (min-width: 420px) {
  .c-margin {

    &.signup {
      margin-top: calc(100vh / 7);
    }    

    &.login {
      margin-top: calc(100vh / 5);
    }
  }
}
</style>