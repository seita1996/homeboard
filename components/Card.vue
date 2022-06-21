<template>
  <div class="shadow-md border rounded-md text-gray-700 text-base m-3">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-gray-600 text-base">
        {{ cardTitle }}
      </div>
      <div class="flex justify-between">
        <div class="text-2xl text-gray-600 text-base">
          {{ cardTime }}
        </div>
        <div class="flex justify-end">
          <div v-for="cardIconUrl in cardIconUrls">
            <img class="inline object-cover w-8 h-8 ml-2 rounded-full border shadow-xs" :src="cardIconUrl" alt="Profile image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    cardIconUrls: {
      type: Array,
      default: ['https://github.com/seita1996.png']
    },
    cardTime: {
      type: String,
      default: 'cardTime'
    },
    cardTitle: {
      type: String,
      default: 'cardTitle'
    },
  },
}
</script>
