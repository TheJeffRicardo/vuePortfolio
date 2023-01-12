<template>
  <section class="container">
    <h1 class="colorpurple">Home</h1>
    <div class="items">
      <div class="home">
        <img src="https://i.postimg.cc/fTK2t1C9/DSC-3528.jpg" class="img-thumbnail rounded-4 w-50" alt="Jeff">
        <p>Konke JeffRicardo Malindi</p>
      </div>
      <div class="humans">
        <h2>Hello Humans</h2>
        <p>My name is Jeff</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
.container{
  height: 80vh;
}
h1 {
  font-family: none;
  font-size: 72px;
  text-align: center;
}
.colorpurple {
  animation: heading2 5s infinite;
  animation-direction: alternate;
}
.items {
  transform-style: preserve-3d;
}
.home, .humans {
  backface-visibility: hidden;
  height: 100%;
  width: 100%;
}
.home {
  z-index: 20;
}
.home p{
  font-size: 1.5rem;
  font-family: Pacifico;
}
.humans {
  margin-top: -20%;
  transform: rotateY(180deg);
}
.container:hover .items {
  transform: rotateY(180deg);
  transition: 2s;
}

@media screen and (min-width: 300px) and (max-width: 450px) {
  h1{
    font-size: 40px;
  }
  .home p{
    font-size: 20px;
  }
  .home img{
    width: 20px;
  }
  .container{
    height: 63vh;
  }
}
@keyframes heading {
  25%{
      box-shadow: 10px 2px 10px 1px #642599;
  }
  50%{
      box-shadow: 0px 7px 10px 1px #642599;
  }
  75%{
      box-shadow: -10px 2px 10px 1px #642599;
  }
  100%{
      box-shadow: 0px -7px 10px 1px #642599;
  }
}
</style>