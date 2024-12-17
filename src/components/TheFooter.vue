<template>
  <div class="footercontainer font-serif">
    <div class="footer grid gap-2">
      <div class="logo flex items-center gap-1 text-xl">
        <img src="../imeges/header/Star 1.png" alt="" />
        <div class="namelogo">Ink. House</div>
      </div>
      <div class="phonenumber">
        <div class="text-xl">+7 (999) 543-54-54</div>
        <div class="txtstyle text-lg">Мастерская</div>
      </div>
      <div class="navigation grid gap-3">
        <div class="navcol1">
          <ul>
            <li class="text-xl">Репродукции</li>
            <li class="txtstyle text-lg">Франция</li>
            <li class="txtstyle text-lg">Германия</li>
            <li class="txtstyle text-lg">Англия</li>
          </ul>
        </div>
        <div class="navcol2">
          <ul>
            <li class="text-xl">Новинки</li>
            <li class="txtstyle text-lg">2021</li>
            <li class="txtstyle text-lg">2020</li>
          </ul>
        </div>
        <div class="navcol3">
          <ul>
            <li class="text-xl">О нас</li>
            <li class="txtstyle text-lg">Художники</li>
            <li class="txtstyle text-lg">Менеджеры</li>
          </ul>
        </div>
      </div>
      <div class="backinfo flex justify-end">
        <div class="grid grid-rows-2">
          <div class="sotialmedia">
            <ul class="flex gap-3">
              <li><img src="../imeges/footer/Facebook.svg" alt="" /></li>
              <li><img src="../imeges/footer/Instagram.svg" alt="" /></li>
              <li><img src="../imeges/footer/YouTube.svg" alt="" /></li>
            </ul>
          </div>
          <div class="downinfo">
            <ul class="flex flex-col">
              <li>Ink. House ®</li>
              <li>All rights reserved</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.txtstyle {
  color: #86928b;
}
.footercontainer {
  /*background-color: rgba(225, 237, 230, 1);*/
  padding: 1vh;
  width: 100%;
}
.footer {
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
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
.phonenumber {
  grid-column: 1;
}
.navigation {
  grid-template-columns: auto auto auto;
  grid-column: 2;
  grid-row: 1 / span 2;
}
.navcol1 {
  grid-column: 1;
}
.navcol2 {
  grid-column: 2;
}
.navcol3 {
  grid-column: 3;
}
.backinfo {
  grid-column: 3;
  grid-row: 1 / span 2;
}
</style>
