<template>
    <div class="w-full h-full fixed top-0 left-0 bg-black/50 flex justify-center items-center"
        @click="handleClickLogin">
        <div class="bg-white rounded-lg">
            <div class="top-5 right-5 bg-black">
                <VIcon name="close" scale="1.5" />
            </div>
            <div class="p-20 text-red-600 font-bold flex flex-col">
                <h1 class="text-3xl text-center pb-5">Acessar sua conta</h1>
                <p class="font-bold">E-mail ou CPF</p>
                <input class="my-3 p-2 border-gray-500 border-2 rounded-md h-12" v-model="email"
                    placeholder="E-mail ou CPF">
                <p class="font-bold">Senha</p>
                <input class="my-3 p-2 border-gray-500 border-2 rounded-md h-12" v-model="password" type="password"
                    placeholder="Senha">
                <button
                    class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-800 transition-colors duration-1000"
                    @click="handleClickLogin">Entrar</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { showLogInModal } from './Header.vue'
import { ref } from 'vue'

const email = ref('');
const password = ref('');

const handleClickLogin = () => {
    console.log(email.value, password.value)
    showLogInModal.value = false
}
</script>

<style></style>