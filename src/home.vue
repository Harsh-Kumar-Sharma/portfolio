<template>
      <div class="banner-1 ">

    <div class="flex items-center">
      <div class="w-11/12 space-y-5 md:space-y-10">
        <h3
          class="hello-button text-gray-700 w-fit md:py-3 md:px-5 py-1 px-2 rounded-lg 3xl:text-3xl 2xl:text-xl lg:text-xl md:text-md text-sm font-semibold font-work_sans"
        >
          👋 Hola,
        </h3>
        <h1
          class="3xl:text-8xl 2xl:text-7xl xl:text-6xl lg:text-4xl md:text-3xl sm:text-3xl text-xl font-Eczar font-bold leading-tight text-gray-700"
        >
          I'm
          <a
            href="https://www.linkedin.com/in/harsh-kumar-sharma-841433215/"
            target="_blank"
            class="text-black hover:underline"
          >
          Harsh Kumar Sharma</a
          >🙇<br />working as Software Engineer.
        </h1>

        <div class="md:flex gap-1 md:gap-10">
          <button class="text-white bg-gray-800 submit-button hidden md:block">
            <router-link to="/work" >View My Work</router-link>
            
          </button>
          <button 
            class="text-gray-800 border-4 border-gray-800 submit-button mb-5 md:mb-0"
          >
          <router-link to="/contact" >
            Contact Me</router-link>
            
          </button>
        </div>
      </div>

      <div class="w-8/12 flex justify-end">
        <img
          class="3xl:h-[800px] 2xl:h-[650px] xl:h-[550px] lg:h-[550px] md:h-[450px] sm:h-[350px]"
          src="./assets/demo.png"
          alt="user image"
        />
      </div>
    </div>
  </div>
  <div class="banner-2 space-y-10 pb-20 " >
    <h3 class="heading3 my-5">My Recent Work</h3>
    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Caratsnfacets</h4>
        <p class="font-work_sans pr-12">
          In this project, we are tasked with developing an e-commerce website tailored
          for jewelry, as per the client's specifications. Our focus lies in crafting 
          an intuitive admin dashboard to facilitate seamless product management.
           Through this dashboard, administrators will be able to organize products, 
           arrange featured images, maintain product sequences, and effortlessly create,
            update, and categorize items. Additionally, we will implement features for tag creation, 
            collection management, and category organization to enhance the browsing experience for 
            users
        </p>
        <a href="https://www.caratsnfacets.com/" class="text-sky-800 font-bold text-2xl tracking-wider mt-4" target="_blank">
  Click For View
</a>
      </div>
      <div class="card-image">
        <img
          class="object-cover w-full h-48 md:h-96"
          src="./assets/website.png"
        />
      </div>
    </div>
    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Toll-Management Dashboard</h4>
        <p class="font-work_sans pr-12">
          In this project, we have a large database in MSSQL. 
          Utilizing this database, we aim to create an analytical dashboard and reports featuring search, filtering, and image viewing capabilities specific to vehicle data. Subsequently, we plan to deploy a local area network utilizing 
          an Ubuntu-based server running Nginx and PM2 for efficient management and performance.
        </p>
      </div>
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="./assets/project2.png"
        />
      </div>
    </div>

  

    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title">StepAhead Health</h4>
        <p class="font-work_sans pr-12">
          In this project, my role involves integrating third-party APIs.
           The project is based in the USA and focuses on health-specific functionalities. 
          Additionally, I am responsible for implementing changes to landing pages as required.
        </p>
        <a href="https://stepaheadhealth.com/" class="text-sky-800 font-bold text-2xl tracking-wider mt-4" target="_blank">
  Click For View
</a>
      </div>
      <div class="card-image bg-green-100">
        <img
          class="object-cover w-full h-72 md:h-96"
          src="./assets/health.png"
        />
      </div>
    </div>
  </div>
  <div class="banner-3 md:flex items-center md:justify-evenly topmargin" >
    <img
      class="md:h-[500px] h-[400px]"
      src="./assets/profile.png"
      alt="user image"
    />
    <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
      <h4 class="project-title item">About Me</h4>
      <p class="font-work_sans">
        I am Harsh Kumar Sharma, a dedicated software engineer hailing from  town of Khatauli, India.
         With a wealth of experience spanning two years,
          I am  an integral part of an Indian startup,
           contributing my skills and expertise to drive innovation and progress. 
           Passionate about technology and driven by a relentless pursuit of excellence, 
           I thrive in dynamic environments where every challenge is an opportunity for growth. 
           From crafting elegant solutions to tackling complex problems, 
           I am committed to pushing boundaries and making a meaningful impact through my work.
      </p>
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