<script>
export default {
  props: {
    infoitem: Object,
  },
};
</script>
<template>
  <div class="containerCard flex flex-col gap-1">
    <div class="photocard flex items-center justify-center">
      <img :src="infoitem.picture" alt="" />
    </div>
    <div class="autore text-lg">{{ infoitem.autore }}</div>
    <div class="titleCard text-3xl">{{ infoitem.titleCard }}</div>
    <div class="characteristics text-lg">{{ infoitem.characteristics }}</div>
    <div class="price text-2xl font-normal mt-3">
      {{ infoitem.price }} в руб
    </div>
    <button class="btnadd text-xl mt-4">В корзину</button>
  </div>
</template>
<style scoped>
img {
  object-fit: contain;
  object-position: center;
}
.containerCard {
  background-color: #e1ede6;
  padding: 2.5vh 2.5vh 3.5vh 2.5vh;
}
.autore {
  color: #86928b;
}
.titleCard {
  color: #2c2d35;
}
.characteristics {
  color: #2c2d35;
}
.btnadd {
  border: #598d66 solid 1px;
  padding: 2vh 6vh;
  color: #598d66;
}
.price {
  color: #598d66;
}
button.btnadd:hover {
  background-color: #598d66;
  color: aliceblue;
}
/*МЕДИА ЗАПРОСЫ ДЛЯ АДАПТИВА САЙТА*/
@media (width <= 1130px) {
  .autore {
    font-size: 1rem;
  }
  .titleCard {
    font-size: 1.4rem;
  }
  .characteristics {
    font-size: 1rem;
  }
  .price {
    font-size: 1.3rem;
  }
  .btnadd {
    font-size: 1.3rem;
    margin-top: 4vh;
    padding: 1.8vh 4vh;
  }
}
@media (width <= 650px) {
  .btnadd {
    font-size: 1.1rem;
  }
}
@media (width <= 530px) {
  .containerCard {
    background-color: #e1ede6;
    padding: 2vh 2vh 3vh 2vh;
  }
  .btnadd {
    font-size: 1rem;
  }
  .autore {
    font-size: 1rem;
  }
  .titleCard {
    font-size: 1.18rem;
    font-weight: 500;
  }
  .characteristics {
    font-size: 0.9rem;
  }
  .price {
    font-size: 1.18rem;
    font-weight: 500;
  }
}
</style>
