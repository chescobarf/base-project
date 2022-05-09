import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    ssr: true,
    build: {
        transpile: ['@heroicons/vue']
    }
})
