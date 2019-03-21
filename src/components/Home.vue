<template>
<ValidarUsuario></ValidarUsuario>
</template>

<script>


    import ValidarUsuario from "./Usuarios/validar-usuario";
    export default {
        name: "Home",
       components:{
           ValidarUsuario



       }

    }
</script>

<style scoped>
    h1{
        color:blue;


    }
    h3{
        text-decoration: underline;
        padding-top: 10px;

    }

</style>