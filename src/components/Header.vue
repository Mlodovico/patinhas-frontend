<script setup lang="ts">
import { ref } from 'vue'

import LogInModal from '../components/LogInModal.vue';
import RegisterModal from '../components/RegisterModal.vue';


const isLoginModalVisible = ref(false)
const isRegisterModalVisible = ref(false)

const handleClickLogin = () => {
    isLoginModalVisible.value = true;
}

const handleClickSignIn = () => {
    isRegisterModalVisible.value = true
}

const handleLoginModalClose = () => {
    isLoginModalVisible.value = false;
}

const handleRegisterModalClose = () => {
    isRegisterModalVisible.value = false;
}

</script>
<template>
    <header class="bg-red-600 p-4 text-white flex justify-between items-center">
        <div class="flex items-center">
            <!-- <img src="@/assets" alt="Logo" class="h-8 mr-3"> -->
            <h1 class="text-xl font-bold">Patinhas</h1>
        </div>
        <nav>
            <ul class="flex space-x-4">
                <li>
                    <button @click="handleClickLogin"
                        class="font-bold rounded-full bg-white text-red-600 px-4 py-2 transition-colors duration-1000 hover:bg-gray-400">
                        Login
                    </button>
                </li>
                <li>
                    <button @click="handleClickSignIn"
                        class="font-bold rounded-full bg-white text-red-600 px-4 py-2 transition-colors duration-1000 hover:bg-gray-400">
                        Cadastrar
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    <LogInModal :isVisible="isLoginModalVisible" @close="handleLoginModalClose" />
    <RegisterModal :isVisible="isRegisterModalVisible" @close="handleRegisterModalClose" />
</template>
<style></style>