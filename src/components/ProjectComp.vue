<template>
<h1 class="colorpurple">Projects</h1>
<section id="project" class="container-fluid">
  <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" v-for="item in firstCar" :key="item">
        <img :src=item.image class="d-block" alt="Sorry">
        <div class="links">
          <a class="netlify btn text-white" style="background-color: #dd4b39;" :href=item.netlify role="button">
            <i class="bi bi-google"></i>
          </a>
          <a class="github btn text-white" style="background-color: #333333;" :href=item.github role="button">
            <i class="bi bi-github"></i>
          </a>
        </div>
      </div>
      <div class="carousel-item" v-for="item in projects" :key="items">
        <img :src=item.image class="d-block" alt="Sorry">
        <div class="links">
          <a class="netlify btn text-white" style="background-color: #dd4b39;" :href=item.netlify role="button">
            <i class="bi bi-google"></i>
          </a>
          <a class="github btn text-white" style="background-color: #333333;" :href=item.github role="button">
            <i class="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span><i class="bi bi-arrow-left-circle-fill" aria-hidden="true"></i></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span><i class="bi bi-arrow-right-circle-fill" aria-hidden="true"></i></span>
    <span class="visually-hidden">Next</span>
  </button>
  </section>
</template>

<script>
export default {
  name: 'project',
  data() {
    return {
      firstCar: [
        {
        name: "Calculator",
        image: "https://i.postimg.cc/zvJ11pHK/calculator-removebg-preview.png",
        github: "https://github.com/TheJeffRicardo/Calculator.git",
        netlify: "https://jeffscalculator.netlify.app/"
      }
      ],
      projects: [
      {
        name: "Victoria's Secret",
        image: "https://i.postimg.cc/jdMgws1V/ed416a77bf20d2d6e16b49f0bc6cc07b.png",
        github: "https://github.com/TheJeffRicardo/Victoria-Secret.git",
        netlify: "https://victoria-secret-specials-by-konkejeff.netlify.app/"
      },
      {
        name: "KFC",
        image: "https://i.postimg.cc/y6gYrdFj/1024px-KFC-logo-svg.png",
        github: "https://github.com/TheJeffRicardo/exercise.git",
        netlify: "https://kfc-by-konkejrmalindi.netlify.app/"
      },
      {
        name: "LifeChoices",
        image: "https://i.postimg.cc/Wz3ZQPwr/lifechoices-services-8.jpg",
        github: "https://github.com/TheJeffRicardo/LifeChoices.git",
        netlify: "https://lifechoicesbykonkejeff.netlify.app/"
      },
      {
        name: "VTS first ecommerce",
        image: "https://i.postimg.cc/8zKz0rny/viclogo.jpg",
        github: "https://github.com/TheJeffRicardo/VTS.git",
        netlify: "https://victoriasecretbykonkejeff.netlify.app/"
      },
      {
        name: "Array for Information",
        image: "https://i.postimg.cc/4xc2BVmg/big-red-button-removebg-preview.png",
        github: "https://github.com/TheJeffRicardo/Button-for-Array.git",
        netlify: "https://array-for-buttons.netlify.app/"
      },
    ],
    };
  },
}
</script>

<style scoped>
#project{
  padding: 50px;
}
.colorpurple {
  animation: heading2 5s infinite;
  animation-direction: alternate;
  width: 85vw;
  margin: auto;
}
.carousel-inner img {
  margin: auto;
  height: 60vh;
}
.carousel-item .links {
  padding: 10px;
}
.carousel-item .links:hover {
  opacity: 1;
  cursor: pointer;
}
.links .netlify{
  margin: 5px;
}
.links .github{
  margin: 5px;
}
.carousel-control-prev {
  height: 50%;
  margin: auto;
}
.carousel-control-next {
  height: 50%;
  margin: auto;
}
.carousel-control-prev i {
  font-size: 2rem;
}
.carousel-control-next i {
  font-size: 2rem;
}
.links .netlify:hover {
  font-size: 20px;
  transition: 0.2s;
}
.links .github:hover {
  font-size: 20px;
  transition: 0.2s;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  .container-fluid{
    height: 55vh;
  }
.carousel-control-prev i {
  font-size: 1.4rem;
}
.carousel-control-next i {
  font-size: 1.4rem;
}
.links i{
  font-size: 0.6rem;
}
.links .netlify{
  margin: 5px;
  font-size: 0px;
}
.links .github{
  margin: 5px;
  font-size: 0px;
}
.links .netlify:hover {
  font-size: 20px;
  transition: 0.2s;
}
.links .github:hover {
  font-size: 20px;
  transition: 0.2s;
}
}
@media screen and (min-width: 450px) and (max-width: 720px) {
.carousel-item img{
  width: 15rem;
  height: 18rem;
}
.carousel-control-prev {
  font-size: 1.9rem;
  height: 100%;
  margin-top: 25%;
}
.carousel-control-next {
  font-size: 1.9rem;
  height: 100%;
  margin-top: 25%;
}
.carousel-control-prev i {
  font-size: 1.9rem;
}
.carousel-control-next i {
  font-size: 1.9rem;
}
.links i{
  font-size: 1rem;
}
}
</style>