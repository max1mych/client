<template>
  <HeaderFull />
  <main class="d-flex flex-column min-vh-100">
    <div class="container d-flex flex-column mx-auto">
      <h1 class="m-5 mx-auto"><b>Авторизация</b></h1>
      <input v-model="LogAdmin" style="text-align:center" class="form-control text-bg-light mx-auto m-3"
        placeholder="Введите логин">
      <input v-model="password" style="text-align:center" type="password" class="form-control text-bg-light mx-auto m-3"
        placeholder="Введите пароль">
      <button @click.prevent="LoginAdmin()" type="button" class="btn btn-primary m-5 mx-auto py-3 px-5"
        style="font-weight: 400; font-size: 30px; line-height: 35px; display: flex; align-items: center; text-align: center; color: #FFFFFF; background: #F26A1B; border-radius: 30px;">ОТПРАВИТЬ
      </button>
      <p v-if="submitted && !isAuthenticated" style="color: red; margin-left: 10px;">Ошибка авторизации. Проверьте логин и пароль.</p>
    </div>
  </main>
</template>

<script>
import HeaderFull from '@/components/HeaderFull.vue'
import axios from 'axios';

export default {
  data() {
    return {
      LogAdmin: '',
      password: '',
      submitted: false,
      isAuthenticated: false
    }
  },
  components: {
    HeaderFull,
  },

  methods: {
    LoginAdmin() {
      const log = {
        LogAdmin: this.LogAdmin,
        password: this.password,
      };

      axios.post("http://localhost:5000/api/admin/login", log)
        .then(res => {
          // Обработка успешного ответа
          console.log(res.data);
          this.submitted = true; // Установка флага отправки формы
          localStorage.setItem('token', res.data.token);
          this.isAuthenticated = true;

          alert("Авторизация успешна")
          // Переход на страницу "/"
          this.$router.push('/');
        })
        .catch(error => {
          // Обработка ошибки
          console.error(error);
          this.submitted = true; // Установка флага отправки формы
          this.isAuthenticated = false;

        });
    }
  }
}
</script>

<style lang="scss" scoped></style>