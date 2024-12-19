<template>
  <div class="footercontainer font-serif">
    <div class="footer grid gap-2">
      <div class="logo flex items-center gap-1 text-xl">
        <img src="/public/imeges/header/Star 1.png" alt="" />
        <div class="namelogo"><RouterLink to="/">Ink. House</RouterLink></div>
      </div>
      <div class="phonenumber">
        <div class="phone text-xl">+7 (999) 543-54-54</div>
        <div class="txtstyle text-lg">Мастерская</div>
      </div>
      <div class="navigation grid gap-3">
        <div class="navcol1">
          <ul>
            <li class="text-xl">
              <RouterLink to="/ThePart2">Репродукции</RouterLink>
            </li>
            <li class="txtstyle text-lg">
              <RouterLink to="/ThePart2">Франция</RouterLink>
            </li>
            <li class="txtstyle text-lg">
              <RouterLink to="/ThePart2">Германия</RouterLink>
            </li>
            <li class="txtstyle text-lg">
              <RouterLink to="/ThePart2">Англия</RouterLink>
            </li>
          </ul>
        </div>
        <div class="navcol2">
          <ul>
            <li class="text-xl">
              <RouterLink to="/ThePart2">Новинки</RouterLink>
            </li>
            <li class="txtstyle text-lg">
              <RouterLink to="/ThePart2">2021</RouterLink>
            </li>
            <li class="txtstyle text-lg">
              <RouterLink to="/ThePart2">2020</RouterLink>
            </li>
          </ul>
        </div>
        <div class="navcol3">
          <ul>
            <li class="text-xl">
              <RouterLink to="/ThePart4">О нас</RouterLink>
            </li>
            <li class="txtstyle text-lg">
              <RouterLink to="/ThePart4">Художники</RouterLink>
            </li>
            <li class="txtstyle text-lg">
              <RouterLink to="/ThePart4">Менеджеры</RouterLink>
            </li>
          </ul>
        </div>
      </div>
      <div class="backinfo flex justify-end">
        <div class="grid grid-rows-2">
          <div class="sotialmedia">
            <ul class="flex gap-3">
              <li><img src="/public/imeges/footer/Facebook.svg" alt="" /></li>
              <li><img src="/public/imeges/footer/Instagram.svg" alt="" /></li>
              <li><img src="/public/imeges/footer/YouTube.svg" alt="" /></li>
            </ul>
          </div>
          <div class="downinfo">
            <ul class="downinfoul flex flex-col">
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
/*МЕДИА ЗАПРОСЫ ДЛЯ АДАПТИВА САЙТА*/
@media (width <= 1030px) {
  .footercontainer {
    background-color: rgba(225, 237, 230, 1);
  }
  .footer {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    margin: 2vh 15vh 2vh 15vh;
  }
  .phonenumber {
    grid-column: 2;
    grid-row: 1;
    text-align: right;
  }
  .navigation {
    grid-template-columns: auto auto auto;
    grid-column: 1;
    grid-row: 2;
  }
  .backinfo {
    grid-column: 2;
    grid-row: 2;
  }
}
@media (width <= 900px) {
  .footercontainer {
    background-color: rgba(225, 237, 230, 1);
  }
  .footer {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    margin: 2vh 5vh 2vh 5vh;
  }
  .logo {
    grid-column: 1;
    grid-row: 1;
  }
  .phonenumber {
    grid-column: 1;
    grid-row: 1;
    text-align: right;
  }
  .navigation {
    grid-template-columns: auto auto auto;
    grid-column: 1;
    grid-row: 2;
  }
  .backinfo {
    grid-column: 2;
    grid-row: 2;
  }
}
@media (width <= 650px) {
  .footer {
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    margin: 2vh 3vh 2vh 3vh;
  }
  .phonenumber {
    grid-column: 1;
    grid-row: 1;
    text-align: right;
  }
  .navigation {
    grid-template-columns: auto auto auto;
    grid-column: 1;
    grid-row: 2;
  }
  .backinfo {
    grid-column: 1;
    grid-row: 3;
    justify-content: center;
  }
}
@media (width <= 460px) {
  .footer {
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto auto;
    margin: 2vh 2vh 2vh 2vh;
  }
  .logo {
    grid-column: 1;
    grid-row: 1;
    font-size: 0.8rem;
  }
  .phonenumber {
    grid-column: 1;
    grid-row: 2;
    text-align: left;
  }
  .phone {
    font-size: 0.8rem;
  }
  .navigation {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column: 2;
    grid-row: 1 / span 2;
  }
  .navcol1 {
    grid-column: 1;
    grid-row: 1;
  }
  .navcol2 {
    grid-column: 1;
    grid-row: 2;
  }
  .navcol3 {
    grid-column: 1;
    grid-row: 3;
  }
  .txtstyle {
    font-size: 1rem;
  }
  .backinfo {
    justify-content: normal;
    grid-column: 1 / span 2;
    grid-row: 3;
    font-size: 1rem;
  }
  .downinfoul {
    justify-content: center;
    flex-direction: row;
  }
}
</style>
