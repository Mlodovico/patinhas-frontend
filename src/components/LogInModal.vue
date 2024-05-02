<template>
    <div class="logInModal" @click="handleClickLogin">
        <div class="modal">
            <div class="close-button">
                <p>Fechar</p>
            </div>
            <div class="form">
                <h1>Acessar sua conta</h1>
                <p>E-mail ou CPF</p>
                <input type="text">
                <p>Senha</p>
                <input type="password">
                <button>Entrar</button>
            </div>
        </div>
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
    left: 0;
    background: rgba(0, 0, 0, 0.5);
}

.close-button {
    display: flex;
    justify-content: flex-end;
    margin: 10px;
}

.modal {
    background: white;
    border-radius: 12px;
    color: black;
}

.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5rem;
}

.form input {
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid gray;
    padding: 8px;
}

.form button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    border-radius: 4px;
    border: 1px solid red;
    background: red;
}
</style>