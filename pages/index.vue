<script setup lang="ts">

</script>

<template>
    <div class="text-text-main font-sans leading-6">
        <main>
            <section class="py-16 px-0" id="hero">
                <HeroSection  />
            </section>

            <section class="py-16 px-0" id="services">
                <ServicesSection />
            </section>

            <section class="py-16 px-0" id="services">
                <GallerySection :images="carouselImages" />
            </section>

            <section class="py-16 px-0" id="why-me">
                <WhyMeSection />
            </section>

            <section class="py-16 px-0" id="contact">
                <ContactSection />
            </section>

            <section class="py-16 px-0">
                <Footer />
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import GallerySection from "~/components/GallerySection.vue";

useHead({
  title: 'Pro.TheCoup.xyz',          // this page only
  titleTemplate: '%s – TheCoup.xyz',  // optional suffix
})

const carouselImages = ref([
  { src: "/img/procuts.webp" },
  { src: "/img/mavica.webp" }
]);
</script>