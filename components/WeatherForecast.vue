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
import sunnyIcon from '@/assets/svg/sunny.svg'
import sunnyCloudyIcon from '@/assets/svg/sunny_cloudy.svg'
import cloudyIcon from '@/assets/svg/cloudy.svg'
import sunnyRainyIcon from '@/assets/svg/sunny_rainy.svg'
import lightRainyIcon from '@/assets/svg/light_rainy.svg'
import rainyIcon from '@/assets/svg/rainy.svg'
import hardRainyIcon from '@/assets/svg/hard_rainy.svg'
import sunnySnowyIcon from '@/assets/svg/sunny_snowy.svg'
import lightSnowyIcon from '@/assets/svg/light_snowy.svg'
import snowyIcon from '@/assets/svg/snowy.svg'
import hardSnowyIcon from '@/assets/svg/hard_snowy.svg'
import thunderIcon from '@/assets/svg/thunder.svg'

import axios from 'axios'

export default {
  data () {
    return {
      weatherCodeToIcon: {
        "100": sunnyIcon,
        "101": sunnyCloudyIcon,
        "102": sunnyRainyIcon,
        "103": sunnyRainyIcon,
        "104": sunnySnowyIcon,
        "105": sunnySnowyIcon,
        "106": sunnySnowyIcon,
        "107": sunnySnowyIcon,
        "108": thunderIcon,
        "110": sunnyCloudyIcon,
        "111": sunnyCloudyIcon,
        "112": sunnyRainyIcon,
        "113": sunnyRainyIcon,
        "114": sunnyRainyIcon,
        "115": sunnySnowyIcon,
        "116": sunnySnowyIcon,
        "117": sunnySnowyIcon,
        "118": sunnySnowyIcon,
        "119": thunderIcon,
        "120": sunnyRainyIcon,
        "121": sunnyRainyIcon,
        "122": sunnyRainyIcon,
        "123": thunderIcon,
        "124": sunnySnowyIcon,
        "125": thunderIcon,
        "126": sunnyRainyIcon,
        "127": sunnyRainyIcon,
        "128": sunnyRainyIcon,
        "130": sunnyCloudyIcon,
        "131": sunnyCloudyIcon,
        "132": sunnyCloudyIcon,
        "140": sunnyRainyIcon,
        "160": sunnySnowyIcon,
        "170": sunnySnowyIcon,
        "181": sunnySnowyIcon,
        "200": cloudyIcon,
        "201": sunnyCloudyIcon,
        "202": lightRainyIcon,
        "203": lightRainyIcon,
        "204": lightSnowyIcon,
        "205": lightSnowyIcon,
        "206": lightSnowyIcon,
        "207": lightSnowyIcon,
        "208": thunderIcon,
        "209": cloudyIcon,
        "210": sunnyCloudyIcon,
        "211": sunnyCloudyIcon,
        "212": lightRainyIcon,
        "213": lightRainyIcon,
        "214": rainyIcon,
        "215": lightSnowyIcon,
        "216": lightSnowyIcon,
        "217": snowyIcon,
        "218": snowyIcon,
        "219": thunderIcon,
        "220": lightRainyIcon,
        "221": lightRainyIcon,
        "222": lightRainyIcon,
        "223": sunnyCloudyIcon,
        "224": rainyIcon,
        "225": rainyIcon,
        "226": rainyIcon,
        "227": snowyIcon,
        "228": snowyIcon,
        "229": snowyIcon,
        "230": snowyIcon,
        "231": lightRainyIcon,
        "240": thunderIcon,
        "250": thunderIcon,
        "260": snowyIcon,
        "270": snowyIcon,
        "281": snowyIcon,
        "300": rainyIcon,
        "301": sunnyRainyIcon,
        "302": rainyIcon,
        "303": snowyIcon,
        "304": snowyIcon,
        "306": hardRainyIcon,
        "308": hardRainyIcon,
        "309": snowyIcon,
        "311": sunnyRainyIcon,
        "313": rainyIcon,
        "314": snowyIcon,
        "315": snowyIcon,
        "316": sunnySnowyIcon,
        "317": snowyIcon,
        "320": sunnyRainyIcon,
        "321": rainyIcon,
        "322": snowyIcon,
        "323": sunnyRainyIcon,
        "324": sunnyRainyIcon,
        "325": sunnyRainyIcon,
        "326": snowyIcon,
        "327": snowyIcon,
        "328": hardRainyIcon,
        "329": snowyIcon,
        "340": snowyIcon,
        "350": thunderIcon,
        "361": sunnySnowyIcon,
        "371": snowyIcon,
        "400": snowyIcon,
        "401": sunnySnowyIcon,
        "402": snowyIcon,
        "403": snowyIcon,
        "405": hardRainyIcon,
        "406": hardSnowyIcon,
        "407": hardSnowyIcon,
        "409": snowyIcon,
        "411": sunnySnowyIcon,
        "413": snowyIcon,
        "414": snowyIcon,
        "420": sunnySnowyIcon,
        "421": snowyIcon,
        "422": snowyIcon,
        "423": snowyIcon,
        "425": hardSnowyIcon,
        "426": snowyIcon,
        "427": snowyIcon,
        "450": thunderIcon,
      },
      weathers: [
        {
          date: "5/1",
          maxTemp: 25,
          minTemp: 18,
          pop: 0,
          weatherIcon: sunnyIcon
        },
        {
          date: "5/2",
          maxTemp: 20,
          minTemp: 18,
          pop: 60,
          weatherIcon: hardRainyIcon
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
    async fetchWeather() {
      const res = await axios.get('https://www.jma.go.jp/bosai/forecast/data/forecast/410000.json')
      // console.log('res', res)
      // console.log('res["data"][1]["timeSeries"]', res["data"][1]["timeSeries"])

      const timeDefines = res["data"][1]["timeSeries"][0]["timeDefines"].slice(0, 3).map((dateStr) => new Date(dateStr)).map((date) => `${date.getMonth() + 1}/${date.getDate()}`)
      const pops = res["data"][1]["timeSeries"][0]["areas"][0]["pops"].slice(0, 3).map((pop) => pop == '' ? '--' : pop )
      const weatherCodes = res["data"][1]["timeSeries"][0]["areas"][0]["weatherCodes"].slice(0, 3)
      const tempsMax = res["data"][1]["timeSeries"][1]["areas"][0]["tempsMax"].slice(0, 3).map((tempMax) => tempMax == '' ? '--' : tempMax )
      const tempsMin = res["data"][1]["timeSeries"][1]["areas"][0]["tempsMin"].slice(0, 3).map((tempMin) => tempMin == '' ? '--' : tempMin )
      this.weathers = []

      for (let i = 0; i < 3; i++) {
        this.weathers[i] = {
          date: timeDefines[i],
          maxTemp: tempsMax[i],
          minTemp: tempsMin[i],
          pop: pops[i],
          weatherIcon: this.weatherCodeToIcon[weatherCodes[i]]
        }
      }
    }
  },
  mounted() {
    this.fetchWeather()
  }
}
</script>
