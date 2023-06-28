<template>
  <footer class="mt-auto">

    <div class=" container-fluid mx-auto px-0" style="background: #0D0D0D;">
      <div class="row mt-4 p-4 ">
        <!--Левая половина: разделы сайта, карта-->
        <div class="col-xl-6 col-sm-12 pb-5 mb-5">
          <div class="row justify-content-center">
            <div class="col-xl-6 col-md-6 col-sm-12">
              <div class="d-flex flex-column align-items-start justify-content-center mx-auto w-50 mt-3 "
                style="white-space: nowrap;">
                <div>
                  <router-link to="/Uslugi" class="nav-link forhover mt-2">Услуги</router-link>
                </div>
                <div>
                  <router-link to="/AboutUs" class="nav-link forhover mt-2">О нас</router-link>
                </div>
                <div>
                  <router-link to="/Documents" class="nav-link forhover mt-2">Документы</router-link>
                </div>
                <div>
                  <router-link to="/Contacts" class="nav-link forhover mt-2">Контакты</router-link>
                </div>
              </div>
            </div>
            <div class="col-xl-6 col-sm-12 ">
              <div class="d-flex justify-content-center mt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1220.2574949508773!2d104.29707576041805!3d52.28850666729053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5da83b3768748049%3A0x745da9c5d6d3cc04!2z0YPQuy4g0JTQtdC60LDQsdGA0YzRgdC60LjRhSDQodC-0LHRi9GC0LjQuSwgNDYsINCY0YDQutGD0YLRgdC6LCDQmNGA0LrRg9GC0YHQutCw0Y8g0L7QsdC7LiwgNjY0MDA3!5e0!3m2!1sru!2sru!4v1683433986205!5m2!1sru!2sru"
                  width="407" height="227" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>

            </div>
          </div>
        </div>

        <!--Вторая половина контакты, оставить заявку ещё раз-->
        <div class="col-xl-6 col-sm-12 d-flex justify-content-center">

          <div class="d-flex flex-column mx-auto px-0">

            <p class="mx-auto mt-1">НАШИ КОНТАКТЫ</p>

            <div class="row">
              <div class="col-1">
                <img src="../assets/Footer/метка.svg" alt="" class="img">
              </div>
              <div class="col-11">г.Иркутск Декабрьских событий, 46</div>
            </div>

            <div class="row">

              <div class="col-1">
                <img src="../assets/Footer/telephone.svg" alt="" class="img">
              </div>
              <div class="col-11">8-800-101-92-45</div>
            </div>

            <div class="row">
              <div class="col-1">
                <img src="../assets/Footer/mail.svg" alt="" class="img">
              </div>
              <div class="col-11">ohrana@404545.ru</div>
            </div>

            <div class="row mt-3">

              <div class="col-xl-1 col-sm-3 mt-3 d-flex justify-content-center">
                <a href="#">
                  <img src="../assets/Footer/odnoklassniki.svg" alt="" class="img px-4">
                </a>
              </div>

              <div class="col-xl-1 col-sm-3 mt-3 d-flex justify-content-center">
                <a href="#">
                  <img src="../assets/Footer/vk-logo-of-social-network.svg" alt="" class="img px-4">
                </a>
              </div>

              <div class="col-xl-1 col-sm-3 mt-3 d-flex justify-content-center">
                <a href="#">
                  <img src="../assets/Footer/viber.svg" alt="" class="img px-4 ">
                </a>
              </div>

              <div class="col-xl-1 col-sm-3 mt-3 d-flex justify-content-center">
                <a href="#">
                  <img src="../assets/Footer/telegram.svg" alt="" class="img px-4 ">
                </a>
              </div>

              <div class="col-xl-2 col-sm-0"></div>
              <div class="col-xl-6 col-sm-12 mt-3 d-flex justify-content-center">
                <router-link to="/Zayavka">
                  <button type="button" class="btn btn-primary p-3"
                    style="background: #F26A1B; border-radius: 38px; font-weight: 800; font-size: 28px; line-height: 33px; display: flex; align-items: center; text-align: center; color: #FFFFFF;">
                    Оставить заявку
                  </button>
                </router-link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script></script>
<style></style>