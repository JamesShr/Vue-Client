<template>
  
<div id = "home">
  
    <v-container fluid grid-list-md text-xs-center>
      <v-layout row wrap>
       
       <v-flex xs12>
              <v-card color="rgb(218, 218, 218)"  tile flat height="200px">
                <v-toolbar dense dark color="primary">
                  <v-icon>report</v-icon>
                  <v-toolbar-title class="white--text">今日告警資訊</v-toolbar-title>
                   <v-spacer></v-spacer>
                  <v-btn flat small color="white" href="/TodayNews">MORE ></v-btn>
                </v-toolbar>
                <TodayNews></TodayNews>
              </v-card>
        </v-flex>
        
         <v-flex xs12>
              <v-card color="rgb(218, 218, 218)"  tile flat height="200px">
                <v-toolbar dense dark color="rgb(255, 153, 0)">
                  <v-icon>notifications</v-icon>
                  <v-toolbar-title class="white--text">今日瓦斯表異常資訊</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn flat small color="white" href="/AbnormalMessages">MORE ></v-btn>
                </v-toolbar>
                <TodayNews></TodayNews>
              </v-card>
        </v-flex>
        
        <v-flex d-flex xs12>
          
          <v-layout row wrap>

            <v-flex d-flex xs8>
              <v-card dark color="rgb(218, 218, 218)">
                <ve-line
                  :data="lineChartData"
                  :toolbox="toolbox"
                  :grid="grid"
                  :colors="colors"
                  :data-zoom="dataZoom"
                  >
                </ve-line>
              </v-card>
            </v-flex>

            <v-flex d-flex xs4>

              <v-layout row wrap>

                <v-flex d-flex xs12>
                  <v-card dark color="rgb(218, 218, 218)">
                    <v-toolbar-title class="black--text">狀態統計</v-toolbar-title>
                    <ve-pie 
                      :data="pieChartData"
                      :settings="chartSettings"
                      :legend-visible="false">
                    </ve-pie>
                  </v-card>
                </v-flex>
                
                <v-flex d-flex xs12>
                  <v-card dark color="rgb(218, 218, 218)">
                    <ve-liquidfill 
                    :data="liquidchartData" 
                    :settings="chartSettingsliquid"
                    >
                    </ve-liquidfill>
                  </v-card>
                </v-flex>

              </v-layout>

            </v-flex>
          </v-layout>
        </v-flex>

      </v-layout>
    </v-container>
        
    
</div>
  
</template>

<script>
import  {mapGetters, mapActions}  from 'vuex'
import TodayNews from '@/components/TodayNews'


export default {
    computed: mapGetters({
          LineData: 'getLineData',
          PieData: 'getPieData',
          LineColor: 'getLineColor',
    }),
    created: function () {
      
        this.lineChartData = this.LineData
        this.grid = {
          show: true,
          borderColor: '#000'
        }
        this.toolbox = {
          feature: {
            magicType: {type: ['line','bar']},
            saveAsImage: {}
          }
        }
        this.colors = this.LineColor
        this.dataZoom = [
        {
          type: 'slider',
          start: 0,
          end: 100
        }
      ]

      this.pieChartData = this.PieData
      this.chartSettings = {
              dataType: 'percent'
            }

      this.liquidchartData = {
          columns: ['city', 'percent'],
          rows: [{
            city: 'Taipei',
            percent: 0.6
          }]
        }

      this.chartSettingsliquid = {
        seriesMap: {
          'Taipei': {
            shape: 'rect'
          }
        }
      }     
    },
    components:{
      TodayNews
    },
    methods:{
    }
  }
</script>

<style>

#home{
  width: 1600px;
  
  margin-left:auto;
  margin-right:auto;
  background-color: rgb(155, 155, 155);
  
}


</style>
