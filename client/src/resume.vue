<template>
    <div class="bg1">
        <button @click="downloadPDF" class="mt-8 bg-red-800 text-white py-2 px-4 rounded">
            Download as PDF
        </button>
        <div class="max-w-4xl mx-auto bg-white text-black font-roboto p-8" ref="resumeContent1">
            <div class="text-center bg-red-800 text-white py-4">
                <h1 class="text-3xl font-bold">Harsh Kumar Sharma</h1>
                <p class="text-xl">Software Engineer</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div>
                    <h2 class="text-xl font-bold text-red-800">My Contact</h2>
                    <ul class="mt-4 space-y-2">
                        <li class="flex items-center">
                            <i class="fas fa-envelope mr-2"></i>
                            <a href="mailto:gaurharsh1737@gmail.com" class="text-blue-600">gaurharsh1737@gmail.com</a>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-phone mr-2"></i>
                            <span>+91-8979571118</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-map-marker-alt mr-2"></i>
                            <span>Khatauli - Muzaffarnagar (up)</span>
                        </li>
                        <li class="flex items-center">
                            <i class="fas fa-globe mr-2"></i>
                            <a href="http://www.harshkumarsharma.com" class="text-blue-600">www.harshkumarsharma.com</a>
                        </li>
                    </ul>
                    <h2 class="text-xl font-bold text-red-800 mt-8">Technical Skill</h2>
                    <ul class="mt-4 space-y-2 list-disc list-inside">
                        <li>HTML, CSS & Bootstrap</li>
                        <li>JavaScript</li>
                        <li>Vue Js</li>
                        <li>Node Js & Express Js</li>
                        <li>Electron-vue</li>
                        <li>Mongo Db</li>
                        <li>MS Sql & My Sql</li>
                        <li>Git & Github & Gitlab</li>
                        <li>nginx & ubuntu Base Deployment</li>
                    </ul>
                    <h2 class="text-xl font-bold text-red-800 mt-8">Soft Skill</h2>
                    <ul class="mt-4 space-y-2 list-disc list-inside">
                        <li>Observation</li>
                        <li>Decision making</li>
                        <li>Multi-tasking</li>
                        <li>Team work</li>
                    </ul>
                    <h2 class="text-xl font-bold text-red-800 mt-8">Education Background</h2>
                    <ul class="mt-4 space-y-2 list-disc list-inside">
                        <li>Dewan V.S Group of Institutions, Meerut<br>Bachelor of Computer Applications 2022</li>
                        <li>Shri K.K Jain Inter College<br>12th (2019)</li>
                        <li>Shishu Shiksha Nikten Inter College<br>10th (2017)</li>
                    </ul>
                </div>
                <div>
                    <h2 class="text-xl font-bold text-red-800">About Me</h2>
                    <p class="mt-4">
                        To work in a dynamic professional environment with a growing organization and utilize my
                        creativity and innovative thinking for the benefit of the organization and myself.
                    </p>
                    <h2 class="text-xl font-bold text-red-800 mt-8">Industry Experience</h2>
                    <div class="mt-4">
                        <p><strong>Company Name :</strong> Sugoi Indo Technocrats Private Limited</p>
                        <p><strong>Working Period :</strong> May 2023 to December 2023</p>
                        <p class="mt-4"><strong>Project 1:</strong> Toll Management system</p>
                        <p><strong>Project 2:</strong> Central Server Dashboard</p>
                        <p class="mt-4">
                            <strong>Short Information About Project And Role:</strong> In this project, we have a
                            large
                            database in MSSQL. Utilizing this database, we aim to create an analytical dashboard and
                            reports featuring search, filtering, and image viewing capabilities specific to vehicle
                            data. Subsequently, we plan to deploy a local area network utilizing an Ubuntu-based
                            server
                            running Nginx and PM2 for efficient management and performance.
                        </p>
                        <h3 class="text-lg font-bold mt-4">Tech Stack :</h3>
                        <p class="mt-2"><strong>Node js</strong></p>
                        <ul class="mt-2 space-y-2 list-disc list-inside">
                            <li>Working on RMCS base architecture</li>
                            <li>Using Sequelize ORM (Object-Relational Mapper)</li>
                            <li>Redis for fast and repeated data controlling</li>
                            <li>Generate CSV files and PDFs using API</li>
                        </ul>
                        <p class="mt-2"><strong>Vue js</strong></p>
                        <ul class="mt-2 space-y-2 list-disc list-inside">
                            <li>Client-side data handling using Vue, Vuex</li>
                            <li>Using Bootstrap for modal and form designing</li>
                            <li>Creating good admin dashboard with Vue.js template</li>
                            <li>Handling configuration and Vue-router-based authentication</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="max-w-4xl mx-auto bg-white text-black font-roboto p-8 " ref="resumeContent2">
            <div class="mb-6">
                <p class="text-lg"><span class="font-bold">Company Name :</span> Trecent Systems</p>
                <p class="text-lg"><span class="font-bold">Working Period :</span> JAN 2024 to Current working
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Project 1 -->
                <div class="border p-4">
                    <h2 class="text-xl font-bold mb-2">Project 1: - ADAS (Accident Deduction System)</h2>
                    <p class="mb-2"><span class="font-bold">Short Information About Project And Role :</span>
                        ADAS
                        is designed to enhance road safety by leveraging advanced technology to detect and
                        analyze
                        accident scenarios in real time. The system aims to provide timely alerts and actionable
                        insights to reduce the impact of road incidents, ultimately saving lives and minimizing
                        damage.</p>
                    <p class="font-bold mb-2">Tech Stack :</p>
                    <p class="mb-2">Node.js</p>
                    <ul class="list-disc list-inside mb-2">
                        <li>Working on RMCS base architecture</li>
                        <li>Using Sequelize ORM (Object-Relational Mapper)</li>
                        <li>Working on authentication using Passport.js and JWT</li>
                        <li>Implementing role-based authentication</li>
                    </ul>
                </div>

                <!-- Project 2 -->
                <div class="border p-4">
                    <h2 class="text-xl font-bold mb-2">Project 2: - StepAhead Health OBGYN (Hospital Base)</h2>
                    <p class="mb-2"><span class="font-bold">Short Information About Project And Role :</span> In
                        this project, my role involves integrating third-party APIs. The project is based in the
                        USA
                        and focuses on health-specific functionalities. Additionally, I am responsible for
                        implementing changes to landing pages as required.</p>
                    <p class="font-bold mb-2">Tech Stack :</p>
                    <p class="mb-2">Node.js</p>
                    <ul class="list-disc list-inside mb-2">
                        <li>Working on RMCS base architecture</li>
                        <li>Using Sequelize ORM (Object-Relational Mapper)</li>
                        <li>Working on authentication using Passport.js and JWT</li>
                        <li>Implementing role-based authentication</li>
                    </ul>
                    <p class="mb-2">Vue.js</p>
                    <ul class="list-disc list-inside mb-2">
                        <li>Client-side data handling using Vue.js and Vuex</li>
                        <li>Using Bootstrap to create modals and form designs</li>
                        <li>Creating a functional admin dashboard with Vue.js templates</li>
                    </ul>
                </div>

                <!-- Project 3 -->
                <div class="border p-4">
                    <h2 class="text-xl font-bold mb-2">Project 3: - Cards and Facets Website</h2>
                    <p class="mb-2"><span class="font-bold">Short Information About Project And Role :</span> In
                        this project, we are tasked with developing an e-commerce website tailored for jewelry.
                        The
                        focus is on creating an intuitive admin dashboard for seamless product management,
                        including
                        features for tag creation, collection management, and category organization.</p>
                    <p class="font-bold mb-2">Tech Stack :</p>
                    <p class="mb-2">Node.js</p>
                    <ul class="list-disc list-inside mb-2">
                        <li>Working on RMCS base architecture</li>
                        <li>Using Sequelize ORM (Object-Relational Mapper)</li>
                        <li>Working on authentication using Passport.js and JWT</li>
                        <li>Implementing role-based authentication</li>
                    </ul>
                    <p class="mb-2">Nuxt.js</p>
                    <ul class="list-disc list-inside mb-2">
                        <li>Client-side data handling using Vue.js and Vuex</li>
                        <li>Using Bootstrap to create modals and form designs</li>
                        <li>Creating an efficient admin dashboard using Vue.js templates</li>
                    </ul>
                </div>

                <!-- Project 4 -->
                <div class="border p-4">
                    <h2 class="text-xl font-bold mb-2">Project 4: - Grill Bills</h2>
                    <p class="mb-2"><span class="font-bold">Short Information About Project And Role :</span>
                        Grill
                        Bills is a comprehensive software solution designed to streamline restaurant operations,
                        including billing, kitchen orders, inventory management, online ordering, menu
                        management,
                        and customer tracking.</p>
                    <p class="font-bold mb-2">Tech Stack :</p>
                    <p class="mb-2">Node.js</p>
                    <ul class="list-disc list-inside mb-2">
                        <li>Working on RMCS base architecture</li>
                        <li>Using Sequelize ORM (Object-Relational Mapper)</li>
                        <li>Working on authentication using Passport.js and JWT</li>
                        <li>Implementing role-based authentication</li>
                    </ul>
                    <p class="mb-2">Nuxt.js, Electron-Vue, Expo-Vue</p>
                    <ul class="list-disc list-inside mb-2">
                        <li>Client-side data handling using Vue.js and Vuex</li>
                        <li>Using Bootstrap to create modals and form designs</li>
                        <li>Creating an efficient admin dashboard using Vue.js templates</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>


