<template>
  <div class="details--tab exchange--tab">
    <div class="user--info">
      <div class="flex items-center">
        <p class="mr-5">Transaction ID:</p>
        <p class="text-primary">6728390-465322</p>
      </div>
    </div>
    <div class="user--info mt-8">
      <div>
        <p>
          I made a payment to Tunji Ojigho by morning yesterday but I am yet to
          recieve the crypto equivalent of the money I sent
        </p>
      </div>
    </div>

    <div class="user--info mt-8 flex-col items-end">
      <span>14th August, 2022</span>
      <span>12:17pm, WAT</span>
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
                <span class="text-primary">Matthew Ero?</span>
              </p>
              <div class="modal-action mt-0">
                <button
                  class="btn btn-primary w-full"
                  @click.prevent="show = false"
                >
                  Yes, deactivate
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
export default {
  name: 'UserDetailsPage',
  data() {
    return {
      show: false
    }
  }
}
</script>
