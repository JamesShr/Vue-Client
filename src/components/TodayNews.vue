<template>

  
      <v-data-table
        :headers="headers"
        :items="news"
        hide-actions
        class="elevation-1"
      >
          <template slot="items" slot-scope="props">
            <td class="text-xs-center">{{ props.item.date }}</td>
            <td class="text-xs-center">{{ props.item.sender }}</td>
            <td class="text-xs-center">{{ props.item.message }}</td>
             <v-btn  color="success" @click="reply(props.item.index,props.item.date)">
                回報確認
            </v-btn>
          </template>
      </v-data-table>
    
</template>
<script>

import { mapGetters, mapActions } from 'vuex'



export default {
data () {
    return {
      headers: [
        {
          text: '時間',
          align: 'center',
          sortable: false,
          value: 'date'
        },
        { text: '用戶',
          align: 'center',
          sortable: false,
          value: 'sender' 
        },
        {
           text: '訊息',
           align: 'center',
           sortable: false,
           value: 'news' 
        },
        {
           text: '', 
           align: 'center',
           sortable: false,
           value: '' 
        }
      ],
    }
  },
  computed: mapGetters({
        news: 'getTodayNews',
  }),
  methods: {
    ...mapActions([
          'actionGetnews',
          'actionReplyByLine'
        ]),
    reply(index,date){
      const data = {
        index,
        date
      }
      this.actionReplyByLine(data);
      
    },

  },
  
  beforeMount(){
    this.actionGetnews()
 }
}
</script>

<style>

#headline{
  text-align: center;
}
</style>
