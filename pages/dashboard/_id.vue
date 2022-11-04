<template>
  <div class="user--details user--container relative">
    <nuxt-link to="/dashboard" class="close--btn"
      ><i class="iconly-Close-Square"></i
    ></nuxt-link>
    <div class="user--content">
      <div class="tabs">
        <nuxt-link
          :exact-active-class="'tab-active'"
          :to="`/dashboard/${$route.params.id}`"
          class="tab tab-lifted"
        >
          <ic name="Paper" class="mr-2" /> <span>Details</span></nuxt-link
        >
        <nuxt-link
          :exact-active-class="'tab-active'"
          :to="`/dashboard/${$route.params.id}/history`"
          class="tab tab-lifted"
          ><ic name="Time-Circle" class="mr-2" /> History</nuxt-link
        >
        <nuxt-link
          :exact-active-class="'tab-active'"
          :to="`/dashboard/${$route.params.id}/transactions`"
          class="tab tab-lifted"
          ><ic name="Activity" class="mr-2" /> Transactions</nuxt-link
        >
      </div>
      <nuxt-child :key="$route.params.id" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Id'
}
</script>
