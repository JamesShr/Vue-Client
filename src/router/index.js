import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Employee from '@/components/Employee'
import Count from '@/components/Count'
import ViewMap from '@/components/Map'
import Todo from '@/components/Todo'
import OperationRecord from '@/components/OperationRecord'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDSWpIdKuRWDq8pvQCCUzKRUoI6uJbTWek',
    libraries: 'places', 

  },

})

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/hello',
      name: 'Hello',
      component:HelloWorld
    },
    {
      path: '/map',
      name: 'Map',
      component:ViewMap
    },
    {
      path: '/employee',
      name: 'Employee',
      component:Employee
    },
    {
      path: '/count',
      name: 'count',
      component:Count
    },
    {
      path: '/todoList',
      name: 'todoList',
      component:Todo
    },
    {
      path: '/operationRecord',
      name: 'OperationRecord',
      component:OperationRecord
    },
  ]
})