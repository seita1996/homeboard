<template>
  <div class="basis-1/3 bg-white rounded-lg border">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-gray-700 text-base">{{ title }}</div>
      <div v-for="property in cardsProperties">
        <card :cardTitle="property.cardTitle" :cardTime="property.cardTime" :cardIconUrls="property.cardIconUrls" />
      </div>
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
    cardsProperties: {
      type: Array,
      default: [
        // {
        //   cardTitle: '病院',
        //   cardTime: '5/1 15:00 ~ 17:00',
        //   cardIconUrls: ['https://github.com/seita1996.png']
        // },
      ]
    },
  },
}
</script>
