<template>
<div id="registerapp">
  <h2 class="text-xs-center">
    <b>ku</b>bantu
  </h2>
  <br />
  <v-form v-model="valid" ref="form" lazy-validation>
    <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs6>
          <v-text-field label="First Name" v-model="firstname"></v-text-field>
      </v-flex>
        <v-flex xs6>
          <v-text-field label="Last Name" v-model="lastname"></v-text-field>
      </v-flex>

      <v-flex xs12>
        <v-dialog
          persistent
          v-model="modal"
          lazy
          full-width
        >
          <v-text-field
            slot="activator"
            label="Birthday Date"
            v-model="date"
            readonly
          ></v-text-field>
          <v-date-picker v-model="date" scrollable actions>
            <template scope="{ save, cancel }">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="cancel">Cancel</v-btn>
                <v-btn flat color="primary" @click="save">OK</v-btn>
              </v-card-actions>
            </template>
          </v-date-picker>
        </v-dialog>
      </v-flex>

      <v-flex xs12>
      <v-text-field
        name="email"
        label="Email"
      ></v-text-field>
      </v-flex>
      <v-flex xs12>
      <v-text-field
        label="Username"
        v-model="username"
        :rules="usernameRules"
        counter
      ></v-text-field>
      </v-flex>
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
        color="black black" dark block
        to="/"
      >
        REGISTER
      </v-btn>
    </v-layout>
    </v-container>
  </v-form>
</div>
</template>

<script>
export default {
  name: 'registerapp',
  data: () => ({
    valid: true,
    firstname: '',
    lastname: '',
    date: null,
    menu: false,
    modal: false,
    username: '',
    usernameRules: [
      (v) => !!v || 'Username is required'
    ],
    e1: true,
    password: '',
    passwordRules: [
      (v) => !!v || 'Password is required'
    ]
  })
}
</script>
