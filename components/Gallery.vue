<script setup lang="ts">

const items = [
  { name: 'bridal1', background: 'bridal1.jpg' },
  { name: 'bridal2', background: 'bridal2.jpg' },
  { name: 'bridal3', background: 'bridal3.jpg' },
  { name: 'bridal4', background: 'bridal4.jpg' },
  { name: 'bridal5', background: 'bridal5.jpg' },
  { name: 'bridal6', background: 'bridal6.jpg' },
  { name: 'bridal7', background: 'bridal7.jpg' },
  { name: 'bridal8', background: 'bridal8.jpg' },
  { name: 'bridal9', background: 'bridal9.jpg' },
  { name: 'bridal10', background: 'bridal10.jpg' },
  { name: 'bridal11', background: 'bridal11.jpg' },
  { name: 'bridal12', background: 'bridal12.jpg' },
  { name: 'bridal13', background: 'bridal13.jpg' },
  { name: 'bridal14', background: 'bridal14.jpg' },
  { name: 'bridal15', background: 'bridal15.jpg' },
  { name: 'bridal16', background: 'bridal16.jpg' },
  { name: 'bridal17', background: 'bridal17.jpg' },
]

const splide = ref()
const options = {
  type: 'loop',
  rewind: false,
  perPage: 4,
  gap: 16,
  trimSpace: true,
  autoplay: true,
  interval: 3000,
  arrows: true,
  pagination: false,
  speed: 1000,
  classes: {
    arrow: 'splide__arrow footer__bridal-carousel-arrow',
    prev: 'splide__arrow--prev footer__bridal-carousel-arrow-prev',
    next: 'splide__arrow--next footer__bridal-carousel-arrow-next',
  },
  breakpoints: {
    450: {
      perPage: 1,
    },
    768: {
      perPage: 2,
    },
    1024: {
      perPage: 3,
    }
  }
}
</script>

<template>
  <div class="footer">
    <div class="md:mb-4">
      <h3 class=" text-[#22619A] text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-alex text-center mb-6 md:mb-12" data-aos="fade-up"> <!--text-[#1b3164] -->
        Our Prenuptial Shoot
      </h3>

      <Splide ref="splide" :has-track="false" :options="options">
        <SplideTrack class="mx-8">
          <SplideSlide v-for="(item, i) in items" :key="i">
            <div class="footer__bridal-item-cont">
              <NuxtImg :src="`/images/bridal/${item.background}`" class="footer__sponsor-carousel-item-img" width="684" height="690" loading="lazy" format="webp" quality="100" />
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </div>
  </div>
</template>
