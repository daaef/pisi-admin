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
        :items="users"
        :search="search"
        sort-by="id"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>Users</v-toolbar-title>
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
                  Add User
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
                          v-model="editedItem.firstName"
                          label="First Name"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.lastName"
                          label="Last Name"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-text-field
                          v-model="editedItem.email"
                          label="Email"
                          outlined
                          dense
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-select
                          :items="countries"
                          label="Select Roles"
                          v-model="editedItem.countryId"
                          outlined
                          dense
                          item-text="name"
                          item-value="id"
                        ></v-select>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="4"
                      >
                        <v-select
                        v-model="editedItem.roles"
                        :items="roles"
                        label="Select Role"
                        outlined
                        dense
                        multiple
                      >
                        <template v-slot:selection="{ item, index }">
                          <v-chip v-if="index === 0">
                            <span>{{ item }}</span>
                          </v-chip>
                          <span
                            v-if="index === 1"
                            class="grey--text text-caption"
                          >
                            (+{{ editedItem.roles.length - 1 }} others)
                          </span>
                        </template>
                      </v-select>
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
                <v-card-title class="text-h5">Are you sure you want to delete this Country?</v-card-title>
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
  name: 'ManageUsers',
  data () {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        firstName: 'Aef',
        lastName: 'Badmus',
        email: `badmusa21@gmail.com`,
        countryId: 1,
        roles: ['ADMIN'],
      },
      roles: ['ADMIN', 'CUSTOMER'],
      defaultItem: {
        firstName: 'Aef',
        lastName: 'Badmus',
        email: `badmusa21@gmail.com`,
        countryId: 1,
        roles: ['ADMIN'],
      },
      headers: [
        {
          text: 'ID',
          value: 'id',
          align: 'start'
        },
        {
          text: 'First Name',
          align: 'start',
          value: 'firstName',
        },
        { text: 'Last Name', value: 'lastName' },
        { text: 'Email', value: 'email' },
        { text: 'Country ID', value: 'countryId' },
        // { text: 'Actions', value: 'roles', sortable: false },
      ],
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Add User' : 'Edit User'
    },
    ...mapGetters([
      'users',
      'countries'
    ])
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.users.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.users.splice(this.editedIndex, 1)
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
      this.$store.dispatch('addStaff', this.editedItem)
      this.close()
    },
  }
}
</script>
