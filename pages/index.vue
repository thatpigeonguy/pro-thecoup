<script setup lang="ts">

</script>

<template>
    <div class="text-text-main font-sans leading-6">
        <main>
            <section class="py-16 px-0" id="hero">
                <div class="max-w-xl mx-auto text-center">
                    <h2 class="font-bold text-4xl text-center mb-10 text-accent">Ready to Start a Project?</h2>
                    <p class="mb-4">Let's talk about your needs. Reach out for a free, no-obligation consultation.</p>
                    <a href="mailto:business@thecoup.xyz" class="p-6 bg-accent text-background-dark inline-block py-3 px-6 rounded-md font-bold text-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:opacity-100">business@thecoup.xyz</a>
                </div>
            </section>

            <section class="py-16 px-0" id="services">
                <div class="max-w-5xl my-0 mx-auto py-0 px-5">
                    <div class="leading-5 mb-4">
                        <h2 class="font-bold text-4xl text-center mb-10 text-accent">What I Offer</h2>
                        <div class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                            <div class="bg-background-card border border-solid border-border rounded-lg p-8 text-center transition duration-200 ease-in-out hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                                <div class="text-5xl mb-4"><Icon name="i-heroicons-computer-desktop" /></div>
                                <h3 class="leading-5 mb-4 text-xl font-bold">Remote Technical Support</h3>
                                <p class="mb-4">Expert troubleshooting for a wide range of software issues, from application crashes to slow performance. Includes system diagnostics, malware removal, and user account support.</p>
                            </div>
                            <div class="bg-background-card border border-solid border-border rounded-lg p-8 text-center transition duration-200 ease-in-out hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                                <div class="text-5xl mb-4"><Icon name="i-feather-shield" /></div>
                                <h3 class="leading-5 mb-4 text-xl font-bold">Secure Server Setup</h3>
                                <p class="mb-4">Provisioning and hardening of Linux servers (VPS) for websites and applications. Includes firewall configuration, automated backups, and SSL.</p>
                            </div>
                            <div class="bg-background-card border border-solid border-border rounded-lg p-8 text-center transition duration-200 ease-in-out hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                                <div class="text-5xl mb-4"><Icon name="i-feather-code" /></div>
                                <h3 class="leading-5 mb-4 text-xl font-bold">Website & Performance</h3>
                                <p class="mb-4">From simple landing pages to performance optimization. I can help migrate your existing site or speed it up to improve user experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="py-16 px-0" id="services">
                <GallerySection :images="carouselImages" />
            </section>

            <section class="py-16 px-0" id="why-me">
                <div class="py-16 text-center bg-background-card border-t-[1px] border-b-[1px] border-solid border-border">
                    <div class="max-w-3xl mx-auto text-center">
                        <h2 class="font-bold text-4xl text-center mb-10 text-accent">Why Work With Me?</h2>
                        <p class="mb-4">As a self-taught system administrator with real-world freelance experience, I bring a practical, hands-on approach to every project. I don't just follow a script; I understand the technology from the ground up. My focus is on creating secure, reliable, and easy-to-manage solutions.</p>
                    </div>
                </div>
            </section>

            <section class="py-16 px-0" id="contact">
                <div class="max-w-xl mx-auto text-center">
                    <h2 class="font-bold text-4xl text-center mb-10 text-accent">Ready to Start a Project?</h2>
                    <p class="mb-4">Let's talk about your needs. Reach out for a free, no-obligation consultation.</p>
                    <a href="mailto:business@thecoup.xyz" class="p-6 bg-accent text-background-dark inline-block py-3 px-6 rounded-md font-bold text-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:opacity-100">business@thecoup.xyz</a>
                </div>
            </section>
        </main>
    </div>
</template>

<script setup lang="ts">
import GallerySection from "~/components/GallerySection.vue";

useHead({
  title: 'Pro.TheCoup.xyz',
  titleTemplate: '%s - TheCoup.xyz',
})

const carouselImages = ref([
  { src: "/img/procuts.webp", href: "https://procutshairsalons.com" },
  { src: "/img/mavica.webp", href: "https://mavica.org" }
]);
</script>