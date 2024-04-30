<template>
    <div class="logInModal" @click="handleClickLogin">
        <div class="modal"></div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showLogInModal = ref(false)

const handleClickLogin = () => {
    showLogInModal.value = false
}
</script>

<style>
.logInModal {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
}

.modal {
    width: 70%;
    height: 70%;
    background: white;
    border-radius: 12px;
}
</style>