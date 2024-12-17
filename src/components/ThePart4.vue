<template>
  <div class="containerPart4">
    <div class="photopaint">
      <img src="../imeges/maincontent/part4/Group 210.svg" alt="" />
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
          <img src="../imeges/maincontent/part4/Ellipse 30.svg" alt="" />
        </div>
        <div class="img2">
          <img src="../imeges/maincontent/part4/Ellipse 31.svg" alt="" />
        </div>
        <div class="img3">
          <img src="../imeges/maincontent/part4/Ellipse 32.svg" alt="" />
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
</style>
