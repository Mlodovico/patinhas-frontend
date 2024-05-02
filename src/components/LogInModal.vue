<template>
    <div class="logInModal" @click="handleClickLogin">
        <div class="modal">
            <div class="close-button">
                <v-icon name="close" scale="1.5" />
            </div>
            <div class="form">
                <h1>Acessar sua conta</h1>
                <p>E-mail ou CPF</p>
                <input v-model="email" placeholder="E-mail ou CPF">
                <p>Senha</p>
                <input v-model="password" type="password" placeholder="Senha">
                <button @click="handleClickLogin">Entrar</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showLogInModal = ref(false)
const email = ref('');
const password = ref('');

const handleClickLogin = () => {
    console.log(email.value, password.value)
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

.close-button button {
    width: 100px;
    height: 30px;
    border-radius: 4px;
    color: black
}

.modal {
    background: white;
    border-radius: 12px;
    color: black;
}

.form {
    padding: 3rem;
}

.form p {
    margin-top: 15px;
}

.form input {
    width: 100%;
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
    margin-top: 15px;
    border-radius: 4px;
    border: 1px solid red;
    background: red;
    font-weight: 600;
        color: azure;
        font-size: 18px;
}
</style>