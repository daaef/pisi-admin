<template>
  <v-app>
    <v-app-bar class="px-7" fixed app elevation="0">
      <div class="flex justify-between">
        <nuxt-link class="flex items-center" to="/dashboard">
          <img class="img-contain" src="/auth-logo.png" alt="" />
        </nuxt-link>
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
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false
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
</style>
