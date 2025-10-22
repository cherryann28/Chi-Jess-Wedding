<!-- <script setup lang="ts">

import { useStoreMenu } from '~/stores/menu'

const { active: activeMenu } = storeToRefs(useStoreMenu())

const sections = ref<any>([])

const homeVisible = ref<any>()
const aboutVisible = ref<any>()
const featuresVisible = ref<any>()
const servicesVisible = ref<any>()
const pricingVisible = ref<any>()
const contactVisible = ref<any>()


const updateMenu = () => {
  // console.log(aboutVisible.value)

  if (homeVisible.value._rawValue) {
    activeMenu.value = 'home'
  }

  if (aboutVisible.value._rawValue) {
    activeMenu.value = 'about'
  }

  if (featuresVisible.value._rawValue) {
    activeMenu.value = 'features'
  }

  if (servicesVisible.value._rawValue) {
    activeMenu.value = 'services'
  }

  if (pricingVisible.value._rawValue) {
    activeMenu.value = 'pricing'
  }

  if (contactVisible.value._rawValue) {
    activeMenu.value = 'contact'
  }
}

onMounted(() => {
  homeVisible.value = useElementVisibility(sections.value['home'], {
    threshold: 0.10
  })
  aboutVisible.value = useElementVisibility(sections.value['about'], {
    threshold: 0.10
  })
  featuresVisible.value = useElementVisibility(sections.value['features'], {
    threshold: 0.10
  })
  servicesVisible.value = useElementVisibility(sections.value['services'], {
    threshold: 0.10
  })
  pricingVisible.value = useElementVisibility(sections.value['pricing'], {
    threshold: 0.10
  })
  contactVisible.value = useElementVisibility(sections.value['contact'], {
    threshold: 0.10
  })
})

watch(() => [homeVisible, aboutVisible, featuresVisible, servicesVisible, pricingVisible, contactVisible], ([a, b, c, d, e, f], [aa, bb, cc, dd, ee, ff]) => {
  updateMenu()
},
  { deep: true })
</script>

<template>
  <div class="">

    <section id="home" :ref="el => { sections['home'] = el }">
      <Home />
    </section>

    <section id="about" :ref="el => { sections['about'] = el }">
      <About />
    </section>

    <section id="features" :ref="el => { sections['features'] = el }">
      <Features />
      <FeaturesB />
    </section>

    <section id="services" :ref="el => { sections['services'] = el }">
      <Services />
    </section>

    <section id="pricing" :ref="el => { sections['pricing'] = el }">
      <Pricing />
    </section>

    <section id="contact" :ref="el => { sections['contact'] = el }">
      <Contact />
    </section>

    <Footer />
  </div>
</template> -->








<template>
  <div>
    <section>
      <Home />
    </section>
    <section>
      <Countdown />
    </section>
    <section>
      <SaveTheDate />
    </section>
    <section>
      <LoveStory />
    </section>
    <section>
      <Gallery />
    </section>
    <section>
      <Details />
    </section>
    <section>
      <Entourage />
    </section>
    <section>
      <Footer />
    </section>
  </div>
</template>
