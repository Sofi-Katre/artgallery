<script>
import TheCard from "./TheCard.vue";
export default {
  components: {
    TheCard,
  },
  mounted() {
    fetch("categories.json")
      .then((resp) => resp.json())
      .then((json) => {
        this.pictures = json.France.infoitem;
        this.categories = json;
      });
  },
  data() {
    return {
      pictures: null,
      categories: null,
    };
  },
  methods: {
    country(namecategory) {
      fetch("categories.json")
        .then((resp) => resp.json())
        .then((json) => {
          this.pictures = json[namecategory].infoitem;
        });
    },
  },
};
</script>
<template>
  <div class="containerPart2">
    <div class="partcontainer1 grid grid-cols-2 mb-8">
      <div class="title2 text-4xl">Репродукции</div>
      <div class="filter flex justify-end gap-6">
        <button
          @click="country(key)"
          v-for="(category, key) in categories"
          :key="key"
          class="btnpr2 text-lg"
        >
          {{ category.category }}
        </button>
      </div>
    </div>
    <div class="cardlist grid gap-12">
      <TheCard :infoitem="item" v-for="(item, key) in pictures" :key="key" />
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
button.btnpr2:hover {
  background-color: #d4e8d9;
  border-radius: 20px;
  border: #d4e8d9 solid 1px;
  padding: 0.5vh 2vh;
  color: #2c2d35;
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
@media (width <= 1130px) {
  .containerPart2 {
    margin: 2vh 5vh 4vh 5vh;
  }
}
@media (width <= 700px) {
  .title2 {
    font-size: 1.8rem;
  }
  .btnpr2 {
    font-size: 1rem;
  }
}
@media (width <= 650px) {
  .partcontainer1 {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 2vh;
  }
  .title2 {
    grid-column: 1;
    grid-row: 1;
  }
  .btnpr2 {
    grid-column: 1;
    grid-row: 2;
  }
  .filter {
    justify-content: flex-start;
  }
  .cardlist {
    gap: 2vh;
  }
}
@media (width <= 460px) {
  .containerPart2 {
    margin: 2vh 2vh 4vh 2vh;
  }
  .cardlist {
    grid-template-columns: 1fr;
  }
  .title2 {
    font-size: 1.2rem;
  }
  .btnpr2 {
    font-size: 0.7rem;
  }
}
</style>
