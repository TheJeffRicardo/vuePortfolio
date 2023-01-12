<template>
  <h1 class="colorpurple">Resume</h1><br><br><br>
  <div>
    <div class="resume" v-for="item in resume" :key="item">
      <img :src=item.image alt="" style="width: 10rem;">
      <h3>School</h3>
      <p>{{item.school}}({{item.year}})</p>
      <p>{{item.info}}</p>
    </div>
  </div>
  <div>
    <h1 class="colorblack">Skills</h1><br><br>
    <p>
HTML : <br>
90% <br>
<progress id="file" value="70" max="100"> 90% </progress>
        
      <br><br>  
CSS : <br>
70%  <br>
<progress id="file" value="50" max="100"> 70% </progress>
        
        <br><br>
BootStrap : <br>
80% <br>
<progress id="file" value="30" max="100"> 80% </progress>

<br><br>  
Javascript : <br>
50%  <br>
<progress id="file" value="50" max="100"> 50% </progress>

<br><br>  
Vuejs : <br>
60%  <br>
<progress id="file" value="50" max="100"> 60% </progress>
        </p>
</div>
</template>

<script>
export default {
  name: 'resume',
  data() {
    return {
      resume: [
        {
        school: "Stratford Primary School",
        image: "https://i.postimg.cc/c4R5rj6y/download-1.png",
        year: "2010-2016",
        info: "Never failed a grade,good student"
      },
      {
        school: "Malibu High School",
        image: "https://i.postimg.cc/QMT7MLxc/images.jpg",
        year: "2017-2021",
        info: "Passed my Grade 12 and Achieved my National Senior Certificate"
      },
      {
        school: "Life Choices",
        image: "https://i.postimg.cc/rpskGctt/LIFE-CHOICES-ICON-ON-GREEN.jpg",
        year: "2022-2023",
        info: "Learned HTML,CSS,Bootstrap,Javascript,Vuejs"
      },
      ]
    }
  }
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
  font-size: 2.3rem;
}
p{
  font-family: 'Delius', cursive;
  font-size: 1.5rem;
}
.resume{
  padding: 2%;
}
progress[value] {
  appearance: none;
  border: none;
  background-color: whiteSmoke;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(0,0,0,.5) inset;
  color: royalblue;
}
@media screen and (min-width: 300px) and (max-width: 450px) {
  h3{
    font-size: 1.8rem;
  }
  p{
    font-size: 1.3rem;
  }
}
</style>