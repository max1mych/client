<template>
<HeaderShort />
<main class="d-flex flex-column min-vh-100">
<div class="d-flex justify-content-center m-5" style="text-align: center;">
<h1><b>Галерея</b></h1>
</div>
<div class="container-fluid d-flex m-5 justify-content-center mx-auto">
<div class="gallery">
<button @click="previousImage" class="gallery-control-prev">‹</button>
<div class="image-container" v-if="currentImage">
<img :src="getImageUrl(currentImage)" alt="" class="novost-img img-fluid">
<button @click="deleteImage(currentImage.id)" v-if="isAuthenticated" class="btn btn-link mx-1 my-auto delete-button">
<img src="../assets/nado/delete.svg" alt="" width="40" />
</button>
</div>
<button @click="nextImage" class="gallery-control-next">›</button>
</div>
</div>
<div v-if="isAuthenticated" class="container-fluid align-items-center mx-auto px-5 mb-5 image-form">
<div class="m-5">
<div>
<div class="container mx-auto mb-3 mt-5">
<input class="form-control w-100 mx-auto" @change="previewImage" accept="image/*" type="file" id="formFile">
</div>
</div>
</div>
<button type="button" class="btn btn-primary my-5 px-5 py-3 mx-auto"
style="background: #F26A1B; border-radius:100px; font-weight: 800; font-size: 40px; line-height: 33px; display: flex; align-items: center; text-align: center; color: #FFFFFF;"
@click="submitImage">
Сохранить
</button>
</div>
</main>
</template>

<script>
import HeaderShort from '@/components/HeaderShort.vue'
import axios from 'axios';

export default {
data() {
return {
images: [],
currentIndex: 0,
img: null,
isAuthenticated: false,
};
},
components: {
HeaderShort
},
async mounted() {
this.isAuthenticated = this.checkAuthentication();

try {
const response = await axios.get('/api/photo');
this.images = response.data;
} catch (error) {
console.error(error);
}

setTimeout(() => {
this.isAuthenticated = false; // Авторизация автоматически становится false
localStorage.removeItem("token"); // Удаляем токен из локального хранилища
}, 60 * 60 * 1000); // 1 час = 60 минут * 60 секунд * 1000 миллисекунд
},

computed: {
currentImage() {
return this.images[this.currentIndex];
}
},

methods: {
checkAuthentication() {
const token = localStorage.getItem("token");
return !!token;
},

nextImage() {
this.currentIndex = (this.currentIndex + 1) % this.images.length;
},
previousImage() {
this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
},
submitImage() {
if (this.img && this.validateImage(this.img)) {
const formData = new FormData();
formData.append('img', this.img);

axios.post('/api/photo', formData, {
headers: {
'Content-Type': 'multipart/form-data'
}
})
.then(res => {
console.log(res.data);
this.images.push(res.data);
this.img = null;
alert("Фотография добавлена");
})
.catch(error => {
console.error(error);
});
}
},
previewImage(event) {
const file = event.target.files[0];
this.img = file;
},
getImageUrl(image) {
if (image && image.img) {
return axios.defaults.baseURL + image.img;
}
return '';
},
validateImage(image) {
if (!image || !image.type.startsWith('image/')) {
alert('Файл неверного формата, пожалуйста выберите файл формата - JPEG, PNG, GIF и других, относящихся к картинкам');
return false;
}
return true;
},
async deleteImage(id) {
try {
const response = await axios.delete('/api/photo', { data: { id } });

if (response.status === 200) {
const index = this.images.findIndex((image) => image.id === id);
if (index !== -1) {
this.images.splice(index, 1);
alert('Запись успешно удалена');
}
} else {
alert('Ошибка удаления записи');
}
} catch (error) {
console.error('Ошибка удаления записи:', error.message);
alert('Произошла ошибка при удалении записи');
}
}
}
}
</script>

<style>
.gallery {
display: flex;
align-items: center;
justify-content: center;
text-align: center;
}

.gallery img {
width: 30em;
height: 20em;
}

.gallery-control-prev,
.gallery-control-next {
margin: 0 0.5rem;
font-size: 5rem;
background-color: transparent;
border: none;
outline: none;
color: inherit;
}
.delete-button {
border: none;
background-color: transparent;
}

.image-form {
margin-top: 2rem;
text-align: center;
}

.image-container {
position: relative;
display: inline-block;
}

.delete-button {
position: absolute;
top: 0;
right: 0;
margin: 0.5rem;
width: 80px;
height: 80px;
outline: none;
cursor: pointer;
}

.delete-button img {
width: 100%;
height: 100%;
}
</style>