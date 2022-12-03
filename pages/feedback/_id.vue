<template>
  <div class="user--details user--container relative">
    <nuxt-link to="/dashboard" class="close--btn"
      ><i class="iconly-Close-Square"></i
    ></nuxt-link>
    <div class="user--content">
      <div class="tabs">
        <div class="tabs">
          <h3 class="font-bold">Pending Information</h3>
        </div>
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
