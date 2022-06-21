<template>
  <div class="shadow-md border rounded-md text-gray-700 text-base m-3">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2 text-gray-600 text-base">
        {{ cardTitle }}
      </div>
      <div class="flex justify-between">
        <div class="text-2xl text-gray-600 text-base">
          {{ cardTime }}
        </div>
        <div class="flex justify-end">
          <div v-for="cardIconUrl in cardIconUrls">
            <img class="inline object-cover w-8 h-8 ml-2 rounded-full border shadow-xs" :src="cardIconUrl" alt="Profile image"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    cardIconUrls: {
      type: Array,
      default: [
        'https://3.bp.blogspot.com/-p1j5JG0kN8I/Wn1ZUJ3CbuI/AAAAAAABKK4/hKPhQjTXXv0o3QXh1J0rQ4TaFqGqUGu7ACLcBGAs/s800/animal_smile_kuma.png',
        'https://2.bp.blogspot.com/-mRJKwyORJkQ/Wn1ZTOBrszI/AAAAAAABKKs/Bg5yjLL9RYwmfUM0pEkBA3Ky3ui0IOZWQCLcBGAs/s800/animal_smile_inu.png'
      ]
    },
    cardTime: {
      type: String,
      default: 'cardTime'
    },
    cardTitle: {
      type: String,
      default: 'cardTitle'
    },
  },
}
</script>
