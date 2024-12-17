<template>
  <div class="containerCard flex flex-col gap-1">
    <div class="photocard">Photo</div>
    <div class="autore text-lg">Автор</div>
    <div class="titleCard text-3xl">Имя картины</div>
    <div class="characteristics text-lg">Характеристики</div>
    <div class="price text-2xl font-normal mt-3">Цена в руб</div>
    <button class="btnadd text-xl mt-4">В корзину</button>
  </div>
</template>
<style scoped>
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
</style>
