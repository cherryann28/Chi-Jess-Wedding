import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css'
import { Grid } from '@splidejs/splide-extension-grid'

export default defineNuxtPlugin((nuxtApp) => {
  // nuxtApp.vueApp.use(VueSplide)
  nuxtApp.vueApp.component("Splide", Splide)
  nuxtApp.vueApp.component("SplideSlide", SplideSlide)
  nuxtApp.vueApp.component("SplideTrack", SplideTrack)
  nuxtApp.provide('Splide', () => new Splide().mount({ Grid }));

  // return {
  //   provide: {
  //     splide: (options: any) => new Splide(options).mount({ Grid }),
  //   },
  // };
  /* return {
    provide: {
      grid: Grid
    }
  } */
})