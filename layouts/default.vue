<template>
  <v-app>
    <v-main>
      <v-navigation-drawer
        v-model="nav"
        permanent
      >
        <v-subheader class="mb-8">
          <nuxt-link class="flex items-center" to="/dashboard">
            <img class="img-contain" src="/auth-logo.png" alt="" />
          </nuxt-link>
        </v-subheader>
        <v-list>
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ $auth.$state.user.firstName }}
                {{ $auth.$state.user.lastName }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ $auth.$state.user.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
          <v-list
            nav
          >
            <v-list-item-group>
              <v-list-item to="/dashboard">
                <v-list-item-content>
                  <v-list-item-title>
                    Home
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-group :class="{active: $route.name.includes('creator')}">
                <template v-slot:activator>
                  <v-list-item-title>Manage</v-list-item-title>
                </template>
                <v-list-item to="/creator/country">
                  <v-list-item-content>
                    <v-list-item-title>
                      Countries
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="/creator/cryptocurrency">
                  <v-list-item-content>
                    <v-list-item-title>
                      Cryptocurrencies
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item to="/creator/currency">
                  <v-list-item-content>
                    <v-list-item-title>
                      Currencies
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list-item-group>
          </v-list>
      </v-navigation-drawer>
      <div class="relative main--content">
        <v-app-bar class="px-7" absolute app elevation="0">
          <div class="flex justify-between">
            <div class=""></div>
            <div class="inline-flex nav--links">
              <nuxt-link
                class="flex text-sm text-base-100 items-center mr-2"
                to="/find-transaction"
              >
                Find transaction
              </nuxt-link>
              <nuxt-link class="flex text-sm items-center mr-2" to="/feedback">
                Feedback
              </nuxt-link>
              <button class="btn btn-primary" @click="logout">
                <span class="text-white">Log out</span>
              </button>
            </div>
          </div>
        </v-app-bar>
        <Nuxt />
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      nav: true
    }
  },
  methods: {
    async logout() {
      this.loading = true
      try {
        const response = await this.$auth.logout()
        console.log('response is', response)
        this.loading = false
      } catch (err) {
        console.log('We got an error folks', err)
        this.loading = false
      }
    }
  }
}
</script>
<style lang="scss">
.nav--links {
  a {
    color: #0a0a0a;
  }
}
#__layout {
  .v-navigation-drawer {
    min-width: 256px;
    .v-list-group {
      .v-list-group__header[aria-expanded="true"], &.active > .v-list-group__header{
        background: rgb(148 72 220);
        .v-list-item__title, .v-icon {
          color: white
        }
      }
      .v-list-group__items {
        padding-left: 10px;
      }
    }
  }
  main.v-main {
    padding-top: 0 !important;
    .dashboard-view {
      height: calc(100vh - 64px);
      overflow-y: auto;
      padding: 0 10px;
    }
  }
  .v-list-item--active:not(.v-list-group__header) {
    background: #2936ac !important;
    .v-list-item__icon, .v-list-item__title{
      color: #fafafa;
    }
  }
  .v-navigation-drawer {
    .v-item-group{
      display: grid;
      grid-gap: 15px;
    }
  }
}
.v-main__wrap {
  display: flex;
  .main--content {
    min-width: calc(100% - 256px);
    overflow-y: hidden;
    .dashboard--container {
      padding-top: 64px;
      height: 100vh;
      overflow-y: auto;
    }
  }
}
</style>
