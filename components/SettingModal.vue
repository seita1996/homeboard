<template>
  <teleport to="body">
    <div class="modal" id="setting-modal">
      <div class="modal fade fixed inset-x-0 mx-auto top-28 w-1/2 h-full" v-show="isVisible" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div class="modal-content border shadow-2xl relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-medium leading-normal text-gray-600">設定</h5>
              <XMarkIcon class="h-10 w-10 text-gray-500 float-right mr-3 cursor-pointer" @click="close" />
            </div>
            <div class="modal-body relative p-4">
              <div class="mb-6">
                  <label for="timetreeapikey-input" class="block mb-2 text-sm font-medium text-gray-600">TimeTree API Key</label>
                  <input type="text" id="timetreeapikey-input" v-model="timetreeApiKey" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              </div>
              <div class="mb-6">
                  <label for="timetreecalendarid-input" class="block mb-2 text-sm font-medium text-gray-600">TimeTree Calendar ID</label>
                  <input type="text" id="timetreecalendarid-input" v-model="timetreeCalendarId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              </div>
              <div class="mb-6">
                  <label for="notionapikey-input" class="block mb-2 text-sm font-medium text-gray-600">Notion API Key</label>
                  <input type="text" id="notionapikey-input" v-model="notionApiKey" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              </div>
              <div class="mb-6">
                  <label for="notiontododbid-input" class="block mb-2 text-sm font-medium text-gray-600">Notion Todo Database ID</label>
                  <input type="text" id="notiontododbid-input" v-model="notionTodoDatabaseId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
              </div>
              <div class="flex flex-row-reverse">
                <button class="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow" @click="updateSettings">
                  保存
                </button>
                <button class="bg-white hover:bg-gray-100 text-gray-600 font-semibold py-2 px-4 border border-gray-300 rounded-lg mr-3" @click="close">
                  キャンセル
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/24/outline'

export default {
  components: {
    XMarkIcon
  },
  props: {
    isVisible: {
      required: true,
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      timetreeApiKey: '',
      timetreeCalendarId: '',
      notionApiKey: '',
      notionTodoDatabaseId: '',
    }
  },
  methods: {
    close() {
      this.$emit('close')
    },
    getSettings() {
      console.log('getSettings')
      this.timetreeApiKey = this.$cookiz.get('timetreeApiKey')
      this.timetreeCalendarId = this.$cookiz.get('timetreeCalendarId')
      this.notionApiKey = this.$cookiz.get('notionApiKey')
      this.notionTodoDatabaseId = this.$cookiz.get('notionTodoDatabaseId')
    },
    updateSettings() {
      console.log('updateSettings')
      const exp = new Date(new Date().getTime() + 1000 * 3600 * 24 * 30 * 12)
      this.$cookiz.set('timetreeApiKey', this.timetreeApiKey, { expires: exp })
      this.$cookiz.set('timetreeCalendarId', this.timetreeCalendarId, { expires: exp })
      this.$cookiz.set('notionApiKey', this.notionApiKey, { expires: exp })
      this.$cookiz.set('notionTodoDatabaseId', this.notionTodoDatabaseId, { expires: exp })
      alert('設定を更新しました')
      this.$emit('close')
    }
  },
  mounted() {
    this.getSettings()
  },
}
</script>
