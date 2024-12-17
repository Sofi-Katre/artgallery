<template>
  <div class="headercontainer font-serif">
    <div class="header">
      <div class="logo flex items-center gap-1 text-xl">
        <img src="../imeges/header/Star 1.png" alt="" />
        <div class="namelogo">Ink. House</div>
      </div>
      <div class="nav flex">
        <ul class="flex justify-end gap-8 text-xl">
          <li>Репродукции</li>
          <li>Новинки</li>
          <li>О нас</li>
          <li><img src="../imeges/header/Frame 217.svg" alt="" /></li>
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
</style>
