<template>
    <h1 class="colorpurple">Testimonials</h1><br><br><br>
        <div class="contains">
          <div class="card" v-for="item in testimonial" :key="items">
            <img :src=item.image alt="Character" style="width:100%">
            <div class="contain">
              <h3>{{item.name}}</h3> 
              <p style="font-family: 'Delius', cursive;">{{item.message}}</p> 
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'testimonial',
  data() {
    return {
      testimonial: [
        {
          name: "Brandon",
          image: "https://i.postimg.cc/Gh6Yb0HR/6db9e3efac23d40cb18166dc64f90e10.png",
          message: "KonkeJeff RicardoMalindi is one of the most intelligent people I know.",
        },
        {
          name: "Lindokuhle",
          image: "https://i.postimg.cc/43Pm7jNm/1236437.jpg",
          message: "Konke is a very open minded individual, who is determined to do what is expected of him.",
        },
        {
          name: "Luntu",
          image: "https://i.postimg.cc/nLXhrr5w/1258531.jpg",
          message: "KonkeJeff RicardoMalindi is, a very energetic and friendly, which makes him easy to approach.He is always willing to help out whenever there is a problem that needs fixing which.",
        },
        {
          name: "Sive",
          image: "https://i.postimg.cc/ZqxyPCjY/0f15ec292db237409b7171ce413b7be3.png",
          message: "KonkeJeff RicardoMalindi is always helpful whenever he is called upon. He is not afraid to voice his opinion or ask a difficulty question in order to make progress with an issue. He is dedicated to doing great work and creates a decent and supportive environment."
        },
        {
          name: "Maxwill",
          image: "https://i.postimg.cc/FRnbcYsd/Yusuke-29-1.webp",
        message: "When I first met Konke I saw him as a very charismatic and driven person. He still shows the same characteristics. He is a team player and shows consistency with his work. He is hardworking and shows the quality of a great leader.",
      },
      {
        name: "Timothy ",
        image: "https://i.postimg.cc/c4T4Hnx0/ot8wvzl7snd71.webp",
        message: "Konke is a hard working colleague who gives his all to any project that he is currently busy with. He gets along with everyone and can light up any room he walks into with his bright and bubbly personality.",
      },
    ],
    };
  },
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
h3{
  font-family: Pacifico;
}
.contains{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: 10%;
  gap: 50px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  height: 10%;
  width: 60%;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
}
.contain{
  padding: 20px;
  background-color: white;
}
</style>