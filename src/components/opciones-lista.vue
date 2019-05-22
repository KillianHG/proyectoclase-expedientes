<template>
    <div>
    <table class="list-container">
        <tr class="options-list">
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="ListAlumnos">Lista de Alumno</v-btn>
                </div>
                <p>Descripcion</p>
            </td>
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="ListDemanda">Lista de Demandas</v-btn>
                </div>
                <p>Descripcion</p>
            </td>
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="Listintervenviones">lista de Intervenciones</v-btn>
                </div>
                <p>Descripcion</p>
            </td>
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="ListUser">Lista de Usuarios</v-btn>
                </div>
                <p>Descripcion</p>
            </td>
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="ListTutor()">Lista de Tutores</v-btn>
                </div>
                <p>Descripcion</p>
            </td>
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="ListCentros">Lista de Centros</v-btn>
                </div>
                <p>Descripcion</p>
            </td>
        </tr>
    </table>
    </div>
</template>

<script>
    export default {

        methods: {
            ListAlumnos(){
                this.$router.push('/alumnos')
            },
            ListDemanda(){
                this.$router.push('/demandas')
            },
            Listintervenviones(){
                this.$router.push('/intervenciones/')
            },
            ListUser(){
                this.$router.push('/usuarios')
            },
            ListTutor(){
                this.$router.push('/tutores/')
            },
            ListCentros(){
                this.$router.push('/centros/')
            }

        }
    }
</script>

<style lang="scss">

    // NO TOCAR!!!!!
    .list-container {
        display: flex;
        justify-content: center;
        margin-top: 3vw;

        .options-list {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 85%;

            .inner-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                p {
                    text-align: center;
                }

            }

            @media (min-width: 100px) and (max-width: 1176px) {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;

                .inner-item {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

</style>
