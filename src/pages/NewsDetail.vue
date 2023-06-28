<template>
  <main class="d-flex flex-column min-vh-100">
  <HeaderShort />
  <div class="container-fluid p-5">
  <div class="d-flex justify-content-center m-4" style="text-align: center;">
  <h1><b>{{ novost.title }}</b></h1>
  </div>
  <div class="container-fluid d-flex justify-content-center my-5"></div>
  <div class="container-fluid mt-4 px-2 mx-auto d-flex justify-content-center">
  <div class="novost-text-container">
  <div class="novost-text-form">
  <div class="novost-text-wrapper">
  <p class="novost-text">{{ block }}</p>
  </div>
  </div>
  </div>
  <div class="novost-img-container">
  <img
  :src="'https://bokonach.onrender.com/' + novost.img"
  alt=""
  class="novost-img"
  />
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
  this.block = this.novost.text.split(/(?<=[!?.])/).join('\n');
  })
  .catch((error) => {
  console.error(error);
  alert('Ваши данные не соответствуют шаблонам, поменяйте их');
  });
  },
  components: {
  HeaderShort,
  },
  };
  </script>
  
  <style lang="scss" scoped>
  .novost-text-container {
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 0;
  flex-grow: 1;
  height: auto;
  overflow-y: auto;
  }
  
  .novost-text-form {
  max-width: calc(100% - 500px);
  height: auto;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  }
  
  .novost-text-wrapper {
  max-height: 100%;
  overflow-y: auto;
  }
  
  .novost-text {
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  flex-basis: 100%;
  }
  
  .novost-img-container {
  flex-shrink: 0;
  width: 500px;
  height: auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 1rem;
  }
  
  .novost-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  }
  
  .container-fluid.d-flex.justify-content-center.my-5 {
  flex-wrap: wrap;
  }
  
  .container-fluid.mt-4.px-2.mx-auto.d-flex.justify-content-center {
  align-items: stretch; /* Изменено свойство */
  }
  </style>