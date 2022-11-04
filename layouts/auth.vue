<template>
  <v-app class="auth--app--holder">
    <v-app-bar class="px-7" fixed app elevation="0">
      <nuxt-link class="flex items-center" to="/">
        <img src="/auth-logo.png" alt="" />
      </nuxt-link>
    </v-app-bar>
    <v-main class="flex items-center">
      <v-container class="px-7">
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
  data() {
    return {
      clipped: false
    }
  }
}
</script>
