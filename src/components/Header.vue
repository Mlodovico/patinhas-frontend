<script lang="ts">
import { reactive } from 'vue'

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
                <li class="rounded-full bg-white text-red-600 px-4 py-2">
                    <a href="#" class="font-bold">
                        Login
                    </a>
                </li>
                <li class="rounded-full bg-white text-red-600 px-4 py-2">
                    <a href="#" class="font-bold">
                        Cadastrar
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>
<style></style>