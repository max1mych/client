<template>
    <!--Шапка главная-->
    <header>
        <div class="container-fluid mx-auto p-0">
            <!--Кусок шапки декоративный-->
            <div class="container-fluid p-0 shapka">
                <div class="d-flex justify-content-between">
                    <router-link to="/" class="img-link justify-content-start p-3">
                        <!--ссылка именно на лого которое иконка вкладки в паблике, а не в папке TheHeader-->
                        <img src="@/assets/Header/logo.svg" class="img">
                    </router-link>
                    <div v-if="isAuthenticated" class="d-flex justify-content-end">
                        <button @click.prevent="Logout" type="button" class="btn btn-primary my-auto mx-1  p-3 "
                            style="font-weight: 400; font-size: 20px; line-height: 35px; display: flex; align-items: center; text-align: center; color: #FFFFFF; background: #F26A1B; border-radius: 30px;">
                            Выйти из сессии
                        </button>
                    </div>
                </div>  
            </div>
            <!--Кусок шапки функциональный: навигация-->
            <div class="container-fluid p-0">
                <nav class="navbar navbar-expand-xl justify-content-center py-4 navbar-dark p-0">
                    <!--сами разделы сайта-->

                    <ul class="navbar-nav justify-content-center mx-auto ">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link forhover p-1">Главная</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/Uslugi" class="nav-link forhover p-1">Услуги</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/AboutUs" class="nav-link forhover p-1">О нас</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/Gallery" class="nav-link forhover p-1">Галерея</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/Documents" class="nav-link forhover p-1">Документы</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/Contacts" class="nav-link forhover p-1">Контакты</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/News" class="nav-link forhover p-1">Новости</router-link>
                        </li>
                    </ul>

                </nav>
            </div>

        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isAuthenticated: false,
        }
    },
    async mounted() {
        this.isAuthenticated = this.checkAuthentication()
    },
    methods: {
        Logout() {
            this.isAuthenticated = false;
            localStorage.removeItem('token');
            alert('Сессия окончена')
        },
        checkAuthentication() {
            const token = localStorage.getItem('token');
            return !!token;
        },
    }
}

</script>
<style></style>