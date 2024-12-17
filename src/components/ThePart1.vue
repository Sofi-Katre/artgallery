<template>
  <div class="containerPart1">
    <div class="photodive">
      <img src="../imeges/maincontent/part1/Layer 0 1.png" alt="" />
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
      <button class="btnart text-xl">Продукция</button>
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
  margin: 15vh 0vh 15vh 2vh;
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
</style>
