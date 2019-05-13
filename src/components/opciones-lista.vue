<template>
    <div>
    <table class="align">
        <tr>
            <td>
                <div>
                    <v-btn large color="primary" @click="ListAlumnos">Lista de Alumno</v-btn>
                </div>
            </td>
            <td>
                <div>
                    <v-btn large color="primary" @click="ListDemanda">Lista de Demandas</v-btn>
                </div>
            </td>
            <td>
                <div>
                    <v-btn large color="primary" @click="Listintervenviones">lista de Intervenciones</v-btn>
                </div>
            </td>
            <td>
                <div>
                    <v-btn large color="primary" @click="ListUser">Lista de Usuarios</v-btn>
                </div>
            </td>
            <td>
                <div>
                    <v-btn large color="primary" @click="ListTutor()">Lista de Tutores</v-btn>
                </div>
            </td>
            <td>
                <div>
                    <v-btn large color="primary" @click="ListCentros">Lista de Centros</v-btn>
                </div>
            </td>
        </tr>
        <tr>
            <td><p>descripciones</p></td>
            <td><p>descripciones</p></td>
            <td><p>descripciones</p></td>
            <td><p>descripciones</p></td>
            <td><p>descripciones</p></td>
            <td><p>descripciones</p></td>
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

<style scoped>

    .align{
        margin-left:auto;
        margin-right: auto;
        padding-top: 40px;
        text-align: center;

    }
</style>
