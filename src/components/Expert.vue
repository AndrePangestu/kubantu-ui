<template>
  <div class="history">
  <v-layout row>
    <v-flex xs12 sm12 offset-sm3>

        <v-list three-line>
          <template v-for="item in items">
            <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
            <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
            <v-list-tile avatar v-else v-bind:key="item.title" @click="">
              <v-list-tile-avatar>
                <img v-bind:src="item.avatar"/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                <!-- <v-list-tile-sub-title v-html="item.rating"></v-list-tile-sub-title> -->
                <star-rating :rating="4" :read-only="true" :increment="0.01" :star-size="45"></star-rating>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>

    </v-flex>
  </v-layout>
  </div>
</template>

<script>
  export default {
    name: 'expert',
    data () {
      return {
        items: [
          { header: 'Today' },
          { avatar: '/static/doc-images/expert/bill-gates.jpg', title: 'Bill Gates', subtitle: "<span class='grey--text text--darken-2'>Job Title</span> — Web Master", rating: 'aa' },
          { divider: true, inset: true },
          { avatar: '/static/doc-images/expert/jack-ma.jpg', title: 'Jack Ma', subtitle: "<span class='grey--text text--darken-2'>Job Title</span> — Product Owner" },
          { divider: true, inset: true },
          { avatar: '/static/doc-images/expert/SteveJobsSquare.jpg', title: 'Steave Jobs', subtitle: "<span class='grey--text text--darken-2'>Job Title</span> — IOS Developer" },
          { divider: true, inset: true },
          { avatar: '/static/doc-images/expert/bill-gates.jpg', title: 'Bill', subtitle: "<span class='grey--text text--darken-2'>Job Title</span> — UI and UX Designer" },
          { divider: true, inset: true },
          { avatar: '/static/doc-images/expert/SteveJobsSquare.jpg', title: 'Steave', subtitle: "<span class='grey--text text--darken-2'>Job Title</span> — Frontend Developer" }
        ]
      }
    }
  }
</script>
