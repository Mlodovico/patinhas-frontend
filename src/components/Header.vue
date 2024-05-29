<script lang="ts">
import { defineComponent, reactive } from 'vue'

export const showLogInModal = reactive({ value: false })
export const showSignInModal = reactive({ value: false })
export const handleClickLogin = () => {
    showLogInModal.value = !showLogInModal.value
}

export const handleClickSignIn = () => {
    showSignInModal.value = !showSignInModal.value
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
                    <a href="#"
                        class="font-bold rounded-full bg-white text-red-600 px-4 py-2 transition-colors duration-1000 hover:bg-gray-400">
                        Login
                    </a>
                </li>
                <li>
                    <a href="#"
                        class="font-bold rounded-full bg-white text-red-600 px-4 py-2 transition-colors duration-1000 hover:bg-gray-400">
                        Cadastrar
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style></style>