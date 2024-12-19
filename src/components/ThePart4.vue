<template>
  <div class="containerPart4">
    <div class="photopaint">
      <img src="/public/imeges/maincontent/part4/Group 210.svg" alt="" />
    </div>
    <div class="infotoppart4">
      <div class="title4 text-4xl font-medium">Наша команда</div>
      <div class="subtitle4 text-lg font-medium">
        Значимость этих проблем настолько очевидна, что базовый вектор развития
        позволяет оценить значение экспериментов, поражающих по своей
        масштабности и грандиозности. Мы вынуждены отталкиваться от того, что
        консультация с широким активом.
      </div>
      <div class="phtoline gap-3">
        <div class="img1">
          <img src="/public/imeges/maincontent/part4/Ellipse 30.svg" alt="" />
        </div>
        <div class="img2">
          <img src="/public/imeges/maincontent/part4/Ellipse 31.svg" alt="" />
        </div>
        <div class="img3">
          <img src="/public/imeges/maincontent/part4/Ellipse 32.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.containerPart4 {
  margin: 8vh 15vh 8vh 15vh;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 7vh;
}
img {
  widows: 100%;
  height: 100%;
}
.title4 {
  color: #2c2d35;
  margin-bottom: 2vh;
}
.subtitle4 {
  color: #2c2d35;
  margin-bottom: 2vh;
}
.photopaint {
  grid-column: 1;
}
.infotoppart4 {
  grid-column: 2;
  padding: 12vh 0vh 3vh 0vh;
}
.phtoline {
  display: grid;
  margin: 0vh 50% 0vh 0vh;
  grid-template-columns: 1fr 1fr 1fr;
}
.img1 {
  grid-column: 1;
}
.img2 {
  grid-column: 2;
}
.img3 {
  grid-column: 3;
}
@media (width <= 900px) {
  .containerPart4 {
    margin: 8vh 5vh 4vh 5vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.7fr;
    gap: 3vh;
  }
  .photopaint {
    grid-column: 1;
    grid-row: 1;
  }
  .infotoppart4 {
    grid-column: 1;
    grid-row: 2;
    padding: 3vh 0vh 0vh 0vh;
  }
}
@media (width <= 700px) {
  .title4 {
    font-size: 1.9rem;
  }
  .subtitle4 {
    font-size: 1.1rem;
  }
}
@media (width <= 700px) {
  .containerPart4 {
    margin: 2vh 3vh 2vh 3vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.7fr;
    gap: 3vh;
  }
}
@media (width <= 530px) {
  .containerPart4 {
    margin: 2vh 3vh 2vh 3vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.9fr;
    gap: 1vh;
  }
  .photopaint img {
    width: 80%;
    height: 80%;
  }
  .title4 {
    font-size: 1.5rem;
  }
  .subtitle4 {
    font-size: 1rem;
  }
  .infotoppart4 {
    grid-column: 1;
    grid-row: 2;
    padding: 0vh 0vh 2vh 0vh;
  }
}
</style>
