<template>
  <div class="containerPart3 flex flex-col">
    <div class="backpr3">
      <div class="part3">
        <div class="titlepr3 flex items-center gap-6">
          <img src="/public/imeges/maincontent/part3/Star 2.svg" alt="Star 2" />
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
  background-image: url("/public/imeges/maincontent/part3/214.png"),
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
@media (width <= 900px) {
  .backpr3 {
    display: grid;
    grid-template-columns: 1fr;
  }
  .part3 {
    padding: 5vh 5vh 5vh 5vh;
  }
}
@media (width <= 700px) {
  .namelogo {
    font-size: 1.9rem;
  }
  .subtitle1 {
    font-size: 1.1rem;
  }
  .subtitle2 {
    font-size: 1.1rem;
  }
  .btnpr3 {
    font-size: 1.3rem;
  }
}
@media (width <= 650px) {
  .part3 {
    padding: 2vh 3vh 2vh 3vh;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .titlepr3 {
    margin-bottom: 2vh;
  }
  .namelogo {
    font-size: 1.5rem;
  }
  .subtitle1 {
    font-size: 1rem;
    margin-bottom: 1vh;
  }
  .subtitle2 {
    font-size: 1rem;
  }
  .btnpr3 {
    font-size: 1.1rem;
    margin-top: 2vh;
  }
}
@media (width <= 530px) {
  .namelogo {
    font-size: 1.2rem;
  }
  .subtitle1 {
    font-size: 0.9rem;
    margin-bottom: 1vh;
  }
  .subtitle2 {
    font-size: 0.9rem;
  }
  .btnpr3 {
    font-size: 1rem;
    margin-top: 2vh;
    padding: 1.5vh 3vh;
  }
}
</style>
