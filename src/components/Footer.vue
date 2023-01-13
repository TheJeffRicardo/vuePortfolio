<template>
    <div class="foot">
        <pre>Copyright &copy; 2022 by KonkeJeff RicardoMalindi
            All Rights Reserved
        </pre>
        <a href="https://github.com/TheJeffRicardo?tab=repositories"><i class="bi bi-github text-dark"></i></a>
        <a href="https://www.linkedin.com/messaging/thread/new/"><i class="bi bi-linkedin text-dark"></i></a>
        <a href="https://discord.com/channels/@me"><i class="bi bi-discord text-dark"></i></a>
    </div>
</template>
<script>
export default {
    name: 'footer'
}
</script>
<style scoped>
pre {
    font-family: 'Fredoka One';
    text-align: center;
    font-size: 15px;
    overflow-y: hidden;
}
.foot i{
    padding: 10px;
    font-size: 20px;
    box-shadow: 0 0 20px 10px rgba(0,0,0,0.05);
    border-radius: 50%;
    transition: 0.3s;
}
.foot i:hover{
    background-color: aliceblue;
}
</style>