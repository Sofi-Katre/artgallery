<template>
  <div class="headercontainer font-serif">
    <div class="header">
      <div class="logo flex items-center gap-1 text-xl">
        <img src="/public/imeges/header/Star 1.png" alt="" />
        <div class="namelogo"><RouterLink to="/">Ink. House</RouterLink></div>
      </div>
      <div class="nav flex">
        <ul class="spacenav flex justify-end gap-8 text-xl">
          <li><RouterLink to="/">Репродукции</RouterLink></li>
          <li><RouterLink to="/">Новинки</RouterLink></li>
          <li><RouterLink to="/">О нас</RouterLink></li>
          <li><img src="/public/imeges/header/Frame 217.svg" alt="" /></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.headercontainer {
  background-color: rgba(225, 237, 230, 1);
  padding: 1vh;
  width: 100%;
}
.header {
  display: grid;
  grid-template-columns: auto auto;
  margin: 2vh 15vh 2vh 15vh;
}
.logo {
  grid-column: 1;
  display: flex;
  justify-content: left;
}
.namelogo {
  color: rgba(89, 141, 102, 1);
}
.nav {
  grid-column: 2;
  justify-content: right;
  color: rgba(44, 45, 53, 1);
}
@media (width <= 900px) {
  .header {
    margin: 2vh 5vh 2vh 5vh;
  }
}
@media (width <= 650px) {
  .header {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    margin: 2vh 3vh 2vh 3vh;
    gap: 2vh;
  }
  .logo {
    grid-column: 1;
    grid-row: 1;
    justify-content: center;
  }
  .nav {
    grid-column: 1;
    grid-row: 2;
    justify-content: center;
  }
  .spacenav {
    align-content: stretch;
    justify-content: space-between;
    gap: auto;
    font-size: 1.1rem;
  }
}
@media (width <= 460px) {
  .logo {
    font-size: 1.2rem;
  }
  .spacenav {
    font-size: 1rem;
  }
}
@media (width <= 390px) {
  .spacenav {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
}
</style>
