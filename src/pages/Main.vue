<template>

  <HeaderFull/>
  <!--Контент-->
  <main class="d-flex flex-column min-vh-100">
    <div class="">
      <!--кусок с машинкой и фоном-->
      <div class="container-fluid mx-auto p-0">
        <div class="container-fluid p-0 index_block1">

          <div class="row d-flex justify-content-center my-auto pb-1 pt-5 mx-3">
            <!--пустая колонка для красоты 1-->
            <div class="col-xl col-sm-0"></div>
            <!--крутой текст-->
            <div class="col-xl-5 col-sm-12 pt-5 mt-5">
              <p class="px-4 py-4 index_block_text">
                ОХРАННОЕ АГЕНСТВО "ИРКУТ" - ЭТО ВСЕ ВИДЫ ОХРАННЫХ УСЛУГ И ОБЕСПЕЧЕНИЯ БЕЗОПАСНОСТИ.
              </p>
            </div>
            <!--пустая колонка для красоты 1-->
            <div class="col-xl-1 col-sm-0 mx-5">

            </div>
            <!--заявочку оставляем тут!!!-->
            <div class="col-xl-4 col-sm-12 pt-3 mx-2">
              <div class="container mx-auto" style="background: rgba(242, 106, 27, 0.9); border-radius: 30px;">

                <p class="pt-4" style="font-family: 'Roboto'; font-style: normal; font-weight: 800; font-size: 30px; line-height: 35px; text-align: center;">
                  ОСТАВЬТЕ ЗАЯВКУ
                </p>
                <!--формы-->
                <input v-model="FIO" class="form-control text-bg-light form-control-sm mx-auto mt-3 w-75 rounded-2" type="text"
                  placeholder="Ваше ФИО" @keypress="handleNameInput" aria-label=".form-control-sm">
                <input v-model="Tel" class="form-control text-bg-light form-control-sm mx-auto mt-3 w-75 rounded-2" type="text"
                  placeholder="Номер телефона" @keypress="handlePhoneInput" aria-label=".form-control-sm ">
                <input v-model="email" class="form-control text-bg-light form-control-sm mx-auto mt-3 w-75 rounded-2" type="text"
                  placeholder="Электронная почта" aria-label=".form-control-sm " @input="validateEmail">
                  <select class="form-control text-bg-light form-control-sm mx-auto mt-3 w-75 rounded-2" v-model="id_service" aria-label="Small select">
            <option disabled selected>Выберите услугу</option>
            <option v-for="service in services" :value="service.id" :key="service.id">{{ service.title }}</option>
          </select>
                <!--кнопка отправки-->
                <div class="pt-4 pb-4 d-flex justify-content-center">
                  <button @click="handleSubmit" type="button" class="btn btn-primary p-3"
                    style="font-weight: 800; font-size: 30px; line-height: 23px; display: flex; align-items: center; text-align: center; color: #FFFFFF; background: #0D0D0D;">Отправить</button>
                </div>
              </div>
            </div>
          </div>

          <div class="row ">
            <div class="col-xl-3 col-sm-0"></div>
            <div class="col-xl-6 col-sm-12">
              <div class="d-flex mx-auto justify-content-center">
                <img src="../assets/Main/bibika.png" alt="" class="img-fluid" style="z-index: 1;">
              </div>

            </div>
            <div class="col-xl-3 col-sm-0"></div>
          </div>

        </div>
      </div>

      <!--кусок с шариками-->
      <div class="container-fluid mx-auto pt-5 p-0 mb-5 pb-5 " >

        <p class="mt-5 pt-5 pb-4 justify-content-center"
          style="font-weight: 900; font-size: 40px; line-height: 47px; display: flex; align-items: center; text-align: center; color: #000000;">
          НАША ДЕЯТЕЛЬНОСТЬ
        </p>

        <div class="row mx-auto align-items-start"
          style="font-weight: 200; font-size: 30px;line-height: 35px;display: flex;align-items: center;text-align: center;color: #000000;">

                        <div class="col-xl-3 col-md-6 col-sm-12">
                <div class="d-flex flex-column">
                  <div class="image-wrapper">
                    <router-link to="/Uslugi">
                      <img src="../assets/Main/пульт.png" alt="" class="image" />
                      <div class="overlay"></div>
                      <div class="caption">УЗНАТЬ БОЛЬШЕ</div>
                    </router-link>
                  </div>
                  <div class="mt-3">
                    <b>Пультовая охрана</b>
                  </div>
                  <div class="mt-3">
                    <p>Комплекс мер по защите объектов недвижимости от проникновения, нападения, пожара и т.д.</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-md-6 col-sm-12">
                <div class="d-flex flex-column">
                  <div class="image-wrapper">
                    <router-link to="/Uslugi">
                      <img src="../assets/Main/охр.png" alt="" class="image" />
                      <div class="overlay"></div>
                      <div class="caption">УЗНАТЬ БОЛЬШЕ</div>
                    </router-link>
                  </div>
                  <div class="mt-3">
                    <b>Физическая охрана</b>
                  </div>
                  <div class="mt-3">
                    <p>Меры безопасности по сохранности материального имущества, защиты жизни и здоровья его персонала.</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-md-6 col-sm-12">
                <div class="d-flex flex-column">
                  <div class="image-wrapper">
                    <router-link to="/Uslugi">
                      <img src="../assets/Main/сопровож.png" alt="" class="image" />
                      <div class="overlay"></div>
                      <div class="caption">УЗНАТЬ БОЛЬШЕ</div>
                    </router-link>
                  </div>
                  <div class="mt-3">
                    <b>Сопровождение грузов</b>
                  </div>
                  <div class="mt-3">
                    <p>Обеспечение сохранности грузов при перевозке.</p>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-md-6 col-sm-12">
                <div class="d-flex flex-column">
                  <div class="image-wrapper">
                    <router-link to="/Uslugi">
                      <img src="../assets/Main/консалт.png" alt="" class="image" />
                      <div class="overlay"></div>
                      <div class="caption">УЗНАТЬ БОЛЬШЕ</div>
                    </router-link>
                  </div>
                  <div class="mt-3">
                    <b>Консультирование</b>
                  </div>
                  <div class="mt-3">
                    <p>Бесплатное консультирование по вопросам безопасности.</p>
                  </div>
                </div>
              </div>
                      </div>
        </div>
    </div>


  </main>
</template>

<script>
import HeaderFull from '@/components/HeaderFull.vue'
import axios from 'axios';

export default {
  data() {
    return {
      FIO: '',
      PhoneNum: '',
      email: '',
      UslugaId: '',
      submitted: false,
      services: [],
    }
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

<style>
  .image-wrapper {
    position: relative;
    display: inline-block;
  }

  .image {
    display: block;
    width: 100%;
    height: auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(255, 115, 0);
    opacity: 0;
    border-radius: 50%;
    transition: opacity 0.3s ease;
  }

  .caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: bold;
    color: white;
    font-size: 24px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .image-wrapper:hover .overlay {
    opacity: 0.5;
  }

  .image-wrapper:hover .caption {
    opacity: 1;
  }
</style>