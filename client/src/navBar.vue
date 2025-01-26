<template>
    <nav class="bg-brown">
        <div class="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
            <!-- Logo and user image -->
            <div class="flex items-center justify-between">
                <div class="relative w-12 h-12">
                    <img class="rounded-full border-2 border-white shadow-sm"
                        src="https://avatars.githubusercontent.com/u/115547091?s=400&u=6a11f0e32b94961a2d023916b399410cfa1ede16&v=4"
                        alt="user image">
                </div>
                <!-- Mobile menu button -->
                <div @click="showMenu = !showMenu" class="flex md:hidden">
                    <button type="button" class="text-white hover:text-gray-400 focus:outline-none focus:text-gray-400">
                        <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                            <path fill-rule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
            <!-- Menu items -->
            <ul :class="showMenu ? 'flex flex-col md:flex-row md:space-x-6 md:items-center' : 'hidden md:flex md:flex-row md:space-x-6 md:items-center'"
                class="mt-4 md:mt-0">
                <li><router-link to="/" class="text-white hover:text-gray-400">Home</router-link></li>
                <li><router-link to="/about" class="text-white hover:text-gray-400">About</router-link></li>
                <li><router-link to="/work" class="text-white hover:text-gray-400">Works</router-link></li>
                <li><router-link to="/service" class="text-white hover:text-gray-400">Services</router-link></li>
                <li><router-link to="/resume" class="text-white hover:text-gray-400">Resume</router-link></li>
                <!-- <li><router-link to="/contact" class="text-white hover:text-gray-400">Contact</router-link></li> -->
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            showMenu: false
        };
    }
};
</script>
<style>
.bg-brown {
    background-color: #8B4513;
}
</style>
