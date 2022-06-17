<template>
  <div class="basis-1/3 bg-white rounded-lg border">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-gray-700 text-base">{{ title }}</div>
      <div class="shadow-md border rounded-md text-gray-700 text-base m-3">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-gray-600 text-base">
            買い物
          </div>
          <div class="flex justify-between">
            <div class="text-2xl text-gray-600 text-base">
              5/1 15:00 ~ 17:00
            </div>
            <img class="inline object-cover w-8 h-8 rounded-full" src="https://github.com/seita1996.png" alt="Profile image"/>
          </div>
        </div>
      </div>
      <div class="shadow-md border rounded-md text-gray-700 text-base m-3">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-gray-600 text-base">
            何かある
          </div>
          <div class="text-2xl text-gray-600 text-base">
            5/1 終日
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
    title: {
      type: String,
      default: 'title'
    },
  },
}
</script>
