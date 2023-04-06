<template>
  <div class="dashboard--container justify-center">
    <div class="creator--content dashboard-view pt-5">
      <h3 class="text-2xl font-medium mb-5 text-center">Manage Assets for User Platform</h3>
<!--      <div class="tabs justify-center mb-10">
        <nuxt-link
          :exact-active-class="'tab-active'"
          to="/creator/country"
          class="tab tab-lifted"
        >
          Country
        </nuxt-link>
        <nuxt-link
          :exact-active-class="'tab-active'"
          to="/creator/user"
          class="tab tab-lifted"
        >
          User
        </nuxt-link>
&lt;!&ndash;        <nuxt-link
          :exact-active-class="'tab-active'"
          to="/creator/bank"
          class="tab tab-lifted"
        >
          Bank
        </nuxt-link>&ndash;&gt;
        <nuxt-link
          :exact-active-class="'tab-active'"
          to="/creator/cryptocurrency"
          class="tab tab-lifted"
        >
          Cryptocurrency
        </nuxt-link>
        <nuxt-link
          :exact-active-class="'tab-active'"
          to="/creator/currency"
          class="tab tab-lifted"
        >
          Currency
        </nuxt-link>
      </div>-->
      <nuxt-child :key="$route.name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Creator',
  async beforeMount() {
    await this.$store.dispatch('getCountries')
    await this.$store.dispatch('getUsers', {
      createdAtDateStart: '2022-10-19'
    })
    await this.$store.dispatch('getCryptoCurrencies')
    await this.$store.dispatch('getCurrencies')
  }
}
</script>
