<template>
  <div class="bg-gray-200 h-screen">
    <div class="flex flex-row">
      <div class="basis-1/2 h-46 bg-white rounded-lg border m-3">
        <digital-clock />
      </div>
      <div class="basis-1/2 h-46 bg-white rounded-lg border m-3">
        <weather-forecast />
      </div>
    </div>
    <div class="flex flex-row">
      <div class="basis-1/3 h-1/2 m-3">
        <card-list :title="'今日の予定'" :cardsProperties="todayCardsProperties" />
      </div>
      <div class="basis-1/3 m-3">
        <card-list :title="'明日以降の予定'" :cardsProperties="tomorrowCardsProperties" />
      </div>
      <div class="basis-1/3 m-3">
        <card-list :title="'TODO'" :cardsProperties="todoCardsProperties" />
      </div>
    </div>
    <CogIcon class="h-10 w-10 text-gray-400 float-right mr-3 cursor-pointer" data-modal-toggle="authentication-modal" @click="showSettingModal" />
    <div>
      <setting-modal :isVisible="settingModalVisible" @close="closeSettingModal"></setting-modal>
    </div>
  </div>
</template>

<script>
import { CogIcon } from '@heroicons/vue/outline'

import CardList from '~/components/CardList.vue'
import DigitalClock from '~/components/DigitalClock.vue'
import SettingModal from '~/components/SettingModal.vue'
import WeatherForecast from '~/components/WeatherForecast.vue'
export default {
  components: {
    CardList,
    CogIcon,
    DigitalClock,
    SettingModal,
    WeatherForecast,
  },
  data () {
    return {
      settingModalVisible: false,
      todayCardsProperties: [
        {
          cardTitle: '買い物',
          cardTime: '5/1 5/1 10:00 ~ 11:00',
          cardIconUrls: [
            'https://3.bp.blogspot.com/-p1j5JG0kN8I/Wn1ZUJ3CbuI/AAAAAAABKK4/hKPhQjTXXv0o3QXh1J0rQ4TaFqGqUGu7ACLcBGAs/s800/animal_smile_kuma.png',
            'https://2.bp.blogspot.com/-mRJKwyORJkQ/Wn1ZTOBrszI/AAAAAAABKKs/Bg5yjLL9RYwmfUM0pEkBA3Ky3ui0IOZWQCLcBGAs/s800/animal_smile_inu.png'
          ]
        },
        {
          cardTitle: '病院',
          cardTime: '5/1 15:00 ~ 17:00',
          cardIconUrls: ['https://github.com/seita1996.png']
        },
        {
          cardTitle: '薬を飲む',
          cardTime: '5/1 終日',
          cardIconUrls: []
        },
      ],
      tomorrowCardsProperties: [
        {
          cardTitle: '仕事',
          cardTime: '5/2 9:00 ~ 18:00',
          cardIconUrls: ['https://github.com/seita1996.png']
        },
      ],
      todoCardsProperties: [
        {
          cardTitle: '納税',
          cardTime: '5/30',
          cardIconUrls: []
        },
      ],
    }
  },
  methods: {
    showSettingModal() {
      this.settingModalVisible = true
    },
    closeSettingModal() {
      this.settingModalVisible = false
    },
    fetchSchedule() {
      console.log('hoge')
    },
    fetchTodo() {
      console.log('fuga')
    }
  }
}
</script>
