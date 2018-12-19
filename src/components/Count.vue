<template>
  <div id="countdiv" class="container">
   <h2 style="color: red;">count: {{ count }}</h2>

    <!-- 1. 增加 input 可以設定數值 model 綁定 num -->
    Set Number: 
    <input type='number' v-model='num' style="width: 50px;"><br/>
    
    <!-- 3. 雙向綁定 num 到按鈕上顯示-->
    <!-- 傳 num 數值給 action -->
      <v-btn  color="success" @click="actionIncrease(num)">
              +{{ num }}
      </v-btn>
    

     <v-btn  color="error" @click="actionDecrease(num)">
              -{{ num }}
    </v-btn>
    
     <v-btn  color="warning" @click="actionCountReset">
              歸零
    </v-btn>

    <v-btn  color="blue" @click="actionGetajax">
              取得資料
    </v-btn>
    
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      // 2. model num 預設值為: 1
      num: 1
    }
  },
  computed: mapGetters({
    count: 'getCount',
  }),
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',

      // 5. 引入歸零 action
      'actionCountReset',
      'actionGetajax'
    ])
  }
}
</script>

<style>
  .count {
    color: red;
  }

  #countdiv{
    text-align: center;
  }
</style>