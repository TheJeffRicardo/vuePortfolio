<template>
    <nav>
        <i class="bi bi-house-door-fill"></i><router-link to="/">Home</router-link> |
        <i class="bi bi-book-half"></i><router-link to="/about">About</router-link> |
        <i class="bi bi-book-half"></i><router-link to="/resume">Resume</router-link> |
        <i class="bi bi-briefcase-fill"></i><router-link to="/project">Projects</router-link> |
        <i class="bi bi-people-fill"></i><router-link to="/testimonial">Testimonials</router-link> |
        <i class="bi bi-telephone-plus-fill"></i><router-link to="/contact">Contact</router-link> 
    </nav>
</template>
<script>
export default {
    name: 'navbar'
}
</script>
<style>
 
</style>