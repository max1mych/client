<template>
  <HeaderShort />
  <main>
    <div class="container-fluid align-items-center mx-auto m-5 createnovost" style="max-width: 45em;">
      <!--Создание новости заголовок страницы-->
      <div class="my-5 d-flex justify-content-center" style="text-align: center;">
        <h1><b>Создание новости</b></h1>
      </div>

      <!--название заголовка новости ввести-->
      <div class="m-5">
        <p><b><input class="p-3 form-control text-bg-light " v-bind:value="title" @input="title = $event.target.value"
              placeholder="Введите название заголовка" style="border-radius:30px;"></b></p>
      </div>

      <!--описание новости внести-->
      <div class="m-5">
        <textarea class="p-3 form-control text-bg-light" style="min-height:20em; border-radius: 30px;" v-bind:value="text"
          @input="text = $event.target.value" placeholder="Введите описание новости"></textarea>
      </div>

      <!--добавить картиночку-->
      <!--Картинка-->
      <div class="m-5">
        <div>
          <input class="form-control text-bg-light" style="overflow:hidden" @change="previewImage" accept="image/*" type="file" id="formFile">
        </div>

      </div>

      <div class="d-flex justify-content-end m-5">
        <button v-if="isAuthenticated" @click.prevent="CreateNews" type="button" class="btn btn-primary p-3 "
          style="background: #F26A1B; border-radius:100px; font-weight: 800; font-size: 30px; line-height: 33px; display: flex; align-items: center; text-align: center; color: #FFFFFF;">
          Сохранить новость
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderShort from '@/components/HeaderShort.vue'
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      text: '',
      img: '',
      isAuthenticated: false,
    }
  },

  components: {
    HeaderShort
  },


  async mounted() {
    this.isAuthenticated = this.checkAuthentication();

    setTimeout(() => {
      this.isAuthenticated = false; // Авторизация автоматически становится false
      localStorage.removeItem("token"); // Удаляем токен из локального хранилища
    }, 60 * 60 * 1000); // 1 час = 60 минут * 60 секунд * 1000 миллисекунд

  },

  methods: {
    checkAuthentication() {
      const token = localStorage.getItem("token");
      return !!token;
    },
    CreateNews() {
      if (this.validateImage(this.img)) {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('text', this.text);
      formData.append('img', this.img);

      axios.post('/api/news', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
          console.log(res.data);
          // Перенаправление на страницу "/News"
          alert('Новость добавлена')
          this.$router.push('/News');
        })
        .catch(error => {
          console.error(error);
          alert('Ваши данные не соответствуют шаблонам, попробуйте снова')
        });
    }}
    ,

    previewImage(event) {
      const file = event.target.files[0];
      this.img = file;
    },
    validateImage(image) {
      if (!image || !image.type.startsWith('image/')) {
        alert('Файл неверного формата, пожалуйста выберите файл формата - JPEG, PNG и других, относящихся к картинкам');
        return false;
      }
      return true;
    },
  }
}
</script>