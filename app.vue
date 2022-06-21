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
        <card-list :title="'今日の予定'" />
      </div>
      <div class="basis-1/3 m-3">
        <card-list :title="'明日以降の予定'" />
      </div>
      <div class="basis-1/3 m-3">
        <card-list :title="'TODO'" />
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
