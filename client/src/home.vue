<template>
  <div class="banner-1">

    <div class="flex flex-col md:flex-row items-center px-4 md:px-10 py-6">
      <div class="w-full md:w-11/12 space-y-5 md:space-y-10">
        <h3
          class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg text-sm font-semibold font-work_sans">
          👋 Hola,
        </h3>
        <h1 class="text-2xl md:text-4xl lg:text-5xl font-Eczar font-bold leading-tight text-gray-700">
          I'm
          <a href="https://www.linkedin.com/in/harsh-kumar-sharma-841433215/" target="_blank"
            class="text-black hover:underline">
            Harsh Kumar Sharma</a>🙇<br />working as Software Engineer.
        </h1>

        <div class="md:flex gap-4 mt-5">
          <button class="text-white bg-gray-800 submit-button hidden md:block">
            <router-link to="/work">View My Work</router-link>
          </button>
          <button class="text-gray-800 border-4 border-gray-800 submit-button mb-5 md:mb-0">
            <router-link to="/contact">Contact Me</router-link>
          </button>
        </div>
      </div>

      <!-- Adjust image size for different screen sizes -->
      <div class="w-full md:w-8/12 flex justify-center md:justify-end mt-6 md:mt-0">
        <img class="h-auto max-w-full md:max-h-[450px] lg:max-h-[550px] xl:max-h-[650px] 3xl:max-h-[800px]"
          src="./assets/demo.png" alt="user image" />
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      formData: {
        full_name: '',
        email: '',
        mobile: '',
        message: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await emailjs.sendForm("service_kb1fu2b", "template_ajcoyin", this.formData, {
          publicKey: 'mWupw4-D4lWx-R9R6',
        })

        console.log('Email sent successfully!', response);
      } catch (error) {
        console.log('Error sending email:', error);
      }
    }
  }
}
</script>

<style scoped>
.bg {
  background-color: #A67B5B;
}
</style>
