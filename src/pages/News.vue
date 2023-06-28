<template>
  <HeaderShort />

  <main class="d-flex flex-column min-vh-100">
    <div class="container-fluid">
      <div class="m-5">
        <h1 class="mb-5" style="text-align: center"><b>Новости</b></h1>
        <div class="d-flex flex-column">
          <!-- Тут происходит главная магия -->

          <div v-for="novost in news" :key="novost.id">
            <div class="Novost m-3 container-fluid">
              <!-- Заголовок -->
              <div class="row container-fluid mx-auto p-0">
                <div class="col-10 my-auto ">
                  <div class="container-fluid zagolovok px-0 py-2 mt-3">
                    <h3><b>{{ novost.title }}</b></h3>
                  </div>
                </div>
                <div class=" col-2  my-auto ">
                  <h3>
                    <!--<router-link v-if="isAuthenticated" to="/" class="mx-1">
                        <img src="../assets/nado/red.svg" alt="" width="40">
                      </router-link>-->
                    <button v-if="isAuthenticated" name="id" class="btn btn-link mx-1 justify-content-end d-flex" @click="deleteNews(novost.id)">
                    <p></p>
                      <img src="../assets/nado/delete.svg" alt="" width="40">
                    </button>
                  </h3>
                </div>
              </div>

              <!-- Новость -->
              <div class="novost-content p-2">
                <p>{{ novost.text }}</p>
              </div>
              <!-- Подробнее и дата -->
              <div class="row justify-content-center p-2">
                <div class="col-xl-2 col-sm-6 p-2" style="text-align: left">
                  <router-link :to="'/News/' + novost.id">
                    <a href class="forhover">Подробнее...</a>
                  </router-link>
                </div>
                <div class="col-xl-8 col-sm-0"></div>
                <div class="col-xl-2 col-sm-6 p-2" style="text-align: right">
                  <div href>
                    <p>{{ format_date(novost.createdAt) }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-2 col-sm-12">
              <router-link v-if="isAuthenticated" to="/News/Add">
                <div class="Novost m-3 container-fluid" style="text-align: center">
                  Создать новость
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
  
<script>

import HeaderShort from '@/components/HeaderShort.vue';
import axios from 'axios';
import moment from 'moment'

export default {
  data() {
    return {
      news: [],
      title: '',
      text: '',
      date: [],
      img: null,
      isAuthenticated: false,
    };
  },
  async mounted() {
    this.isAuthenticated = this.checkAuthentication();

    axios.get("/api/news/").then(res => {
      this.news = res.data
    })
      .catch(error => {
        console.error(error);
      })
    setTimeout(() => {
      this.isAuthenticated = false;
      localStorage.removeItem('token');
    }, 60 * 60 * 1000);
  },

  components: {
    HeaderShort,
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY')
      }
    },

    checkAuthentication() {
      const token = localStorage.getItem('token');
      return !!token;
    },
    async deleteNews(id) {
      try {
        await axios.delete('/api/news', { data: { id } });
        const index = this.news.findIndex(news => news.id === id);
        if (index !== -1) {
          this.news.splice(index, 1);
        
        }
        alert('Новость успешно удалена')
      } catch (error) {
        console.error(error.message);
      }
    }
  },
};
</script>
<style lang="scss" scoped></style>