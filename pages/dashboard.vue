<template>
  <div class="dashboard--container">
    <div class="dashboard-view">
      <div class="hor--pane w-full">
        <h3 class="font-weight-bold text-2xl">Users</h3>
        <div class="select-set">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn m-1 btn-primary">Add
              <i class="iconly-Arrow-Down icli text-white ml-1" />
            </label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li v-for="(item, i) in items" :key="i">
                <nuxt-link :to="`/creator/${item.title.toLowerCase()}`" @click="log(item.title)">{{ item.title }}</nuxt-link>
              </li>
            </ul>
          </div>
<!--          <select class="select select-bordered select-sm">
            <option disabled selected>Location</option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>
          <div class="border-l border-gray-400 mx-3"></div>
          <select class="select select-bordered select-sm">
            <option disabled selected>Nigeria</option>
            <option>Small Apple</option>
            <option>Small Orange</option>
            <option>Small Tomato</option>
          </select>-->
        </div>
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
