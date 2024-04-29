<template>
    <div class="header">
        <div class="logo">
            <h1>Patinhas</h1>
        </div>
        <div class="buttons">
            <button>Cadastrar</button>
            <button>Logar</button>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.header {
    width: 100%;
    display: flex;
    align-items: center;
    background: #ec1f12;
    height: 4rem;
}

.logo {
    display: flex;
    justify-content: center;
    width: 100%;
}

.buttons {
    display: flex;
    justify-content: space-between;
    width: 20%;
    margin-right: 10px;
}

.buttons button {
    border: none;
    background: #ec1f12;
    color: white;
    font-weight: 600;
    cursor: pointer;
}

button:hover {
    opacity: 0.5;
    transition: 3s;
}
</style>