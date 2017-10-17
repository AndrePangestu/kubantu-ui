<template>
  <div class="loginapp">
    <h2 class="text-xs-center">
      <b>ku</b>bantu
    </h2>
    <br />
    <v-form v-model="valid" ref="form" lazy-validation>
        <v-text-field
          label="Username"
          v-model="username"
          :rules="usernameRules"
          counter
        ></v-text-field>
        <v-flex xs12>
          <v-text-field
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            v-model="password"
            :rules="passwordRules"
            min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : 'text'"
            counter
          ></v-text-field>
        </v-flex>
        <v-btn
          @click="submit"
          color="black" dark block
          to="/app"
        >
          Login
        </v-btn>
        <!-- <v-btn
        @click="clear">clear</v-btn> -->
    </v-form>
    <br />
    <div class="text-xs-center">
        <span>Forgot your login details ? <b>Get help signin in.</b></span>
    </div>
    <br />
    <fieldset class="title">
      <legend>OR</legend>
    </fieldset>
    <br />

    <v-btn class="text-xs-center"
    @click="submit"
    color="blue darken-4" dark
    block
    >
    Login to Facebook
    </v-btn>

    <br />
    <hr />
    <br />
    <div class="text-xs-center">
        <span>Don't have an account?</span>
        <router-link to="/registerapp"><b style="color:black;">REGISTER</b></router-link>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'loginapp',
  data: () => ({
    valid: true,
    username: '',
    usernameRules: [
      (v) => !!v || 'Username is required'
    ],
    e1: true,
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required'
    ]
  }),
  methods: {
    submit () {
      if (this.$refs.form.validate()) {
        // Native form submission is not yet supported
        axios.post('/api/submit', {
          username: this.username,
          password: this.password
        })
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>
