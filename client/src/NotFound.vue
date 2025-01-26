<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100 banner-1">
        <div class="text-center p-8 bg-white rounded-lg shadow-lg max-w-lg w-full">
            <h1 class="text-6xl font-extrabold text-brown">404</h1>
            <p class="mt-4 text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
            <p class="mt-2 text-sm text-gray-500">It might have been moved or deleted.</p>
            <router-link to="/"
                class="mt-6 inline-block px-6 py-3 text-white bg-brown rounded-md text-lg font-medium hover:bg-red-700 transition duration-300">
                Go to Home
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
};
</script>

<style>
.bg-brown {
    background-color: #8B4513;
}

.brown {
    color: #8B4513;
}
</style>