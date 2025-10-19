<template>
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
          <img :src="image.src" :alt="image.alt" />
        </swiper-slide>
      </swiper>
    </client-only>
  </div>
</template>

<script setup>
import {
  Swiper,
  SwiperSlide,
} from "swiper/vue"; // Import Swiper Vue components
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules"; // Import Swiper modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Define props for the images
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
  overflow: hidden; /* Important for responsive images */
  border-radius: 15px;
  border: 1px solid #444;
}

.swiper {
  width: 100%;
  height: 400px; /* Set a default height or make it dynamic */
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cover the slide area, cropping if necessary */
  display: block;
}

/* Optional: Custom styles for navigation/pagination if needed */
.swiper-button-next,
.swiper-button-prev {
  color: #00ffff;
}

.swiper-pagination-bullet-active {
  background: #00ffff;
}
</style>