<template>
  <v-app>
    <v-app-bar class="px-7" fixed app elevation="0">
      <div class="flex justify-between">
        <nuxt-link class="flex items-center" to="/dashboard">
          <img class="img-contain" src="/auth-logo.png" alt="" />
        </nuxt-link>

        <nuxt-link to="/" class="btn btn-primary">
          <span class="text-white">Log out</span>
        </nuxt-link>
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
  }
}
</script>
