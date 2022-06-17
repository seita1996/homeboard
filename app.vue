<template>
  <div class="bg-gray-200 h-screen">
    <div class="flex flex-row">
      <div class="basis-1/2 h-40 bg-white rounded-lg border m-3">日時</div>
      <div class="basis-1/2 h-40 bg-white rounded-lg border m-3">天気</div>
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
  </div>
</template>

<script>
import CardList from '~/components/CardList.vue'
export default {
  components: {
    CardList
  },
  data () {
    return {
    }
  }
}
</script>
