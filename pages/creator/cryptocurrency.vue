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
        :items="cryptoCurrencies"
        :search="search"
        sort-by="id"
      >
        <template v-slot:top>
          <v-toolbar
            flat
          >
            <v-toolbar-title>Cryptocurrencies</v-toolbar-title>
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
                  Add Cryptocurrency
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
                        sm="12"
                        md="8"
                      >
                        <v-text-field
                          v-model="editedItem.name"
                          label="Name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                        md="8"
                      >
                        <v-text-field
                          v-model="editedItem.abbreviation"
                          label="Abbreviation"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                        md="8"
                      >
                        <v-text-field
                          v-model="editedItem.blockchain"
                          label="Chain (Blockchain)"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                        md="8"
                      >
                        <v-text-field
                          v-model="editedItem.network"
                          label="Network"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                        md="8"
                      >
                        <v-text-field
                          v-model="editedItem.imgUri"
                          label="Icon URL"
                        ></v-text-field>
                      </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                        md="8"
                      >
                        <v-text-field
                          v-model="editedItem.depositWalletAddress"
                          label="Deposit Waller Address"
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
        <template v-slot:[`item.imgUri`]="{ item }">
          <v-img
            max-height="35"
            contain
            max-width="35"
            :src="item.imgUri"
          ></v-img>
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
  name: 'ManageCryptoCurrencies',
  data () {
    return {
      search: '',
      dialog: false,
      dialogDelete: false,
      editedIndex: -1,
      editedItem: {
        name: "Ethereum",
        abbreviation: "ETH",
        blockchain: "ETHEREUM",
        network: "goerli",
        depositWalletAddress: "0x9d76d4d5da5408c15fdeda1103aaec3a362438b0",
        imgUri: "https://firebasestorage.googleapis.com/v0/b/pisi-exchange.appspot.com/o/crypto_currency_icons%2Fethereum.svg?alt=media&token=433e44d7-d237-4123-a8b4-7b6a9e02a900"
      },
      defaultItem: {
        name: "Ethereum",
        abbreviation: "ETH",
        blockchain: "ETHEREUM",
        network: "goerli",
        depositWalletAddress: "0x9d76d4d5da5408c15fdeda1103aaec3a362438b0",
        imgUri: "https://firebasestorage.googleapis.com/v0/b/pisi-exchange.appspot.com/o/crypto_currency_icons%2Fethereum.svg?alt=media&token=433e44d7-d237-4123-a8b4-7b6a9e02a900"
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
        { text: 'Abbreviation', value: 'abbreviation' },
        { text: 'Blockchain', value: 'blockchain' },
        {
          text: 'Network',
          align: 'start',
          value: 'network',
        },
        { text: 'Deposit Wallet Address', value: 'depositWalletAddress' },
        { text: 'Icon', value: 'imgUri'},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
    }
  },
  mounted() {
    this.editedItem.id = this.cryptoCurrencies.length + 1;
    this.defaultItem.id = this.cryptoCurrencies.length + 1;
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Add Cryptocurrency' : 'Edit Cryptocurrency'
    },
    ...mapGetters([
      'cryptoCurrencies'
    ])
  },
  methods: {
    editItem (item) {
      this.editedIndex = this.cryptoCurrencies.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.cryptoCurrencies.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.$store.dispatch('deleteBank', {
        bankId: this.editedItem.id
      })
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
      this.$store.dispatch('addCryptocurrency', this.editedItem)
      this.close()
    },
  }
}
</script>
