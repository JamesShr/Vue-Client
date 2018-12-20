<template>
  <v-app 
    id="inspire"
    :dark="light"
   >
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
    <Drawer></Drawer>
    <v-divider></v-divider>
            
    </v-navigation-drawer>
    <v-toolbar 
    app 
    fixed 
    clipped-left 
    color="rgb(0, 37, 93)"
    dark
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        ORing
      </v-toolbar-title>
      <v-spacer></v-spacer>
      
        <v-btn flat icon>
          <div v-if="Notice > 0">
          <v-badge color="red">
            
              <span slot="badge">{{ Notice }}</span>
            
              <v-icon
              color="white"        
              >
                notifications_active
            </v-icon>
          </v-badge>
          </div>
        </v-btn>
        &nbsp;&nbsp;&nbsp;&nbsp;
        James

        <v-menu offset-y>
          <v-btn 
          flat icon
          slot="activator"
          >
                <v-icon
                color="white"        
                >
                  person
              </v-icon>
          </v-btn>
          <v-list>
            <v-list-tile
            :href="logout"
            >
              <v-list-tile-title 
              style="min-width:60px"
              >登出</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>深色主題</v-list-tile-title>
                
              </v-list-tile-content>
              
                <v-switch 
                v-model="light"
                color="info"></v-switch>
            </v-list-tile>
          </v-list>
        </v-menu>
         &nbsp;&nbsp;
    </v-toolbar>

    <v-content>
      
          <router-view/>
     
    </v-content>
    
    <v-footer
    app
    fixed
    color="rgb(0, 37, 93)"
    dark
    >
      <span></span>
    </v-footer>
  </v-app>
</template>



<script>
import Drawer from '@/components/Drawer'
import  {mapGetters, mapActions}  from 'vuex'
export default {
  name: 'App',
  
  data: () => ({
    drawer: false,
    light:true,
    logout:'http://192.168.1.249/Oring_Attendance/login.php'
  }),
  
    props: {
      source: String
    },
  components:{
    Drawer
  },
  computed: mapGetters({
          Notice: 'getNoticeCount'
    }),
  methods:{
    ...mapActions([
          'actionGetNoticeCount'
        ]),
  },
  beforeMount(){
    this.actionGetNoticeCount()
 }
}
</script>


