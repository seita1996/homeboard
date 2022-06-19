<template>
  <div class="flex justify-around px-6 py-4">
    <div v-for="weather in weathers">
      <div class="w-180">
        <div class="flex justify-center text-2xl text-gray-400 text-base">
          {{ weather.date }}
        </div>
        <div class="flex flex-row">
          <div class="basis-1/2">
            <img :src="weather.weatherIcon" width="180px" height="180px" />
          </div>
          <div class="basis-1/2 my-auto">
            <div class="text-2xl text-gray-400 text-base">
              {{ weather.maxTemp }}℃/{{ weather.minTemp }}℃
            </div>
            <div class="text-2xl text-gray-400 text-base">
              {{ weather.pop }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// svgs
import dayIcon from '@/assets/svg/day.svg'
import rainy7Icon from '@/assets/svg/rainy-7.svg'
import thunderIcon from '@/assets/svg/thunder.svg'

export default {
  data () {
    return {
      weathers: [
        {
          date: "5/1",
          maxTemp: 25,
          minTemp: 18,
          pop: 0,
          weatherIcon: dayIcon
        },
        {
          date: "5/2",
          maxTemp: 20,
          minTemp: 18,
          pop: 60,
          weatherIcon: rainy7Icon
        },
        {
          date: "5/3",
          maxTemp: 18,
          minTemp: 10,
          pop: 100,
          weatherIcon: thunderIcon
        }
      ]
    }
  },
  methods: {
  }
}
</script>
