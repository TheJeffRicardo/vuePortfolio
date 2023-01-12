<template>
  <section class="container-fluid" id="resume">
    <h1 class="colorpurple">About</h1>
    <div class="resume"><br>
    <p class="lead-text-capitalize">I am a wannabe Web Developer with the help of LifeChoices where I'm currently learning html,css,bootstrap,javascript and vuejs.
I've learned so much in such a short space of time that my perspective has changed with how I view the world of technology.The world of technology is amazing and I'm more determined than ever to be exposed with anything coding.Willing to learn everything about coding and create my own video game one 
day,until then....I'll keep learning. 
</p>
</div>
</section>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style scoped>
h1{
  width: 85vw;
  margin: auto;
}
.colorpurple {
  animation: heading2 5s infinite;
  animation-direction: alternate;
}
p {
  margin: auto;
  width: 40rem;
  font-size: 30px;
  font-family: Pacifico;
  height: 30.7rem;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  p{
    width: 15rem;
    font-size: 20px;
    height: 38rem;
  }
}
@media screen and (min-width: 450px) and (max-width: 720px) {
  p{
    width: 25rem;
    font-size: 26px;
    height: 51rem;
  }
}
</style>