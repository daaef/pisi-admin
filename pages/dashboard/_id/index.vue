<template>
  <div class="details--tab exchange--tab">
    <div class="user--info">
      <div>
        <h4 class="text-xl font-medium">
          {{ currentUser?.firstName }} {{ currentUser?.lastName }}
        </h4>
        <p class="text-primary text-xs">{{ currentUser?.id }}</p>
      </div>
      <div class="text-gray-400 font-medium">
        <i class="iconly-Location icli"></i>
        <span>{{ currentCountry?.name }}</span>
      </div>
    </div>
    <div class="user--info mt-3">
      <div>
        <h4 class="text-sm text-gray-400 font-medium">Email:</h4>
      </div>
      <div class="">
        <span>{{ currentUser?.email }}</span>
      </div>
    </div>
    <div class="user--info mt-3">
      <div>
        <h4 class="text-sm text-gray-400 font-medium">Verified Email:</h4>
      </div>
      <div class="">
        <span>{{ currentUser?.emailVerified ? 'Yes' : 'No' }}</span>
      </div>
    </div>
    <div class="user--info mt-3">
      <div>
        <h4 class="text-sm text-gray-400 font-medium">Uploaded Document:</h4>
      </div>
      <div class="">
        <span>{{ currentUser?.identityDocument ? 'Yes' : 'No' }}</span>
      </div>
    </div>
    <div class="user--info mt-3">
      <div>
        <h4 class="text-sm text-gray-400 font-medium">Added Selfie:</h4>
      </div>
      <div class="">
        <span>{{ currentUser?.selfieImage ? 'Yes' : 'No' }}</span>
      </div>
    </div>
    <div class="user--info mt-3">
      <div>
        <h4 class="text-sm text-gray-400 font-medium">Uploaded Utility Bill:</h4>
      </div>
      <div class="">
        <span>{{ currentUser?.utilityBill ? 'Yes' : 'No' }}</span>
      </div>
    </div>
    <div class="user--info mt-3">
      <div>
        <h4 class="text-sm text-gray-400 font-medium">Sign up date:</h4>
      </div>
      <div class="">
        <span>{{ $dayjs(currentUser?.createdAt).format('MMMM DD, YYYY') }}</span>
      </div>
    </div>
    <div class="user--info mt-3">
      <div>
        <h4 class="text-sm text-gray-400 font-medium">
          Number of transactions:
        </h4>
      </div>
      <div class="">
        <span>5,544</span>
      </div>
    </div>
    <div class="flex justify-end mt-8">
      <div class="">
        <button class="btn btn-primary" @click.prevent="show = true">
          <span>{{
            currentUser?.active ? 'Deactivate' : 'Activate'
          }}</span>
        </button>
      </div>
    </div>

    <v-dialog v-model="show" class="history--mmodal" max-width="290">
      <v-card>
        <v-card-text>
          <div class="deactivate--modal">
            <div class="">
              <div class="flex justify-center">
                <div class="rotate--icon inline-block">
                  <i class="iconly-Logout icbo"></i>
                </div>
              </div>
              <p class="py-4 text-center mb-0">
                Are you sure you want to deactivate
                <span class="text-primary">{{ currentUser?.firstName }} {{ currentUser?.lastName }}?</span>
              </p>
              <div class="modal-action mt-0">
                <button
                  class="btn btn-primary w-full"
                  @click.prevent="suspendUser"
                >
                  Yes, suspend
                </button>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserDetailsPage',
  data() {
    return {
      show: false,
      items: [
        {
          action: 'mdi-ticket',
          items: [{ title: 'List Item' }],
          title: 'Attractions',
        },
        {
          action: 'mdi-silverware-fork-knife',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' },
          ],
          title: 'Dining',
        },
        {
          action: 'mdi-school',
          items: [{ title: 'List Item' }],
          title: 'Education',
        },
        {
          action: 'mdi-human-male-female-child',
          items: [{ title: 'List Item' }],
          title: 'Family',
        },
        {
          action: 'mdi-bottle-tonic-plus',
          items: [{ title: 'List Item' }],
          title: 'Health',
        },
        {
          action: 'mdi-briefcase',
          items: [{ title: 'List Item' }],
          title: 'Office',
        },
        {
          action: 'mdi-tag',
          items: [{ title: 'List Item' }],
          title: 'Promotions',
        },
      ],
    }
  },
  computed: {
    currentUser() {
      return this.users.find((active) => {
        return active.id === this.$route.params.id
      })
    },
    currentCountry() {
      return this.countries.find((active) => {
        return active.id === this.currentUser.countryId
      })
    },
    ...mapGetters({
      users: 'users',
      countries: 'countries'
    })
  },
  methods: {
    async suspendUser() {
      await this.$store.dispatch('toggleUserStatus', this.$route.params.id)
      this.show = false
    }
  }
}
</script>
