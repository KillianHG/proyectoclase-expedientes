<template>
    <div >
    <table class="list-container">
        <tr class="options-list">
            <td class="inner-item">
                <div>
                <v-btn  color="primary" @click="newAlumnos">Dar Alta Alumno</v-btn>
                </div>
                <p>Descripciones</p>
            </td>
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="newDemanda">Crear Nueva Demanda</v-btn>
                </div>
                <p>Descripciones</p>

            </td>
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="newintervenviones">Nueva Intervencion</v-btn>
                </div>
                <p>Descripciones</p>

            </td>
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="newUser">Dar Alta Usuario</v-btn>
                </div>
                <p>Descripciones</p>

            </td>
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="newTutor">Agregar Tutor Alumno</v-btn>
                </div>
                <p>Descripciones</p>

            </td>
            <td class="inner-item">
                <div>
                    <v-btn  color="primary" @click="newCentro">Agregar Centro</v-btn>
                </div>
                <p>Descripciones</p>

            </td>
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
