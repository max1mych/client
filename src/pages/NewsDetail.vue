<template>
  <main class="d-flex flex-column min-vh-100">
    <HeaderShort />
    <div class="container-fluid p-5">
      <div class="d-flex justify-content-center m-4" style="text-align: center;">
        <h1><b>{{ novost.title }}</b></h1>
      </div>
      <div class="container-fluid d-flex justify-content-center my-5">
       
      </div>
      <div class="container-fluid m-3 mx-auto" style="border: 2px solid black; border-radius: 30px;">
        <div class="container-fluid mt-4 px-2 mx-auto d-flex mx-auto container-fluid justify-content-center" >
          <p class="">  <img :src="'axios.defaults.baseURL' + '/' + novost.img" alt="" 
            class="novost-img img-fluid" 
            style="float:right; min-height: 10em;"> {{ block }}</p>
        </div>

      </div>
    </div>
  </main>
</template>
  
<script>
import HeaderShort from '@/components/HeaderShort.vue';
import axios from 'axios';

export default {
  data() {
    return {
      novost: [],
      block: '',
    };
  },
  async mounted() {
    axios
      .get('/api/news/' + this.$route.params.id)
      .then((res) => {
        this.novost = res.data;
        console.log(res.data);
        this.block = this.novost.text.split(/(?<=[!?.])/).join("\n")
      })
      .catch((error) => {
        console.error(error);
        alert('Ваши данные не соответствуют шаблонам, поменяйте их')
      });
  },
  components: {
    HeaderShort,
  },
};
</script>
  
<style lang="scss" scoped></style>