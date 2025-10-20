<template>
  <div class="text-center px-0">
    <div class="max-w-5xl my-0 mx-auto py-0 px-5">
      <h2 class="font-bold text-4xl text-center text-accent">My Projects</h2>
      <p class="text-xl text-text-secondary max-w-xl mt-4 mx-auto mb-8">Click on a project to learn more about it!</p>
    </div>
  </div>
    <div class="carousel-container">
    <client-only>
      <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :navigation="true"
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :loop="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(image, index) in images" :key="index">
          <a :href="image.href" target="_blank"><img :src="image.src" :alt="image.alt" /></a>
          
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script setup>
import {
  Swiper,
  SwiperSlide,
} from "swiper/vue";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => [],
  },
});

// Swiper modules to use
const modules = [Navigation, Pagination, Autoplay];

// Swiper instance (optional, for direct access to Swiper API)
const swiperInstance = ref(null);

const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
  console.log("Swiper instance:", swiper);
};

const onSlideChange = () => {
  console.log("Slide changed");
};
</script>

<style>
.carousel-container {
  width: 100%;
  max-width: 800px; /* Adjust as needed */
  margin: 0 auto;
  overflow: hidden;
  border-radius: 15px;
  border: 1px solid #444;
}

.swiper {
  width: 100%;
  height: 400px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img a {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.swiper-button-next,
.swiper-button-prev {
  color: #00ffff;
}

.swiper-pagination-bullet-active {
  background: #00ffff;
}
</style>