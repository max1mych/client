<template>
  <HeaderShort />
  <main class="d-flex flex-column min-vh-100">
    <div class=" container-fluid mt-5">
      <div class="container-fluid p-0 mb-5 justify-content-center align-content-center">
        <h1 style="text-align: center;"><b>Контакты</b></h1>
        <div class="row mt-5">
          <div class="col-xl-4 col-sm-12 mt-5">
            <div class="flex-column mx-5 ">
              <div class="mb-3">
                <h2 class="mb-2"><b>Адрес:</b></h2>
                <p>г. Иркутск, Кировский район
                  Декабрьских событий, 46</p>
              </div>

              <div class="mb-3">
                <h2 class="mb-2"><b>Телефоны:</b></h2>
                <p class="m-0">+7 (3952) 61-40-80</p>
                <p class="m-0">+7 (3952) 68-68-45</p>
                <p class="m-0">+7 (3952) 40-45-85</p>
                <p class="m-0">+7 (3952) 53-25-25</p>
              </div>

              <div class="mb-3">
                <h2 class="mb-2"><b>Режим работы:</b></h2>
                <p>Круглосуточно</p>
              </div>

              <div class="mb-3">
                <h2 class="mb-2"><b>Наша почта:</b></h2>
                <p>ohrana@404545.ru</p>
              </div>

              <div class="mb-3">
                <h2 class="mb-2"><b>Реквизиты:</b></h2>
                <p class="m-0">ООО ОА “Иркут”</p>
                <p class="m-0">ИНН 3849066790</p>
                <p class="m-0">КПП 384901001</p>
                <p class="m-0">ОГРН 1173850039054</p>




              </div>
            </div>
          </div>
          <div class="col-xl-2 col-sm-0"></div>
          <div class="col-xl-6 col-sm-12 mt-5">
            <div class="mb-5">
              <h2><b>Мы на карте:</b></h2>
              <div class="flex-column mt-3 mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1220.2574949508773!2d104.29707576041805!3d52.28850666729053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5da83b3768748049%3A0x745da9c5d6d3cc04!2z0YPQuy4g0JTQtdC60LDQsdGA0YzRgdC60LjRhSDQodC-0LHRi9GC0LjQuSwgNDYsINCY0YDQutGD0YLRgdC6LCDQmNGA0LrRg9GC0YHQutCw0Y8g0L7QsdC7LiwgNjY0MDA3!5e0!3m2!1sru!2sru!4v1683433986205!5m2!1sru!2sru"
                  width="719" height="384" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  style="max-width: 100%;">
                </iframe>
              </div>
            </div>
            <div class="mt-5" style="padding-top:10%">
              <h2><b>Мы в социальных сетях:</b></h2>
            </div>
            <div class="row">
              <div class="col-xl-1 col-sm-2 m-3 d-flex justify-content-center">
                <a href="#">
                  <img src="../assets/Footer/odnoklassniki.svg" alt="" class="img px-4">
                </a>
              </div>

              <div class="col-xl-1 col-sm-2 m-3 d-flex justify-content-center">
                <a href="#">
                  <img src="../assets/Footer/vk-logo-of-social-network.svg" alt="" class="img px-4">
                </a>
              </div>

              <div class="col-xl-1 col-sm-2 m-3 d-flex justify-content-center">
                <a href="#">
                  <img src="../assets/Footer/viber.svg" alt="" class="img px-4 ">
                </a>
              </div>

              <div class="col-xl-1 col-sm-2 m-3 d-flex justify-content-center">
                <a href="#">
                  <img src="../assets/Footer/telegram.svg" alt="" class="img px-4 ">
                </a>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderShort from '@/components/HeaderShort.vue'

export default {
  components: {
        HeaderShort
    }
}
</script>

<style lang="scss" scoped></style>