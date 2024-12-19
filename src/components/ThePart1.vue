<template>
  <div class="containerPart1">
    <div class="photodive">
      <img src="/public/imeges/maincontent/part1/Layer 0 1.png" alt="" />
    </div>
    <div class="infotoppart1">
      <div class="title text-6xl font-medium">
        <div class="stoka1">Реплики картин</div>
        <div class="stroka2 flex">
          <div class="stoka1">от </div>
          <div class="style2st2">Ink. House</div>
        </div>
      </div>
      <div class="subtitle font-medium">
        Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие
        произведения, доступные цены.
      </div>
      <button class="btnart text-xl">
        <RouterLink to="/ThePart2">Продукция</RouterLink>
      </button>
    </div>
  </div>
</template>
<style scoped>
.containerPart1 {
  margin: 0vh 15vh 6vh 15vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.photodive {
  grid-column: 1;
}
.infotoppart1 {
  grid-column: 2;
  margin: 25% 0vh 25% 2vh;
}
.title {
  margin-bottom: 3vh;
}
.stoka1 {
  color: #2c2d35;
}
.style2st2 {
  color: #598d66;
}
.btnart {
  border: #598d66 solid 1px;
  padding: 2vh 6vh;
  margin-top: 6vh;
  color: #598d66;
}
button.btnart:hover {
  background-color: #598d66;
  color: aliceblue;
}
.subtitle {
  color: #86928b;
}
/*МЕДИА ЗАПРОСЫ ДЛЯ АДАПТИВА САЙТА*/
@media (width <= 1130px) {
  .stoka1 {
    font-size: 2.5rem;
  }
  .style2st2 {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .btnart {
    font-size: 1.3rem;
    margin-top: 4vh;
    padding: 1.8vh 4vh;
  }
}
@media (width <= 900px) {
  .containerPart1 {
    margin: 0vh 5vh 6vh 5vh;
  }
}
@media (width <= 700px) {
  .containerPart1 {
    margin: 1vh 5vh 3vh 5vh;
    display: grid;
    grid-template-columns: 0.8fr 1fr;
  }
  .infotoppart1 {
    margin: 7% 0vh 25% 2%;
  }
  .btnart {
    font-size: 1.3rem;
  }
}
@media (width <= 530px) {
  .containerPart1 {
    margin: 1vh 5vh 3vh 5vh;
    display: grid;
    grid-template-columns: 0.7fr 1fr;
  }
  .infotoppart1 {
    margin: 5% 0vh 20% 2%;
  }
  .stoka1 {
    font-size: 2rem;
  }
  .style2st2 {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 0.9rem;
  }
  .btnart {
    font-size: 1.1rem;
  }
}
@media (width <= 460px) {
  .photodive {
    visibility: hidden;
  }
  .containerPart1 {
    margin: 1vh 2vh 3vh 2vh;
    grid-template-columns: 1fr;
  }
  .infotoppart1 {
    margin: 7% 0vh 10% 0vh;
  }
}
</style>
