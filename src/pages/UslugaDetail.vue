<template>
<main class="d-flex flex-column min-vh-100">
<HeaderShort />
<div class="container-fluid align-items-center mx-auto px-5 mb-5">
<!--Услуга заголовок-->
<div class="my-5 zagolovok d-flex justify-content-center justify-items-center" style="text-align: center;">
<div class="align-middle p-1" style="font-weight: 600; border-radius:30px; text-align: center; font-size: 40px; line-height: 35px; border:0px;">
</div>
<p><b> {{ usluga.title }}</b></p>
</div>

<div class="row d-flex justify-content-center align-items-start">
<div class="col-xl-5 col-sm-12 m-3">
<!--Описание услуги-->
<div class="flex-column">
<div class="usluga-description" style="min-width:100%; min-height:10em; border-radius: 30px;">
<h2><b class="mx-2">Описание услуги</b></h2>
<p class="p-2">{{ usluga.text }}</p>
</div>
</div>
<!--Цена услуги-->
<div class="cost flex-column mt-3">
<h2><b class="mx-2">Цена:</b></h2>
<p><span class="p-2">{{ usluga.price }}</span> руб/час</p>
</div>
</div>
<!--Картинка-->
<div class="col-xl-6 col-sm-12 m-3 d-flex justify-content-center align-items-center">
<div>
<img :src="'http://localhost:5000/' + usluga.img" alt="" class="usluga-img img-fluid" style="max-width: 700px; max-height: 700px;">
</div>
</div>
</div>
<!--кнопка-->
<router-link to="/Zayavka">
<button type="button" class="btn btn-primary my-5 px-5 py-3 mx-auto" style="background: #F26A1B; border-radius:100px; font-weight: 800; font-size: 40px; line-height: 33px; display: flex; align-items: center; text-align: center; color: #FFFFFF;">
Заполнить заявку
</button>
</router-link>
</div>
</main>
</template>

<script>
import HeaderShort from '@/components/HeaderShort.vue';
import axios from 'axios';

export default {
data() {
return {
usluga: []
};
},
async mounted() {
axios.get('/api/service/' + this.$route.params.id)
.then(res => {
this.usluga = res.data;
console.log(res.data);
})
.catch(error => {
console.error(error);
});
},
components: {
HeaderShort
}
};
</script>

<style lang="scss" scoped></style>