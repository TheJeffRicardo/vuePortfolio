<template>
<h1 class="colorblue">Projects</h1>
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
                    <span><i class="bi bi-arrow-left-circle-fill text-black" aria-hidden="true"></i></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span><i class="bi bi-arrow-right-circle-fill text-black" aria-hidden="true"></i></span>
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
        image: "https://i.postimg.cc/NG1ZMvYY/calculator.webp",
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
        image: "https://i.postimg.cc/0y8z3v5N/big-red-button.webp",
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
.colorblue {
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
</style>