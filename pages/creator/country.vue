<template>
  <div class="user--container pb-5">
    <v-card class="rounded-xl">
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          outlined
          class="rounded-xl"
          dense
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="countries"
        :search="search"
        sort-by="id"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>Countries</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
              v-model="dialog"
              width="100%"
              max-width="90% !important"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2 rounded-xl"
                  v-bind="attrs"
                  v-on="on"
                >
                  Add Country
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.id"
                          label="ID"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="Name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.code"
                          label="Country Code"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.regex"
                          label="Regex"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.ext"
                          label="Ext"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="error darken-1 rounded-xl"
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue darken-1 text-white rounded-xl"
                    @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">
                  Are you sure you want to delete this <span class="font-semibold">{{ editedItem?.name }}?</span>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'ManageCountries',
  data () {
      return {
        search: '',
        dialog: false,
        dialogDelete: false,
        edit: false,
        editedIndex: -1,
        editedItem: {
          id: 0,
          name: 'Nigeria',
          code: 'NG',
          regex: `^['"]?\\d{10,11}['"]?$`,
          ext: '+123',
        },
        defaultItem: {
          id: 0,
          name: 'Nigeria',
          code: 'NG',
          regex: `^['"]?\\d{10,11}['"]?$`,
          ext: '+123',
        },
        headers: [
          {
            text: 'ID',
            value: 'id',
            align: 'start'
          },
          {
            text: 'Name',
            align: 'start',
            value: 'name',
          },
          { text: 'Country Code', value: 'code' },
          { text: 'Regex', value: 'regex' },
          { text: 'Ext', value: 'ext' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
      }
    },
  mounted() {
    this.editedItem.id = this.countries.length + 1;
    this.defaultItem.id = this.countries.length + 1;
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Add Country' : 'Edit Country'
    },
    ...mapGetters([
      'countries'
    ])
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.countries.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.edit = true
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.countries.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
      console.log('deleting something', this.editedItem)
    },

    deleteItemConfirm () {
      console.log('deleting something', this.editedItem)
      this.$store.dispatch('deleteCountry', this.editedItem.id)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.edit){
        this.$store.dispatch('updateCountry', this.editedItem)
        this.edit = false
      } else {
        this.$store.dispatch('addCountry', this.editedItem)
      }
      this.close()
    },
  }
}
</script>
