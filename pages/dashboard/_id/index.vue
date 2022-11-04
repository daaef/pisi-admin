<template>
  <div class="details--tab exchange--tab">
    <div class="user--info">
      <div>
        <h4 class="text-xl font-medium">Matthew Ero</h4>
        <p class="text-primary text-xs">FGHJ-3438765</p>
      </div>
      <div class="text-gray-400 font-medium">
        <i class="iconly-Location icli"></i> <span>Nigeria</span>
      </div>
    </div>
    <div class="user--info">
      <div>
        <h4 class="text-sm text-gray-400 font-medium">Sign up date:</h4>
      </div>
      <div class="">
        <span>14th August, 2022</span>
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
          <span>Deactivate</span>
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
