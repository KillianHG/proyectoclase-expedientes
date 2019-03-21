<template>
<NuevoCentros></NuevoCentros>
</template>

<script>

    import NuevoCentros from "./Centros/nuevo-centros";
    export default {
        name: "Home",
       components:{
           NuevoCentros,


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