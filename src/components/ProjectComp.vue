<template>
  <div class="card">
    <div v-for="mains in projects" :key="main">
        <div class="row justify-content-between">
            <img :src="main.image" class="card-img-top" alt="I dont know">
            <div class="card-body">
                <h4 class="card-title">Name:{{mains.id}} {{mains.firstName}}</h4><br>
                <h5 class="card-title">Category: {{mains.surname}}</h5>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'project',
  data() {
    return {
      projects: [
      {
        name: "Calculator",
        image: "https://i.postimg.cc/NG1ZMvYY/calculator.webp",
        github: "https://github.com/TheJeffRicardo/Calculator.git",
        netlify: "https://jeffscalculator.netlify.app/"
      },
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

<style>

</style>