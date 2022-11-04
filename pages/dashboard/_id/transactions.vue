<template>
  <div class="exchange--tab transactions--tab">
    <div class="flex justify-between px-1">
      <div class="inline-flex items-center">
        <i class="iconly-Arrow-Up icli text-primary mr-1"></i>
        <h3 class="text-primary text-sm font-bold">Sent</h3>
      </div>

      <div class="inline-flex items-center">
        <i class="iconly-Arrow-Down icli text-success mr-1"></i>
        <h3 class="text-primary text-sm font-bold">To receive</h3>
      </div>
    </div>
    <div class="flex justify-between mt-3">
      <div class="inline-flex items-center amount-img">
        <img src="/us-flag.png" class="mr-1" alt="Us Flag" />
        <h3 class="text-primary font-medium text-sm">USD</h3>
      </div>

      <div class="amount-ngn">
        <div class="currency--holder text-sm">
          <span class="currency">₦</span>
          NGN
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-1">
      <p class="font-medium">€765.00</p>
      <h4 class="font-medium">₦63,634.92</h4>
    </div>
    <div class="flex justify-between mt-1">
      <div class="border-gray-400 border-t border-dashed w-16" />
      <div class="border-gray-400 border-t border-dashed w-16" />
    </div>
    <div class="flex justify-between mt-1">
      <p class="text-sm text-gray-400">14th October, 2022</p>
      <h4 class="text-sm text-gray-400">15th October, 2022</h4>
    </div>
    <div class="flex justify-center mt-3">
      <img
        src="/transfer--arrows.png"
        alt="Transfer arrows"
        class="transfer-arrows"
      />
    </div>
    <div class="flex justify-center mt-3">
      <span>Rate: $1 = 466.72</span>
    </div>
    <div class="flex justify-center mt-2">
      <span class="text-gray-400">Official rate: $1 = 433.72</span>
    </div>
    <div class="flex trans--card items-center justify-between mt-3">
      <p class="text-sm flex">
        <span class="block mr-2">@jacerodman</span>
        <span class="text-gray-400">14th October, 2022</span>
      </p>
      <p class="text-sm">$100.00</p>
    </div>
    <div class="flex trans--card items-center justify-between mt-2">
      <p class="text-sm flex">
        <span class="block mr-2">@tundeojigho</span>
        <span class="text-gray-400">15th October, 2022</span>
      </p>
      <p class="text-sm">$70.00</p>
    </div>
    <div class="border-t border-primary my-3"></div>
    <div class="flex justify-between">
      <span class="text-black">Amount left in escrow</span>
      <span class="text-primary">$330.00</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserTransactionsPage'
}
</script>
