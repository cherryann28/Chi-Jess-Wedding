<template>
  <div class="w-full h-auto bg-[#f3f5f6] py-6 md:py-10 px-4">
    <div class="flex flex-col justify-center gap-3 md:gap-6 max-w-4xl mx-auto px-4 font-jomolhari" data-aos="fade-up">
      <h2 class="italic text-[#0f487e] text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl">DETAILS</h2>
      <h3 class="text-[#23557e] text-xl text-center md:text-2xl lg:text-3xl xl:text-4xl">DRESS CODE</h3>
      <div class="max-w-2xl mx-auto">
        <p class="md:my-8 text-[#555] text-[15px] md:text-lg lg:text-xl text-center">
          Please wear attire in shades of blue (dusty, cornich, navy, powder, or royal blue).
          Ladies are encouraged to wear long dresses, while gentlemen may wear formal or semi-formal attire.
          Kindly ensure your outfit is suitable for a church setting.
        </p>
      </div>
      <p class="text-[#1b3164] text-base sm:text-lg md:text-2xl my-4 text-center">Suggested Color Palette:</p>

      <div class="flex gap-2 md:gap-8 justify-center">
        <div class="w-14 sm:w-20 md:w-24 lg:w-40 h-6 lg:h-8 bg-[#576e9a] " title="Dusty Blue"></div>
        <div class="w-14 sm:w-20 md:w-24 lg:w-40 h-6 lg:h-8 bg-[#6495ED]" title="Cornflower Blue"></div>
        <div class="w-14 sm:w-20 md:w-24 lg:w-40 h-6 lg:h-8 bg-[#183764]" title="Navy Blue"></div>
        <div class="w-14 sm:w-20 md:w-24 lg:w-40 h-6 lg:h-8 bg-[#68BBE3]" title="Light Blue"></div>
        <div class="w-14 sm:w-20 md:w-24 lg:w-40 h-6 lg:h-8 bg-[#4169E1]" title="Royal Blue"></div>
      </div>
    </div>

    <div class="flex flex-col items-center gap-8 mt-12 md:mt-24 mb-4 px-4">
      <h3 class="text-[#23557e] text-lg text-center md:text-2xl lg:text-3xl xl:text-4xl md:mb-12 font-jomolhari">
        WEDDING CEREMONY & RECEPTION VENUE
      </h3>

      <!-- Ceremony Venue -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 w-full max-w-6xl">
        <div class="rounded-xl overflow-hidden" data-aos="fade-up">
          <NuxtImg src="/images/metropolitan-church.jpg" class="w-full h-[350px] object-cover block" format="webp" quality="100" alt="Church" />
        </div>
        <div class="rounded-xl overflow-hidden" data-aos="fade-up">
          <iframe title="Manila Cathedral Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.128595118585!2d120.97081717574126!3d14.591747377292036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca17d22e6779%3A0x6a3a0ef7daa839d!2sMinor%20Basilica%20and%20Metropolitan%20Cathedral%20of%20the%20Immaculate%20Conception%20-%20The%20Manila%20Cathedral!5e0!3m2!1sen!2sph!4v1759353729955!5m2!1sen!2sph" class="w-full h-[350px] border-0 block" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>

      <!-- Reception Venue -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 w-full max-w-6xl">
        <div class="rounded-xl overflow-hidden" data-aos="fade-up">
          <NuxtImg src="/images/rm-plaza.jpg" class="w-full h-[350px] md:h-[500px] object-cover block" format="webp" quality="100" alt="Reception Venue" />
        </div>
        <div class="rounded-xl overflow-hidden" data-aos="fade-up">
          <iframe title="Ramon Magsaysay Center Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.477739411769!2d120.97964407574099!3d14.571832177779102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca2b818370f9%3A0xd959640d08c21c46!2sRamon%20Magsaysay%20Center%2C%201680%20Roxas%20Blvd%2C%20Malate%2C%20Manila%2C%201004%20Metro%20Manila!5e0!3m2!1sfil!2sph!4v1760220627392!5m2!1sfil!2sph" class="w-full h-[350px] md:h-[500px] border-0 block" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
</template>