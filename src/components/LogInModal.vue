<template>
    <div class="logInModal">
        <div class="modal"></div>
    </div>
</template>

<script>
export default {
    name: 'LogInModal',
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