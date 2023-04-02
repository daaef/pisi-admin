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
        :items="currencies"
        :search="search"
        sort-by="id"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>Currencies</v-toolbar-title>
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
                  Add Currency
                </v-btn>
              </template>
              <v-card class="inline-block">
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="12"
                        md="6"
                      >
                        <v-text-field
                          outlined
                          v-model="editedItem.name"
                          label="Name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                        md="6"
                      >
                        <v-text-field
                          outlined
                          v-model="editedItem.currencyCode"
                          label="Currency Code"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                        md="12"
                      >
                        <v-select
                          :items="countries"
                          label="Country ID"
                          v-model="editedItem.countryId"
                          outlined
                          item-text="name"
                          item-value="id"
                        ></v-select>
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
                <v-card-title class="text-xl">
                  <span class="font-normal">Are you sure you want to delete
                    <span class="font-semibold">{{ editedItem?.name }}?</span>
                  </span>
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
            color="error"
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="$store.dispatch('getCryptoCurrencies')"
          >
            Refresh Data
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'ManageCurrencies',
  data () {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        countryId: 2,
        name: "Naira",
        currencyCode: "EUR"
      },
      defaultItem: {
        countryId: 2,
        name: "Naira",
        currencyCode: "EUR"
      },
      headers: [
        {
          text: 'ID',
          value: 'id',
          align: 'start'
        },
        { text: 'Country ID', value: 'countryId' },
        {
          text: 'Name',
          align: 'start',
          value: 'name',
        },
        { text: 'Currency Code', value: 'currencyCode' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Add Currency' : 'Edit Currency'
    },
    ...mapGetters([
      'countries',
      'currencies',
    ])
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.currencies.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.currencies.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    async deleteItemConfirm() {
      console.log(this.editedItem)
      await this.$store.dispatch('deleteCurrency', {
        currencyId: this.editedItem.id
      })
      await this.$store.dispatch('getCurrencies')
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
      this.$store.dispatch('addCurrency', this.editedItem)
      this.close()
    },
  }
}
</script>
