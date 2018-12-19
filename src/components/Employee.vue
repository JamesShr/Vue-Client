<template>

    <v-card>
      <div style="margin-top: 100px;"></div>
          <v-card-title>
            Employee

             <v-dialog v-model="dialog" max-width="800px">
                <v-card>
                  <v-card-title>
                    <span class="headline">Edit</span>
                  </v-card-title>

                  <v-card-text>
                        <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.employee_name" label="Employee Name"></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.en_name" label="En Eame"></v-text-field>
                          </v-flex><br>
                          <v-flex xs12 sm6 md4>
                            <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                          </v-flex>
                        </v-layout>
                      </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close()">Cancel</v-btn>
                    <v-btn 
                    color="blue darken-1" 
                    flat @click="save(
                          editedItem.employee_number,
                          editedItem.employee_name,
                          editedItem.en_name,
                          editedItem.email)"
                    >Save</v-btn>
                  </v-card-actions>
                </v-card>
            </v-dialog>


            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="search"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="employees"
            :rows-per-page-items=[10,15,25,-1]
            :search="search"
          >
            <template slot="items" slot-scope="props" >
              <td class="text-xs-center">{{ props.item.employee_number }}</td>
              <td class="text-xs-center">{{ props.item.employee_name }}</td>
              <td class="text-xs-center">{{ props.item.en_name }}</td>
              <td class="text-xs-center">{{ props.item.email }}</td>
              <td class="text-xs-center">
                <v-icon
                  small
                  class="mr-2"
                  @click="editItem(props.item)"
                >
                  edit
                </v-icon>
            </td>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
</template>
<script>

import { mapGetters, mapActions } from 'vuex'

export default {
data () {
    return {
      dialog: false,
      search: '',

      editedItem: {
        employee_name: '',
        employee_number: '',
        en_name: '',
        email: ''
      },
      defaultItem: {
        employee_name: '',
        employee_number: '',
        en_name: '',
        email: ''
      },

      headers: [
        { 
          text: 'Employee Number',
          align: 'center',
           value: 'employee_number'
        },
        { 
          text: 'Employee Name', 
          align: 'center',
          sortable: false,
          value: 'employee_name' 
        },
        { 
          text: 'En Name', 
          align: 'center',
          sortable: false,
          value: 'en_name' 
        },
        { 
          text: 'E-mail', 
          align: 'center',
          sortable: false,
          value: 'email' 
        },
        { 
          text: 'Edit', 
          align: 'center',
          sortable: false,
          value: 'edit' 
        }
      ],
      
    }
  },
  watch: {
    dialog (val) {
      val || this.close()
    }
  },
  computed: mapGetters({
        employees: 'getEmployee',
  }),
  methods: {
    ...mapActions([
      'actionGetajax',
      'actionSaveData'
    ]),
    editItem (item) {
      this.editedIndex = this.employees.indexOf(item)
      this.defaultdItem = Object.assign({}, item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },
    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        
        this.editedIndex = -1
      }, 300)
      
      
    },

    save (number,name,en_name,email) {
      const editNum = this.editedIndex
      // console.log(this.editedIndex);
      const editData = {
        editNum,
        number,
        name,
        en_name,
        email
      }
      
   
      this.actionSaveData(editData)
      // Object.assign(this.employees[this.editedIndex],editData)
      this.close()
      
    }
  },
  beforeMount(){
    this.actionGetajax()
 }
};
</script>

<style>

#headline{
  text-align: center;
}
</style>
