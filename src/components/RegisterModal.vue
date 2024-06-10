<template>
    <div v-if="isVisible" class="w-full h-full fixed top-0 left-0 bg-black/50 flex justify-center items-center"
        @click="handleClickLogin">
        <div class="bg-white rounded-lg">
            <div class="flex p-5 top-5 right-5 w-full justify-end h-8">
                <button @click="handleClickClose" class="text-red-600">
                    <v-icon name="io-close-circle-sharp" class="text-red-600" scale="1.5" />
                </button>
            </div>
            <div class="px-20 py-10 text-red-600 font-bold flex flex-col">
                <h1 class="text-3xl text-center pb-5">Cadastre sua conta</h1>
                <p class="font-bold">CPF</p>
                <input class="my-3 p-2 border-gray-500 border-2 rounded-md h-12" type="number"
                    placeholder="Digite seu CPF">
                <p class="font-bold">E-mail</p>
                <input class="my-3 p-2 border-gray-500 border-2 rounded-md h-12" v-model="email"
                    placeholder="Digite seu E-mail">
                <p class="font-bold">Nova senha</p>
                <input class="my-3 p-2 border-gray-500 border-2 rounded-md h-12" v-model="password" type="password"
                    placeholder="Digite sua nova senha">
                <p class="font-bold">Nova senha novamente</p>
                <input class="my-3 p-2 border-gray-500 border-2 rounded-md h-12" v-model="passwordAgain" type="password"
                    placeholder="Digite sua nova senha novamente">
                <button
                    class="bg-red-600 text-white px-4 py-2 mt-5 rounded-md hover:bg-red-800 transition-colors duration-1000"
                    @click="handleClickRegister">Entrar</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

const emit = defineEmits(['close']);
const props = defineProps<{
    isVisible: boolean
}>();

const email = ref('');
const password = ref('');
const passwordAgain = ref('');
const handleClickRegister = () => {
    if (password.value === passwordAgain.value) {
        console.log("DEU BOM")
    }
    console.log(email.value, password.value)
}

const handleClickClose = () => {
    emit('close');
}

</script>

<style></style>