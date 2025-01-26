<template>
  <div class="banner-2 space-y-10 pb-20 bg-work ">
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
        <a href="https://www.caratsnfacets.com/" class="text-sky-800 font-bold text-2xl tracking-wider mt-4"
          target="_blank">
          Click For View
        </a>
      </div>
      <div class="card-image">
        <img class="object-cover w-full h-48 md:h-96" src="./assets/website.png" />
      </div>
    </div>
    <div class="card">
      <div class="space-y-5 py-8 px-8 md:py-16 md:px-20 md:w-1/2">
        <h4 class="project-title item">Toll-Management Dashboard</h4>
        <p class="font-work_sans pr-12">
          In this project, we have a large database in MSSQL.
          Utilizing this database, we aim to create an analytical dashboard and reports featuring search, filtering, and
          image viewing capabilities specific to vehicle data. Subsequently, we plan to deploy a local area network
          utilizing
          an Ubuntu-based server running Nginx and PM2 for efficient management and performance.
        </p>
      </div>
      <div class="card-image bg-green-100">
        <img class="object-cover w-full h-72 md:h-96" src="./assets/project2.png" />
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
        <a href="https://stepaheadhealth.com/" class="text-sky-800 font-bold text-2xl tracking-wider mt-4"
          target="_blank">
          Click For View
        </a>
      </div>
      <div class="card-image bg-green-100">
        <img class="object-cover w-full h-72 md:h-96" src="./assets/health.png" />
      </div>
    </div>
  </div>

</template>

<style>
.bg-work {
  background-color: #ffeed9;
}
</style>