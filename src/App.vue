<template>
  <Navbar></Navbar>
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
    <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';
export default {
  components: {
    Navbar,Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  width: 98.9vw;
  background: linear-gradient(to bottom, #BCECE0, #4CDDC5, rgba(0, 64, 154, 0.792), #652599c2, 
  #4C5270);
  background-size: 400% 400%;
  animation: change 20s infinite alternate;

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
  transition: 0.5s;
}

nav a.router-link-exact-active {
  color: #e7e7e7;
}
nav a:hover {
  color: #e7e7e7;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
}

@media only screen and (max-width: 768px){
  .styled-input {
      width:100%;
  }
}

@media (max-width: 768px) {
  .submit-btn {
      width:100%;
      float: none;
      text-align:center;
  }
}
@media screen and (max-width: 300px) {
  /* general styling */
  body {
      width: 100%;
  }
  h1 {
      font-size: 30px;
  }
  p {
      font-size: 5vw;
  }
  pre {
      font-size: 10px;
  }
  /* navbar */
  .navbar {
      flex-wrap: nowrap;
  }
  /* home */
  #home img {
      width: 200px;
  }
  /* resume */
  #resume {
      padding: 5px;
  }
  /* project */
  #project {
      padding: 0;
  }
  #project img {
      height: 10vh;
  }
  /* testimonials */
  .test {
      font-size: 1rem;
  }
  .carousel-control-prev i {
      font-size: 0.5rem;
  }
  .carousel-control-next i {
      font-size: 0.5rem;
  }
  /* contact */
  #contact {
      padding-top: 310px;
      padding: 0;
  }
  .contact h1 {
      font-size: 30px;
  }
  .contact h4 {
      font-size: 15px;
  }
  .styled-input.wide { 
      width: 250px;
  }
  input,
  textarea {
      width: 100%;
      font-size: 1rem;
  }
  input:focus ~ span,
  textarea:focus ~ span {
      width: 100%;
  }
  textarea {
      width: 100%;
      min-height: 15em;
  }
  .input-container {
      width: 250px;
      max-width: 400%;
  }
  .styled-input label {
      font-size: 0.7rem;
  }
  .submit {
      font-size: 0.7rem;
  }
}
@keyframes change{
  0%{
    background-position: top;
  }
  50%{
    background-position: bottom;
  }
} 
</style>