</template>

<script>
import { jsPDF } from "jspdf"; // Import jsPDF
import html2canvas from "html2canvas"; // Import html2canvas

export default {
    name: "Resume",
    methods: {
        downloadPDF() {
            const element1 = this.$refs.resumeContent1; // First part of the resume
            const element2 = this.$refs.resumeContent2; // Second part of the resume

            if (!element1 || !element2) {
                console.error("Content sections not found to download.");
                return;
            }

            // Create a new jsPDF instance
            const pdf = new jsPDF();

            // Use html2canvas to render the first part of the resume to a canvas
            html2canvas(element1).then((canvas1) => {
                const imgData1 = canvas1.toDataURL("image/jpeg", 1.0);
                const pageWidth = pdf.internal.pageSize.getWidth();
                const pageHeight = pdf.internal.pageSize.getHeight();

                // Calculate the height of the first part of the content
                const imgHeight1 = (canvas1.height * pageWidth) / canvas1.width;

                // Add the first part to the PDF (first page)
                pdf.addImage(imgData1, "JPEG", 0, 0, pageWidth, imgHeight1);

                // Use html2canvas to render the second part of the resume to a canvas
                html2canvas(element2).then((canvas2) => {
                    const imgData2 = canvas2.toDataURL("image/jpeg", 1.0);
                    const imgHeight2 = (canvas2.height * pageWidth) / canvas2.width;

                    // Add a new page for the second part
                    pdf.addPage();
                    pdf.addImage(imgData2, "JPEG", 0, 0, pageWidth, imgHeight2);

                    // Save the PDF
                    pdf.save("resume.pdf");
                }).catch((error) => {
                    console.error("Error generating second page:", error);
                });
            }).catch((error) => {
                console.error("Error generating first page:", error);
            });
        }
    }
};
</script>


<style scoped>
body {
    font-family: 'Roboto', sans-serif;
}

.bg {
    background-color: #A67B5B;
}

.bg1 {
    background-color: #ffddbf;
}
</style>