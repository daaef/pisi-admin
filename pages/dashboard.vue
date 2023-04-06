<template>
  <div class="dashboard--container">
    <div class="dashboard-view">
      <div class="hor--pane w-full">
        <h3 class="font-weight-bold text-2xl">Users</h3>
      </div>
      <div class="overflow-x-auto users-table">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr class="text-primary">
              <th class="w-full font-medium normal-case">Name</th>
              <th class="font-medium normal-case">Location</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr
              v-for="(user, i) in users"
              :key="i"
              :class="{
                'row--active':
                  $route.path.indexOf(`/dashboard/${user.id}`) !== -1
              }"
              @click="toggleTable(user.id, i)"
            >
              <td>
                {{ user?.firstName ?? 'Jon' }} {{ user?.lastName ?? 'Doe' }}
              </td>
              <td>{{ countries[`${user?.countryId - 1}`]?.name ?? 'None' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DashboardView',
  data: ()=> ({
    items: [
      {title: 'Country'},
      {title: 'User'},
      // {title: 'Bank'},
      {title: 'Cryptocurrency'},
      {title: 'Currency'},
    ]
  }),
  computed: {
    ...mapGetters({
      users: 'users',
      countries: 'countries'
    })
  },
  async mounted() {
    await this.$store.dispatch('getUsers', { createdAtDateStart: '2022-10-19' })
    await this.$store.dispatch('getCountries')
  },
  methods: {
    toggleTable(id, i) {
      this.resetActiveState()
      this.$store.commit('updateActiveUser', i)
      this.$router.push(`/dashboard/${id}`)
    },
    log(e){
      console.log('event', e)
    },
    resetActiveState() {
      this.$store.commit('resetActiveUser')
    }
  }
}
</script>
