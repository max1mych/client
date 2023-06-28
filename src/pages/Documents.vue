<template>
  <HeaderShort />
  <main class="d-flex flex-column min-vh-100">
    <div class="container-fluid mt-5">

      <!--Документы-->
      <div class="container-fluid p-0 mb-5 justify-content-center align-content-center" style="text-align: center;">
        <h1 class="mt-3 mb-5"><b>Документы</b></h1>
        <div class="row mx-5">

          <div class="col-xl-6 col-sm-12">
            <div class="flex-column px-5">
              <img src="../assets/Documents/license-1.png" alt="" class="img mt-3">
              <p class="mt-3">Лицензия на осуществление охранной деятельности</p>
            </div>
          </div>

          <div class="col-xl-6 col-sm-12">
            <div class="flex-column px-5">
              <img src="../assets/Documents/license-2.png" alt="" class="img mt-3">
              <p class="mt-3">Лицензия на осуществление охранной деятельности</p>
            </div>
          </div>
        </div>
      </div>

      <!--Отчёты-->
      <div class="container-fluid p-0 mt-5 ">
        <h1 class="px-5 pb-5" style="text-align: center"><b>Отчёты</b></h1>
        <div class="li d-flex flex-column justify-content-center align-items-center ">
          <ul><a href="#" class="doc">Финансовая отчётность за 2021 год</a></ul>
          <ul><a href="#" class="doc">Финансовая отчётность за 2020 год</a></ul>
          <ul><a href="#" class="doc">Финансовая отчётность за 2019 год</a></ul>
          <ul><a href="#" class="doc">Финансовая отчётность за 2018 год</a></ul>
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