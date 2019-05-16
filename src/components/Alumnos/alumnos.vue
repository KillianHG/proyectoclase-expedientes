<template>
    <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
            <div>
            <v-btn large color="primary"
                   @click="newAlumno">Nuevo Alumno</v-btn>
        </div>
            <v-card>
                <v-list two-line>
                    <div class="grey lighten-5" >
                        <v-subheader>LISTA DE ALUMNOS</v-subheader>
                        <v-divider divider></v-divider>
                    </div>
                    <template v-for="(item, index) in items">
                        <v-list-tile
                                :key="item.dni"
                                avatar
                                ripple
                                @click="loadAlumno(item.dni)"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.nombre }} {{ item.apellidos }}</v-list-tile-title>

                                <v-list-tile-sub-title>{{ item.id_centro }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ item.dni }}</v-list-tile-action-text>
                            </v-list-tile-action>

                        </v-list-tile>
                        <v-divider
                                v-if="index + 1 < items.length"
                                :key="index"
                        ></v-divider>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
</template>
<script>

    import axios from 'axios';
    import constantes from '@/const.js';

    export default {
        data () {
            return {
                selected: [],
                items: null
            }
        },
        mounted() {
            axios.get(constantes.path + 'alumnos')
                .then(response => this.items = response.data)
        },
        methods: {
            loadAlumno(id){
                this.$router.push('/alumno/' + id)
            },
            newAlumno(){
                this.$router.push('/alumnos/nuevo')
            }
        }
    }
</script>

<style scoped>

    h1 {
        color: #5887bc;


    }

    h3 {
        text-decoration: underline;
        padding-top: 10px;

    }

</style>
