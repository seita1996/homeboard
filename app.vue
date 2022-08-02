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

import axios from 'axios'

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
        // {
        //   cardTitle: '買い物',
        //   cardTime: '5/1 10:00 ~ 11:00',
        //   cardIconUrls: [
        //     'https://3.bp.blogspot.com/-p1j5JG0kN8I/Wn1ZUJ3CbuI/AAAAAAABKK4/hKPhQjTXXv0o3QXh1J0rQ4TaFqGqUGu7ACLcBGAs/s800/animal_smile_kuma.png',
        //     'https://2.bp.blogspot.com/-mRJKwyORJkQ/Wn1ZTOBrszI/AAAAAAABKKs/Bg5yjLL9RYwmfUM0pEkBA3Ky3ui0IOZWQCLcBGAs/s800/animal_smile_inu.png'
        //   ]
        // },
        // {
        //   cardTitle: '病院',
        //   cardTime: '5/1 15:00 ~ 17:00',
        //   cardIconUrls: ['https://github.com/seita1996.png']
        // },
        // {
        //   cardTitle: '薬を飲む',
        //   cardTime: '5/1 終日',
        //   cardIconUrls: []
        // },
      ],
      tomorrowCardsProperties: [
        // {
        //   cardTitle: '仕事',
        //   cardTime: '5/2 9:00 ~ 18:00',
        //   cardIconUrls: ['https://github.com/seita1996.png']
        // },
      ],
      todoCardsProperties: [
        // {
        //   cardTitle: '納税',
        //   cardTime: '5/30',
        //   cardIconUrls: []
        // },
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
    eventTime(startAtStr, endAtStr) {
      const startAt = new Date(Date.parse(startAtStr))
      const endAt = new Date(Date.parse(endAtStr))

      // startとendが同じ場合「終日」
      if (startAt.getTime() == endAt.getTime()) return `${startAt.getMonth() + 1}/${startAt.getDate()} 終日`

      return `${startAt.getMonth() + 1}/${startAt.getDate()} ${startAt.getHours()}:${startAt.getMinutes().toString().padStart(2, '0')} ~ ${endAt.getHours()}:${endAt.getMinutes().toString().padStart(2, '0')}`
    },
    async fetchSchedule() {
      const calendarId = this.$cookiz.get('timetreeCalendarId')
      const token = this.$cookiz.get('timetreeApiKey')
      const res = await axios.get(`https://timetreeapis.com/calendars/${calendarId}/upcoming_events?timezone=Asia/Tokyo&days=7&include=attendees`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      // console.log('res', res)
      this.updateSchedureCards(res)
    },
    async fetchTodo() {
      const databaseId = this.$cookiz.get('notionTodoDatabaseId')
      const token = this.$cookiz.get('notionApiKey')
      const query =
        {
          "filter": {
            "and": [
              {
                "property": "ステータス",
                "select": {
                  "does_not_equal": "完了"
                }
              }
            ]
          },
          "sorts": [
            {
              "property": "期限",
              "direction": "ascending"
            }
          ]
        }
      const res = await axios.post(`/api/v1/databases/${databaseId}/query`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Notion-Version": "2021-08-16",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(query)
      })
      console.log('hogehogehoge', res)
    },
    isToday(someDateStr) {
      const today = new Date()
      const someDate = new Date(Date.parse(someDateStr))
      return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
    },
    updateSchedureCards(res) {
      this.todayCardsProperties = []
      this.tomorrowCardsProperties = []

      let users = {}
      res.data.included.forEach((u) => {
        users[u.id.replace(',', '')] = u.attributes.image_url // timetreeのユーザーidはカレンダーID（英数）,ユーザーID（数字）となっており、key名にカンマが使えないので削除して扱う
      })
      res.data.data.forEach((event) => {
        const newEvent = {
          cardTitle: event.attributes.title,
          cardTime: this.eventTime(event.attributes.start_at, event.attributes.end_at),
          cardIconUrls: event.relationships.attendees.data.map((d) => users[d.id.replace(',', '')]),
        }

        if (this.isToday(event.attributes.start_at)) {
          this.todayCardsProperties.push(newEvent)
        } else if (this.tomorrowCardsProperties.length < 3) {
          this.tomorrowCardsProperties.push(newEvent)
        }
      })
    },
  },
  mounted() {
    this.fetchSchedule()
    this.fetchTodo()

    const apicall = function(){
      this.fetchSchedule()
      this.fetchTodo()
    }.bind(this)

    // 10分おきに実行
    setInterval(apicall, 600000)
  },
}
</script>
