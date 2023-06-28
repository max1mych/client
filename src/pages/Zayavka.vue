<template>
  <HeaderFull />

  <!-- Контент -->
  <main class="d-flex flex-column min-vh-100">
    <div class="d-flex justify-content-center align-items-center flex-column ">

      <p class="pt-4"
        style="font-weight: 900; font-size: 40px; line-height: 47px; display: flex; align-items: center; text-align: center; color: #000000;">
        Оставить заявку
      </p>
      <div class="container mx-auto w-75 mt-4" style="background: rgba(242, 106, 27, 0.9);
                  border-radius: 30px;">

        <!-- формы -->
        <div class="mt-5">
          <input class="form-control form-control mx-auto mt-4 w-75 rounded-2" type="text" @keypress="handleNameInput" placeholder="Ваше ФИО" v-model="FIO"
            aria-label=".form-control-sm" name="FIO">
          <input class="form-control form-control mx-auto mt-4 w-75 rounded-2" type="text" @keypress="handlePhoneInput" placeholder="Номер телефона"
            v-model="Tel" aria-label=".form-control-sm">
          <input class="form-control form-control mx-auto mt-4 w-75 rounded-2" type="text" @input="validateEmail" placeholder="Электронная почта"
            v-model="email" aria-label=".form-control-sm">
          <select class="form-select form-select mx-auto mt-4 p-2 w-75 rounded-2" style="border-radius:30px" v-model="id_service"
            aria-label="Small select">
            <option style="border-radius:30px; font-" disabled selected>Выберите услугу</option>
            <option style="border-radius:30px" v-for="service in services" :value="service.id" :key="service.id">{{
              service.title }}</option>
          </select>

          <!-- кнопка отправки -->
          <div class="pt-4 pb-4 d-flex justify-content-center">
            <button type="button" class="btn btn-primary"
              style="font-weight: 800; font-size: 30px; line-height: 35px; display: flex; align-items: center; text-align: center; color: #FFFFFF; background: #0D0D0D; border-radius: 6px;"
              @click="handleSubmit">ОТПРАВИТЬ
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import HeaderFull from '@/components/HeaderFull.vue';
import axios from 'axios';

export default {
  data() {
    return {
      FIO: "",
      Tel: "",
      email: "",
      id_service: null, // Изменено на null, чтобы выбор начинался с пустого значения
      submitted: false,
      services: [],

      FIOerror: false,
      PhoneNumError: false,

    };
  },
  components: {
    HeaderFull
  },

  mounted() {
    this.loadServices();
  },

  methods: {

    loadServices() {
      axios.get('/api/service/')
        .then(response => {
          this.services = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },

    handleNameInput(event) {
  const inputChar = event.key;

  if (/\d/.test(inputChar)) {
    event.preventDefault();
  }
},
    handlePhoneInput(event) {
  const allowedCharacters = /[0-9()+-]/;
  const inputChar = event.key;

  if (!allowedCharacters.test(inputChar)) {
    event.preventDefault();
  }
},
validateEmail() {
const regex = /^[a-zA-Z0-9@._-]+$/;
if (!regex.test(this.email)) {
this.email = this.email.replace(/[^a-zA-Z0-9@._-]+/g, '');
}
},
handleSubmit() {
  if (!this.FIO || !this.Tel || !this.email || !this.id_service) {
    alert('Пожалуйста, заполните все поля');
    return;
  }

  const zayavki = {
    FIO: this.FIO,
    Tel: this.Tel,
    email: this.email,
    id_service: this.id_service
  };

  axios.post("http://localhost:5000/api/zayavki", zayavki)
    .then(res => {
      // Обработка успешного ответа
      console.log(res.data);
      this.submitted = true; // Установка флага отправки формы
      alert('Заявка успешно отправлена')
    })
    .catch(error => {
      // Обработка ошибки
      console.error(error);
      alert('Неправильно введены данные')
    });
}

  }
}
</script>

<style lang="scss" scoped></style>