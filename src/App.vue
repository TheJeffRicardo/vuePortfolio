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
}

nav a.router-link-exact-active {
  color: #e7e7e7;
}
nav a:hover {
  color: #e7e7e7;
  transition: 0.2s;
}
.fade-enter,.fade-leave-to{
  opacity: 0;
  transform: translateX(2em);
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s ease;
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
