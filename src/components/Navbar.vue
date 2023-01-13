<template>
    <div class="nav">
        <img src="https://i.postimg.cc/PxK4CZQn/Jeff-Ricardo-removebg.png" alt="Sorry">
        <nav>
            <i class="bi bi-house-door-fill"></i><router-link to="/">Home</router-link>
            <i class="bi bi-book-half"></i><router-link to="/about">About</router-link>
            <i class="bi bi-collection-fill"></i><router-link to="/resume">Resume</router-link>
            <i class="bi bi-briefcase-fill"></i><router-link to="/project">Projects</router-link>
            <i class="bi bi-people-fill"></i><router-link to="/testimonial">Testimonials</router-link>
            <i class="bi bi-telephone-plus-fill"></i><router-link to="/contact">Contact</router-link> 
        </nav>
    </div>
</template>
<script scoped>
export default {
    name: 'navbar'
}
</script>
<style>
 .nav{
    display: flex;
    justify-content: space-between;
    top: 1em;
    position: sticky;
    top: 0px;
 }
 .nav img{
    margin-top: 0.4%;
    width: 4rem;
    height: 3.5rem;
    margin-left: 1.3%;
 }
 .nav img:hover{
    animation: spin 4s infinite linear;
 }
 
 @media screen and (max-width: 300px){
    .nav img {
        display: none;
    }
 }
@media screen and (min-width: 300px) and (max-width: 450px) {
    .nav img {
      display: none;
    }
  }  
@media screen and (min-width: 450px) and (max-width: 670px) {
    .nav img {
        display: none;
      }
  }
@media screen and (min-width: 720px) and (max-width: 1048px) {
    .nav img {
        border-radius: 5px 5px 0 0;
      }
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