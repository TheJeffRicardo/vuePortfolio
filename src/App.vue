<template>
  <Navbar></Navbar>
  <router-view/>
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
  background-image: linear-gradient(to bottom, #4CDDC5, rgba(0, 64, 154, 0.792));

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
</style>
