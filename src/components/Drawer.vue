<template>

      <v-list dense >
            <v-list-group
              v-for="item in items"
              v-model="item.active"
              :key="item.title"
              :prepend-icon="item.action"
              no-action
            >
              
              <v-list-tile slot="activator">
                
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
  
              <v-list-tile
                v-for="subItem in item.items"
                :key="subItem.title"
                :to="subItem.link"
              >
                

                <v-list-tile-content>
                  <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                </v-list-tile-content>
  
                
              </v-list-tile>
            </v-list-group>
          

          <div 
            v-for="option in options" 
            :key="'link_' + option.title"
            
          >
            <v-list-tile :to="option.link">
              
                  <v-list-tile-action>
                    <v-icon>{{ option.action }}</v-icon>
                  </v-list-tile-action>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ option.title }}</v-list-tile-title>
                  </v-list-tile-content>
            </v-list-tile>
            <div v-if="option.divider"><v-divider></v-divider></div>
          </div>
            
          </v-list>



</template>
<script>

import  {mapGetters}  from 'vuex'

export default {

    computed: mapGetters({
      items: 'getItems',
      options: 'getOptions',
  })
}
</script>
