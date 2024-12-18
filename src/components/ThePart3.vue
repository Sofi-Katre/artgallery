<template>
  <div class="containerPart3 flex flex-col">
    <div class="backpr3">
      <div class="part3">
        <div class="titlepr3 flex items-center gap-6">
          <img src="../imeges/maincontent/part3/Star 2.svg" alt="Star 2" />
          <div class="namelogo text-5xl">
            Новая коллекция французских авторов
          </div>
        </div>
        <div class="subtitle1 text-lg">
          Сложно сказать, почему акционеры крупнейших компаний призывают нас к
          новым свершениям, которые, в свою очередь, должны быть заблокированы в
          рамках своих собственных рациональных ограничений.
        </div>
        <div class="subtitle2 text-lg">
          Принимая во внимание показатели успешности, граница обучения кадров
          предопределяет высокую востребованность направлений прогрессивного
          развития.
        </div>
        <button class="btnpr3 text-xl">
          <RouterLink to="/ThePart2">Ознакомиться</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.containerPart3 {
  background-image: url("../imeges/maincontent/part3/214.png"),
    url("../../media/examples/star.png");
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 4vh;
  margin-bottom: 4vh;
}
.titlepr3 {
  margin-bottom: 4vh;
}
.backpr3 {
  display: grid;
  grid-template-columns: 60% 40%;
}
.subtitle1 {
  margin-bottom: 4vh;
}
.part3 {
  background: rgb(4, 3, 22);
  background: linear-gradient(
    90deg,
    rgba(4, 3, 22, 0.8015581232492998) 38%,
    rgba(5, 5, 31, 0.67) 82%,
    rgba(157, 157, 157, 0.06486344537815125) 100%
  );
  padding: 8vh 0vh 8vh 15vh;
  color: #ffffff;
}
.btnpr3 {
  background-color: #eedb6d;
  border: #eedb6d solid 1px;
  padding: 2vh 6vh;
  margin-top: 6vh;
  color: #2c2d35;
}
button.btnpr3:hover {
  background-color: #e6ba41;
  border: #eed9b3 solid 1px;
  color: aliceblue;
}
/*МЕДИА ЗАПРОСЫ ДЛЯ АДАПТИВА САЙТА*/
@media (width <= 1130px) {
  .backpr3 {
    display: grid;
    grid-template-columns: 80% 20%;
  }
  .btnpr3 {
    font-size: 1.3rem;
    margin-top: 4vh;
    padding: 1.8vh 4vh;
  }
}
</style>
