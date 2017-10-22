<template>
<div id="professionapp">
  <h2 class="text-xs-center">
    <b>ku</b>bantu
  </h2>
  <h3 class="text-xs-center">
    <b><i>Choose Profession</i></b>
  </h3>
  <br />
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs4>
        <v-btn fab dark large color="black" to="/registerapp">
          <v-icon dark>person</v-icon>
        </v-btn>
        <strong>LAWYER</strong>
      </v-flex>
      <v-flex xs4>
        <v-btn fab dark large color="black" to="/registerapp">
          <v-icon dark>person</v-icon>
        </v-btn>
        <strong>DEVELOPER</strong>
      </v-flex>
      <v-flex xs4>
        <v-btn fab dark large color="black" to="/registerapp">
          <v-icon dark>person</v-icon>
        </v-btn>
        <strong>DESIGNER</strong>
      </v-flex>
      
    </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  name: 'professionapp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>
