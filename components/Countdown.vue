<script setup lang="ts">

const targetDate = new Date('2025-12-03T14:30:45')

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

let timerInterval: ReturnType<typeof setInterval> | null = null

const updateCountdown = () => {
  const now = new Date()
  const diff = targetDate.getTime() - now.getTime()

  if (diff <= 0) {
    if (timerInterval) {
      clearInterval(timerInterval)
    }
    days.value = hours.value = minutes.value = seconds.value = 0
    return
  }

  days.value = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((diff / (1000 * 60 * 60)) % 24)
  minutes.value = Math.floor((diff / (1000 * 60)) % 60)
  seconds.value = Math.floor((diff / 1000) % 60)
}

const formatNumber = (num: number): string => {
  return num.toString().padStart(2, '0')
}

onMounted(() => {
  updateCountdown()
  timerInterval = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval)
  }
})
</script>

<template>
  <div class="w-full flex flex-col gap-6 md:gap-20 py-8 px-8 md:py-14 bg-white text-[#555]">
    <div data-aos="fade-up">
      <div class="flex flex-col items-center gap-4">
        <div class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-jomolhari text-[#15364D] text-center">
          UNTIL THE BIG DAY
        </div>

        <div class="flex flex-nowrap justify-center items-start gap-3 sm:gap-6 md:gap-10 lg:gap-12 text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#15364D] font-jomolhari"> <!-- font-imbue  -->
          <div class="flex flex-col items-center w-15 sm:w-22 md:w-20 xl:w-24">
            <div>{{ formatNumber(days) }}</div>
            <div class="text-xs sm:text-base md:text-lg xl:text-xl">DAYS</div>
          </div>
          <div class="flex items-center">:</div>

          <div class="flex flex-col items-center w-15 sm:w-22 md:w-20 xl:w-24">
            <div>{{ formatNumber(hours) }}</div>
            <div class="text-xs sm:text-base md:text-lg xl:text-xl">HOURS</div>
          </div>
          <div class="flex items-center">:</div>

          <div class="flex flex-col items-center w-15 sm:w-22 md:w-20 xl:w-24">
            <div>{{ formatNumber(minutes) }}</div>
            <div class="text-xs sm:text-base md:text-lg xl:text-xl">MINUTES</div>
          </div>
          <div class="flex items-center">:</div>

          <div class="flex flex-col items-center w-15 sm:w-22 md:w-20 xl:w-24">
            <div class="text-[#53708b]">{{ formatNumber(seconds) }}</div>
            <div class="text-xs sm:text-base md:text-lg xl:text-xl">SECONDS</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center text-center gap-4 mt-6 md:mt-12 ">
        <div class="flex items-center gap-2">
          <div class="text-2xl sm:text-4xl md:text-5xl initials font-bold md:font-light">C</div>
          <NuxtImg src="/images/flowers.png" class="w-auto h-[1.50rem] md:h-[2.50rem]" />
          <div class="text-2xl sm:text-4xl md:text-5xl initials font-bold md:font-light">J</div>
        </div>

        <div class="text-base md:text-lg lg:text-xl font-jacques">
          <div>We invite you to join us in the <br> celebration of our love and commitment</div>
        </div>

        <a href="https://docs.google.com/forms/d/14aC3TWy41O9VxfNS_DgXowdKWpJlTeTAm8gTeUgv0Xw/edit" target="_blank" rel="noopener noreferrer" class="bg-[#22619A] font-jacques text-white md:mt-2 text-[15px] md:text-lg lg:text-xl px-16 sm:px-20 py-1 inline-block relative">
          RSVP
        </a>

      </div>
    </div>
  </div>
</template>
