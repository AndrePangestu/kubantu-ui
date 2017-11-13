<template>
  <div class="feed">
    <v-layout row>
	    <v-flex lg12>
	      <v-card>
          <v-layout align-center row spacer slot="header">
          <v-flex xs1 class="ma-2">
            <v-avatar size="72px" slot="activator">
              <img src="/static/doc-images/SteveJobsSquare.jpg" alt="">
            </v-avatar>
          </v-flex>
          <v-flex class="margin-feedname">
            <span class="feed-name">Steve Jobs</span><br />
            <span class="feed-date grey--text">Sep 24 at 8:30am</span>
          </v-flex>
          </v-layout>
	        <v-card-media
	          src="/static/doc-images/apple-iphone-x.jpg"
	          height="200px"
	        >
	        </v-card-media>
	        <v-card-title primary-title>
	          <div>
	            <div class="headline">How To Implement Synonym in Your Search Engine</div>
	          </div>
	        </v-card-title>
	        <v-card-actions>
            <v-btn icon>
               <v-icon>favorite</v-icon>
             </v-btn>
             <span>1,000 Likes</span>
	          <v-spacer></v-spacer>
	          <v-btn icon @click.native="show = !show">
	            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
	          </v-btn>
	        </v-card-actions>
	        <v-slide-y-transition>
	          <v-card-text v-show="show">
	            <p class="feed-fillcontent">
                Ut labores minimum atomorum pro. Laudem tibique ut has.
              </p>
              <p class="feed-fillcontent">
                Lorem ipsum dolor sit amet, vim tota iuvaret te, no nec dicat postulant, est enim ferri senserit id. Ad tamquam dolores omnesque his, perfecto inciderint an sea. Nam tempor mnesarchum referrentur et. Vix exerci mentitum in. Cu veri aliquam pri, ex utamur epicuri quo. Alterum minimum dissentiet te cum. Eum ne mollis suavitate, mea facer impetus inciderint ne, cu est malis accumsan.<br /><br />

                Ad est fastidii accusata, ad vidisse sensibus eam. Facer quidam in duo, vix te populo facilisis. Oporteat complectitur cum ei, te vide maiorum per. Modo atomorum voluptatum ad vix, et urbanitas dissentiunt has.

                Nec cu nullam epicurei qualisque, vis epicurei evertitur id, nam ne falli eripuit referrentur. Has ad docendi convenire torquatos. Id qui amet tamquam laboramus, sed interesset persequeris ad. Est in odio meis antiopam, in veri gloriatur mea. Ut sit invidunt definiebas.<br /><br />

                Sit erant officiis dissentiunt no. His veniam habemus efficiendi at, ne iuvaret suavitate aliquando pro, in nibh contentiones pro. Te ceteros consulatu sed, ei nec ignota tritani nostrum, consetetur persequeris duo ad. Duis nulla pri ex, et movet constituam sit. Accusam ancillae mei ut, in iisque tamquam delicatissimi pro.<br /><br />

                Qui sonet congue recusabo ut. Sea nemore aperiam ex, sea dicat pertinax interpretaris cu. Timeam regione evertitur mel id, ad pri ocurreret delicatissimi. Recteque democritum appellantur ei mel. Ad simul veniam civibus per. Mea an urbanitas cotidieque, ex legendos iudicabit est.
              </p>
	          </v-card-text>
	        </v-slide-y-transition>
	      </v-card>
        <br /><br />
        <v-card>
          <v-layout align-center row spacer slot="header">
          <v-flex xs1 class="ma-2">
            <v-avatar size="72px" slot="activator">
              <img src="/static/doc-images/bill-gates.jpg" alt="">
            </v-avatar>
          </v-flex>
          <v-flex class="margin-feedname">
            <span class="feed-name">Bill Gates</span><br />
            <span class="feed-date grey--text">Sep 23 at 22:30pm</span>
          </v-flex>
          </v-layout>
         <v-card-media
           src="/static/doc-images/Windows-10-Final-Build.jpg"
           height="200px"
         >
         </v-card-media>
         <v-card-title primary-title>
           <div>
             <div class="headline">Case 4: E-Commerce</div>
           </div>
         </v-card-title>
         <v-card-actions>
            <v-btn icon>
               <v-icon>favorite</v-icon>
             </v-btn>
             <span>1,100 Likes</span>
           <v-spacer></v-spacer>
           <v-btn icon @click.native="show = !show">
             <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
           </v-btn>
         </v-card-actions>
         <v-slide-y-transition>
           <v-card-text v-show="show">
             <p class="feed-fillcontent">
                Ut labores minimum atomorum pro. Laudem tibique ut has.
              </p>
              <p class="feed-fillcontent">
                Lorem ipsum dolor sit amet, vim tota iuvaret te, no nec dicat postulant, est enim ferri senserit id. Ad tamquam dolores omnesque his, perfecto inciderint an sea. Nam tempor mnesarchum referrentur et. Vix exerci mentitum in. Cu veri aliquam pri, ex utamur epicuri quo. Alterum minimum dissentiet te cum. Eum ne mollis suavitate, mea facer impetus inciderint ne, cu est malis accumsan.<br /><br />

                Ad est fastidii accusata, ad vidisse sensibus eam. Facer quidam in duo, vix te populo facilisis. Oporteat complectitur cum ei, te vide maiorum per. Modo atomorum voluptatum ad vix, et urbanitas dissentiunt has.

                Nec cu nullam epicurei qualisque, vis epicurei evertitur id, nam ne falli eripuit referrentur. Has ad docendi convenire torquatos. Id qui amet tamquam laboramus, sed interesset persequeris ad. Est in odio meis antiopam, in veri gloriatur mea. Ut sit invidunt definiebas.
              </p>
           </v-card-text>
         </v-slide-y-transition>
       </v-card>
       <br /><br />
       <v-card>
         <v-layout align-center row spacer slot="header">
         <v-flex xs1 class="ma-2">
           <v-avatar size="72px" slot="activator">
             <img src="/static/doc-images/jack-ma.jpg" alt="">
           </v-avatar>
         </v-flex>
         <v-flex class="margin-feedname">
           <span class="feed-name">Jack Ma</span><br />
           <span class="feed-date grey--text">Sep 23 at 19:00pm</span>
         </v-flex>
         </v-layout>
        <v-card-media
          src="/static/doc-images/Alibaba-picks-NYSE-for-IPO1.jpg"
          height="200px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">Good Investor Ever</div>
          </div>
        </v-card-title>
        <v-card-actions>
           <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <span>1,150 Likes</span>
          <v-spacer></v-spacer>
          <v-btn icon @click.native="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-slide-y-transition>
          <v-card-text v-show="show">
            <p class="feed-fillcontent">
               Ut labores minimum atomorum pro. Laudem tibique ut has.
             </p>
             <p class="feed-fillcontent">
               Lorem ipsum dolor sit amet, vim tota iuvaret te, no nec dicat postulant, est enim ferri senserit id. Ad tamquam dolores omnesque his, perfecto inciderint an sea. Nam tempor mnesarchum referrentur et. Vix exerci mentitum in. Cu veri aliquam pri, ex utamur epicuri quo. Alterum minimum dissentiet te cum. Eum ne mollis suavitate, mea facer impetus inciderint ne, cu est malis accumsan.<br /><br />

               Ad est fastidii accusata, ad vidisse sensibus eam. Facer quidam in duo, vix te populo facilisis. Oporteat complectitur cum ei, te vide maiorum per. Modo atomorum voluptatum ad vix, et urbanitas dissentiunt has.

               Nec cu nullam epicurei qualisque, vis epicurei evertitur id, nam ne falli eripuit referrentur. Has ad docendi convenire torquatos. Id qui amet tamquam laboramus, sed interesset persequeris ad. Est in odio meis antiopam, in veri gloriatur mea. Ut sit invidunt definiebas.
             </p>
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
	    </v-flex>
	  </v-layout>
  </div>
</template>

<script>
export default {
  name: 'feed',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      show: false
    }
  }
}
</script>
