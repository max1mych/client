<template>
  <HeaderShort />

  <!-- Главный контент -->
  <main class="d-flex flex-column min-vh-100">
    <div>
      <div class="d-flex justify-content-center align-content-center">
        <div>
          <h1 class="my-5" style="text-align: center">
            <b>Услуги</b>
            <router-link v-if="isAuthenticated" to="/Uslugi/Add">
              <img src="../assets/nado/add.svg" alt="" height="35" />
            </router-link>
          </h1>
        </div>
      </div>
    </div>
    <!-- Список услуг -->
    <div v-for="usluga in uslugi" :key="usluga.id">
      <div class="container usluga " @click="openUsluga(usluga.id)" @mouseover="highlightUsluga(usluga.id)"
        @mouseout="removeHighlightUsluga" :class="{ 'highlighted-usluga': highlightedUslugaId === usluga.id }">
        <div class="row">
          <!-- Левая половина - текст -->
          <div class="col-xl-6 col-lg-12 px-5 usluga-col text-col" @mouseover="highlightUsluga(usluga.id)"
            @mouseout="removeHighlightUsluga" :class="{ 'highlighted-usluga': highlightedUslugaId === usluga.id }">
            <div class="row container-fluid p-0">
              <div class="row container-fluid p-0">
                <div class="col-2">
                  <!-- Кнопка удаления -->
                  <button
v-if="isAuthenticated"
name="id"
class="btn btn-link mx-1 my-auto"
@click.stop="deleteUslugi(usluga.id)"
>
<p><img src="../assets/nado/delete.svg" alt="" width="40" /></p>
</button>
                </div>
                <div class="col-10">
                  <!-- Заголовок услуги -->
                  <h4 class="zagolovok mt-5 my-auto"><b>{{ usluga.title }}</b></h4>
                </div>
              </div>

              <div class="col-2"></div>
              <div class="col-10">
                <!-- Содержимое услуги -->
                <p class="truncate ">{{ usluga.text }}</p>
              </div>
            </div>
          </div>

          <!-- Правая половина - картинка -->
          <div class="col-xl-6 col-lg-12 p-0 usluga-col">
            <router-link :to="'/Uslugi/' + usluga.id">
              <div class="container p-0">
                <div class="aspect-ratio-container" @mouseover="highlightUsluga(usluga.id)"
                  @mouseout="removeHighlightUsluga" :class="{ 'highlighted-usluga': highlightedUslugaId === usluga.id }">
                  <img :src="'axios.defaults.baseURL' + usluga.img" alt="" class="usluga-img img-fluid image-fit" />
                  <div class="highlight-overlay"></div>
                  <div class="caption">ПОДРОБНЕЕ</div>
                </div>
              </div>
            </router-link>
          </div>
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
      uslugi: [],
      isAuthenticated: false,
      highlightedUslugaId: null,
    };
  },
  async mounted() {
    this.isAuthenticated = this.checkAuthentication();

    axios
      .get('/api/service/')
      .then((res) => {
        this.uslugi = res.data;
      })
      .catch((error) => {
        console.error(error);
      });

    setTimeout(() => {
      this.isAuthenticated = false;
      localStorage.removeItem('token');
    }, 60 * 60 * 1000);
  },
  components: {
    HeaderShort,
  },
  methods: {
    checkAuthentication() {
      const token = localStorage.getItem('token');
      return !!token;
    },
    deleteUslugi(id) {
      axios
        .delete('http://localhost:5000/api/service', { data: { id } })
        .then(() => {
          const index = this.uslugi.findIndex((usluga) => usluga.id === id);
          if (index !== -1) {
            this.uslugi.splice(index, 1);
            alert('Услуга успешно удалена');
          }
        })
        .catch((error) => {
          console.error(error.message);
        });
    },
    highlightUsluga(id) {
      this.highlightedUslugaId = id;
    },
    removeHighlightUsluga() {
      this.highlightedUslugaId = null;
    },
    openUsluga(id) {
      this.$router.push('/Uslugi/' + id);
    },
  },
};
</script>

<style lang="scss" scoped>
/* ... предыдущий стиль ... */
.truncate {
  display: -moz-box;
  -moz-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-clamp: 3;
  box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}

.highlighted-usluga {
  background-color: rgba(255, 115, 3, 0.35);
}

.aspect-ratio-container {
  position: relative;
  width: 100%;
  padding-bottom: 75%;
  /* Set the aspect ratio here (e.g., 75% for 4:3) */
}

.usluga-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  color: white;
  font-size: 36px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.aspect-ratio-container:hover .caption {
  opacity: 1;
}

.highlight-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 115, 3, 0.35);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.highlighted-usluga .highlight-overlay {
  opacity: 1;
}
</style>