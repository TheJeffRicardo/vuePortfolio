<template>
    <div class="nav">
        <img src="https://i.postimg.cc/PxK4CZQn/Jeff-Ricardo-removebg.png" alt="Sorry">
        <nav>
            <i class="bi bi-house-door-fill"></i><router-link to="/">Home</router-link> |
            <i class="bi bi-book-half"></i><router-link to="/about">About</router-link> |
            <i class="bi bi-book-half"></i><router-link to="/resume">Resume</router-link> |
            <i class="bi bi-briefcase-fill"></i><router-link to="/project">Projects</router-link> |
            <i class="bi bi-people-fill"></i><router-link to="/testimonial">Testimonials</router-link> |
            <i class="bi bi-telephone-plus-fill"></i><router-link to="/contact">Contact</router-link> 

        </nav>
    </div>
</template>
<script>
export default {
    name: 'navbar'
}
</script>
<style>
 .nav{
    display: flex;
    justify-content: space-between;
 }
 .nav img{
    margin-top: 0.3%;
    width: 4rem;
    height: 4rem;
    margin-left: 1.3%;
 }
 .nav img:hover{
    animation: spin 4s infinite linear;
 }
 @keyframes spin{
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
  }
</style>