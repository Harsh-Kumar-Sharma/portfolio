<template>
  <div class="banner-2 pb-3">
  <div class="max-w-md mx-auto mt-8">
    <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="full_name">
          Full Name
        </label>
        <input v-model="formData.full_name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="full_name" type="text" placeholder="Full Name">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input v-model="formData.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="mobile">
          Mobile
        </label>
        <input v-model="formData.mobile" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="mobile" type="text" placeholder="Mobile">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
          Message
        </label>
        <textarea v-model="formData.message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message"></textarea>
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
  </div>
  <footer class="bg text-white py-4">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row md:justify-between items-center">
      <p class="text-sm text-center md:text-left mb-2 md:mb-0">© 2024 Harsh Kumar Sharma. All rights reserved.</p>
      <ul class="flex flex-col md:flex-row md:space-x-4 text-center md:text-left">
        <li class="mb-2 md:mb-0">
          <a href="tel:+91 8979571118" class="text-white hover:text-gray-400">Mobile: +91 8979571118</a>
        </li>
        <li class="md:hidden"><span class="text-white">|</span></li>
        <li>
          <a href="mailto:gaurharsh1737@gmail.com" class="text-white hover:text-gray-400">Email: gaurharsh1737@gmail.com</a>
        </li>
      </ul>
    </div>
  </div>
</footer>
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
        const response = await  emailjs.sendForm("service_kb1fu2b","template_ajcoyin", this.formData, {
          publicKey: 'mWupw4-D4lWx-R9R6',
        })

      console.log();('Email sent successfully!', response);
      } catch (error) {
        console.log('Error sending email:', error);
      }
    }
  }
}
</script>
<style scoped>

.bg{
  background-color: #A67B5B;
}
</style>