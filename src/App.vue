<template>
  <div id="app">
    <template>
      <v-app id="example-2" toolbar>
        <v-navigation-drawer persistent light :mini-variant.sync="mini" v-model="drawer">
          <v-toolbar flat class="transparent">
            <v-list class="pa-0">
              <v-list-tile avatar>
                <v-list-tile-avatar>
                  <img src="https://randomuser.me/api/portraits/men/85.jpg" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>John Leider</v-list-tile-title>
                  <v-list-tile-sub-title>Lawyers</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-toolbar>
          <v-list class="pt-0" dense two-line>
            <v-divider></v-divider>
            <v-list-tile v-for="item in items" :key="item.title" @click="item.page" v-bind:to="item.page" active-class="navbar__item--active" disable-route-watcher>
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar fixed class="white" dark>
          <v-toolbar-side-icon @click.stop="drawer = !drawer" class="black--text"></v-toolbar-side-icon>
          <v-toolbar-title class="black--text"><b>ku</b>bantu</v-toolbar-title>
        </v-toolbar>
        <main>
          <v-container fluid overflow>
            <router-view></router-view>
          </v-container>
        </main>
      </v-app>
    </template>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Discover', icon: 'dashboard', subtitle: 'Things by expert', page: '/' },
        { title: 'People', icon: 'business_center', subtitle: 'Find, meet, and get helped', page: '/people' }
      ],
      mini: false,
      right: null
    }
  }
}
</script>


