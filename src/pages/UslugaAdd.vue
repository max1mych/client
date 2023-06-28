<template>
  <HeaderShort />
  <main class="d-flex flex-column min-vh-100">
    <form class="container">
      <div class="container-fluid align-items-center mx-auto px-5 mb-5">
        <!--Услуга заголовок-->
        <div class="my-5 zagolovok d-flex justify-content-center justify-items-center" style="text-align: center;">
          <p>
            <b>
              <input class="align-middle " v-model="title"
                style="font-weight: 600; border-radius:30px; text-align: center; font-size: 40px; line-height: 35px; border:0px;"
                placeholder="Название услуги">
              <img src="../assets/nado/red.svg" alt="">
            </b>
          </p>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-xl-5 col-sm-12 m-3">
            <!--Описание услуги-->
            <div class="flex-column">
              <div class="usluga-description">
                <h2><b class="mx-2">Описание услуги</b></h2>
                <textarea class="p-2 text-bg-light rounded-4" style="min-width:100%; height:20em; border-radius: 30px;"
                  v-model="text" placeholder="Введите описание"></textarea>
              </div>
            </div>
            <!--Цена  услуги-->
            <div class="cost flex-column mt-3">
              <h2><b class="mx-2 ">Цена:</b></h2>
              <p>
                <span>
                  <input class="p-2 text-bg-light rounded-4" style="border-radius: 30px;" v-model="price"
                    placeholder="Введите стоимость">
                </span> руб/час
              </p>
              <p v-if="priceError" style="color: red;">Пожалуйста, введите цену только цифрами</p>
            </div>
          </div>
          <!--Картинка-->
          <div class="col-xl-5 col-sm-12 m-3">
            <div class="image-upload-wrapper">
              <div class="image-upload-icon">
                <div class="plus-icon">+</div>
                <input class="image-upload" @change="previewImage" accept="image/*" type="file" id="formFile">
                <div class="image-upload-cross"></div>
              </div>
              <p class="image-upload-text" v-if="!imgUrl">Добавить фото</p>
              <div class="image-preview d-flex justify-content-center" v-if="imgUrl">
                <img class="preview" :src="imgUrl" alt="Preview Image">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--кнопка-->
      <button v-if="isAuthenticated" @click="createUsluga" type="button"
        class="btn btn-primary my-5 px-5 py-3 mx-auto"
        style="background: #F26A1B; border-radius:100px; font-weight: 800; font-size: 40px; line-height: 33px; display: flex; align-items: center; text-align: center; color: #FFFFFF;">
        Сохранить услугу
      </button>
    </form>
  </main>
</template>
<script>
import HeaderShort from '@/components/HeaderShort.vue';
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      text: '',
      price: '',
      img: null,
      imgUrl: null,
      isAuthenticated: false,
      priceError: false,
    };
  },
  components: {
    HeaderShort
  },

  async mounted() {
    this.isAuthenticated = this.checkAuthentication();

    axios.get("/api/service/").then(res => {
      this.uslugi = res.data
    })
      .catch(error => {
        console.error(error);
      })
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
    createUsluga() {
      if (this.validatePrice(this.price) && this.validateImage(this.img)) {
        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('text', this.text);
        formData.append('price', this.price);
        formData.append('img', this.img);

        axios.post('http://localhost:5000/api/service', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(res => {
            console.log(res.data);
            // Перенаправление на страницу "/Uslugi"
            alert('Услуга успешно добавлена')
            this.$router.push('/Uslugi');
          })
          .catch(error => {
            console.error(error);
            alert('Ваши данные не соответствуют шаблонам, попробуйте снова')
          });
      }
    },
    previewImage(event) {
      const file = event.target.files[0];
      this.img = file;
      this.imgUrl = URL.createObjectURL(file);
    },
    validatePrice(price) {
      const regex = /^\d+$/;
      if (!regex.test(price)) {
        this.priceError = true;
        return false;
      } else {
        this.priceError = false;
        return true;
      }
    },
    validateImage(image) {
      if (!image || !image.type.startsWith('image/')) {
        alert('Файл неверного формата, пожалуйста выберите файл формата - JPEG, PNG и других, относящихся к картинкам');
        return false;
      }
      return true;
    },
  }
};
</script>

<style>
.image-upload-wrapper {
  position: relative;
  width: 700px;
  height: 700px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.image-upload-icon {
  position: relative;
  width: 120px;
  height: 120px;
  background-color: transparent; 
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow: hidden;
}

.plus-icon {
  width: 100px;
  height: 100px;
  background-color: rgba(241, 241, 241, 0.65);
  border-radius: 50%;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  font-size: 90px;
  border: 4px solid #000000;
}

.image-upload {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

.image-upload-text {
  margin-top: 4px;
  font-size: 36px;
  color: #000000;
}

.image-preview {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview {
  max-width: 100%;
  max-height: 100%;
}
.image-upload-cross {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 4px;
  background-color: #000000;
  opacity: 0.5;
}
</style>