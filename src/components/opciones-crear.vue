<template>
    <div >
    <table class="align">
        <tr>
            <td>
                <div>
                <v-btn large color="primary" @click="newAlumnos">Dar Alta Alumno</v-btn>
                </div>
            </td>
            <td>
                <div>
                    <v-btn large color="primary" @click="newDemanda">Crear Nueva Demanda</v-btn>
                </div>
            </td>
            <td>
                <div>
                    <v-btn large color="primary" @click="newintervenviones">Nueva Intervencion</v-btn>
                </div>
            </td>
            <td>
                <div>
                    <v-btn large color="primary" @click="newUser">Dar Alta Usuario</v-btn>
                </div>
            </td>
            <td>
                <div>
                    <v-btn large color="primary" @click="newTutor">Agregar Tutor Alumno</v-btn>
                </div>
            </td>
            <td>
                <div>
                    <v-btn large color="primary" @click="newCentro">Agregar Centro</v-btn>
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
            newAlumnos(){
                this.$router.push('alumnos/nuevo')
            },
            newDemanda(){
                this.$router.push('/demandas/nuevo')
            },
            newintervenviones(){
                this.$router.push('/intervenciones/nuevo')
            },
            newUser(){
                this.$router.push('/usuario/nuevo')
            },
            newTutor(){
                this.$router.push('/tutores/nuevo')
            },
            newCentro(){
                this.$router.push('/centros/nuevo')
            }

        }
    }

</script>

<style scoped>

    .align{
        margin-left:auto;
        margin-right: auto;
        padding:40px;
        text-align: center;
    }

    h1 {
        color: #5887bc;


    }

    h3 {
        text-decoration: underline;
        padding-top: 10px;

    }

</style>
