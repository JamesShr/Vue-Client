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

export default {
  data(){
    return{
      items : [
              {
                title: 'James',
                action:'person_pin',
                items: [
                  { title: '入口網站',link:'/'},
                  { title: '員工',link:'/employee'},
                  { title: '資產管理',link:'/count'},
                  { title: '地圖展示',link:'/map'},
                  { title: 'ToDo',link:'/todoList'},
                  { title: 'ORing',link:'/hello'},
                  { title: '操作紀錄',link:'/operationRecord'}
                ]
              },
              {
                title: '訊息查詢',
                action:'message',
                items: [
                  { title: '告警查詢',link:'/message1'},
                  { title: '一般訊息',link:'/message2'},
                  { title: 'CN離線紀錄查詢',link:'/message3'},
                  { title: '異動紀錄查詢',link:'/message4'}
                ]
              },
              {
                title: '瓦斯表',
                action:'network_check',
                items: [
                  { title: '瓦斯表查詢',link:'/gas1'},
                  { title: '瓦斯表異動',link:'/gas2'},
                  { title: '瓦斯表入庫',link:'/gas3'}
                ]
              },
              {
                title: '業務管理',
                action:'folder',
                items: [
                  { title: '事件處理單紀錄',link:'/sells1'},
                  { title: '出帳作業',link:'/sells2'},
                  { title: '客戶管理',link:'/sells3'},
                ]
              },
              {
                title: '建案設備管理',
                action:'assignment',
                items: [
                  { title: '建案管理',link:'/assignment1'},
                  { title: 'CN管理',link:'/assignment2'},
                  { title: 'Repeater登錄',link:'/assignment3'}
                ]
              },
              {
                title: '分析圖表',
                action:'poll',
                items: [
                  { title: '入口',link:'/'}
                ]
              },
              {
                title: '使用者管理',
                action:'person',
                items: [
                  { title: '帳號管理',link:'/person1'},
                  { title: '帳號異動查詢',link:'/person2'}
                ]
              },
              {
                title: '系統管理',
                action:'dashboard',
                items: [
                  { title: '一般參數設定',link:'/dashboard1'},
                  { title: '排程參數設定',link:'/dashboard2'},
                  { title: '排程執行紀錄',link:'/dashboard3'}
                ]
              },
              {
                title: '系統平台管理',
                action:'settings',
                items: [
                  { title: '入口',link:'/settings1'}
                ]
              }
            ],
            options : [
              
            ]
    }
  }
   
  
    
}
</script>
