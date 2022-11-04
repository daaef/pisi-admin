<template>
  <div class="dashboard--container">
    <div class="dashboard-view">
      <div class="hor--pane w-full">
        <h3 class="font-weight-bold text-2xl">Users</h3>
        <div class="select-set">
          <select class="select select-bordered select-sm">
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
          </select>
        </div>
      </div>
      <div class="overflow-x-auto">
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
              <td>{{ user.name }}</td>
              <td>{{ user.location }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'Matthew Ero',
          location: 'Nigeria',
          active: false
        },
        {
          id: 2,
          name: 'Jace Rodman',
          location: 'Nigeria',
          active: false
        },
        {
          id: 3,
          name: 'Tunde Ojigho',
          location: 'Nigeria',
          active: false
        },
        {
          id: 4,
          name: 'Jace Rodman',
          location: 'Nigeria',
          active: false
        },
        {
          id: 5,
          name: 'Jace Rodman',
          location: 'Nigeria',
          active: false
        },
        {
          id: 6,
          name: 'Jace Rodman',
          location: 'Nigeria',
          active: false
        }
      ]
    }
  },
  mounted() {
    this.users = [
      {
        id: 1,
        name: 'Matthew Ero',
        location: 'Nigeria',
        active: false
      },
      {
        id: 2,
        name: 'Jace Rodman',
        location: 'Nigeria',
        active: false
      },
      {
        id: 3,
        name: 'Tunde Ojigho',
        location: 'Nigeria',
        active: false
      },
      {
        id: 4,
        name: 'Jace Rodman',
        location: 'Nigeria',
        active: false
      },
      {
        id: 5,
        name: 'Jace Rodman',
        location: 'Nigeria',
        active: false
      },
      {
        id: 6,
        name: 'Jace Rodman',
        location: 'Nigeria',
        active: false
      }
    ]
  },
  methods: {
    toggleTable(id, i) {
      this.resetActiveState()
      this.users[i].active = true
      this.$router.push(`/dashboard/${id}`)
    },
    resetActiveState() {
      this.users.forEach((user) => (user.active = false))
    }
  }
}
</script>
