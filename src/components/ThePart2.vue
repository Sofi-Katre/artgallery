<script>
import { mapGetters } from "vuex";
import TheCard from "./TheCard.vue";
export default {
  components: {
    TheCard,
  },
};
</script>
<template>
  <div class="containerPart2">
    <div class="partcontainer1 grid grid-cols-2 mb-8">
      <div class="title2 text-4xl">Репродукции</div>
      <div class="filter flex justify-end gap-6">
        <button class="btnpr2 text-lg">Франция</button>
        <!-- Когда кнопка активна*/ -->
        <button class="btnpr2style2 text-lg">Германия</button>
        <button class="btnpr2style2 text-lg">Англия</button>
      </div>
    </div>
    <div class="cardlist grid gap-12">
      <TheCard
        :infoitem="item"
        v-for="(item, key) in getCategory.slice"
        :key="key"
      />
    </div>
  </div>
</template>

<style scoped>
.containerPart2 {
  margin: 2vh 15vh 4vh 15vh;
  padding: 1vh;
}
.btnpr2 {
  background-color: #376b44;
  border: #376b44 solid 1px;
  border-radius: 20px;
  padding: 0.5vh 2vh;
  color: #f4f6f5;
}
.btnpr2style2 {
  background-color: #d4e8d9;
  border-radius: 20px;
  border: #d4e8d9 solid 1px;
  padding: 0.5vh 2vh;
  color: #2c2d35;
}
button.btnpr2style2:hover {
  background-color: #f4f6f5;
  color: #2c2d35;
  border: #2c2d35 solid 1px;
}
.cardlist {
  grid-template-columns: 1fr 1fr 1fr;
}
/*МЕДИА ЗАПРОСЫ ДЛЯ АДАПТИВА САЙТА*/
@media (width <= 1130px) {
  .cardlist {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
