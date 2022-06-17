<template>
  <div class="px-6 py-4">
    <div class="text-6xl text-gray-400 text-base">
      {{ year }}/{{ month }}/{{ date }} {{ dayName }}
    </div>
    <div class="text-8xl text-gray-400 text-base">
      {{ hours }}:{{ minutes }}:{{ seconds }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: 0,
      month: 0,
      date: 0,
      dayName: 'Sun',
      hours: 0,
      minutes: 0,
      seconds: 0,
      dayNames: [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
      ],
    }
  },
  mounted() {
    setInterval(() => this.setTime(), 1000)
  },
  methods: {
    setTime() {
      const date = new Date()
      this.year = date.getFullYear()
      this.month = date.getMonth()
      this.date = date.getDate()
      this.dayName = this.dayNames[date.getDay()]
      let hours = date.getHours()
      let minutes = date.getMinutes()
      let seconds = date.getSeconds()
      hours = hours <= 9 ? `${hours}`.padStart(2, 0) : hours
      minutes = minutes <= 9 ? `${minutes}`.padStart(2, 0) : minutes
      seconds = seconds <= 9 ? `${seconds}`.padStart(2, 0) : seconds
      this.hours = hours
      this.minutes = minutes
      this.seconds = seconds
    }
  }
}
</script>
