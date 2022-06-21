<template>
  <div class="basis-1/3 bg-white rounded-lg border">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-gray-700 text-base">{{ title }}</div>
      <card :cardTitle="'買い物'" :cardTime="'5/1 10:00 ~ 11:00'" />
      <card :cardTitle="'病院'" :cardTime="'5/1 15:00 ~ 17:00'" :cardIconUrls="['https://github.com/seita1996.png']" />
      <card :cardTitle="'薬を飲む'" :cardTime="'5/1 終日'" :cardIconUrls="[]" />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card,
  },
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
