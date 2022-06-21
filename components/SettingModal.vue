<template>
  <teleport to="body">
    <div class="modal" id="setting-modal">
      <div class="modal fade fixed inset-x-0 mx-auto top-32 w-1/2 h-full" v-show="isVisible" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div class="modal-content border shadow-2xl relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-medium leading-normal text-gray-600">設定</h5>
              <XIcon class="h-10 w-10 text-gray-500 float-right mr-3 cursor-pointer" @click="close" />
            </div>
            <div class="modal-body relative p-4">
              <div class="mb-6">
                  <label for="timetreeapikey-input" class="block mb-2 text-sm font-medium text-gray-600">TimeTree API Key</label>
                  <input type="text" id="timetreeapikey-input" v-model="timetreeApiKey" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
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
import { XIcon } from '@heroicons/vue/outline'

export default {
  components: {
    XIcon
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
      this.notionApiKey = this.$cookiz.get('notionApiKey')
      this.notionTodoDatabaseId = this.$cookiz.get('notionTodoDatabaseId')
    },
    updateSettings() {
      console.log('updateSettings')
      this.$cookiz.set('timetreeApiKey', this.timetreeApiKey)
      this.$cookiz.set('notionApiKey', this.notionApiKey)
      this.$cookiz.set('notionTodoDatabaseId', this.notionTodoDatabaseId)
      alert('設定を更新しました')
      this.$emit('close')
    }
  },
  mounted() {
    this.getSettings()
  },
}
</script>
