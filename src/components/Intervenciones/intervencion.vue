<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div >
        <v-app id="">
            <v-form>
                <v-container>
                    <h1>Intervenciones al Alumno</h1>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md12>
                            <v-flex xs3 sm3 md3>
                                <v-text-field
                                        v-model="items[0].dni"
                                        label="Dni"
                                        required
                                        :disabled="true"
                                ></v-text-field>
                            </v-flex>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].nombre"
                                    label="Nombre"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].apellidos"
                                    label="Apellidos"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].id_centro"
                                    label="Centro"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                            <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :nudge-right="40"
                                    :return-value.sync="date"
                                    lazy
                                    transition="scale-transition"
                                    offset-y
                                    full-width
                                    min-width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                    <v-text-field
                                            v-model="items[0].fecha_intervencion"
                                            label="Fecha Intervencion"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                            :disabled="true"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                        v-model="items[0].fecha_intervencion"
                                        no-title scrollable
                                >
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-autocomplete
                                    ref="Actuacion"
                                    v-model="items[0].actuacion"
                                    label="Actuacion"
                                    :placeholder="items[0].actuacion"
                                    required
                                    :disabled="true"
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                                    v-model="items[0].descripcion_de_la_intervencion"
                                    label="Descripcion"
                                    required
                                    box
                                    :disabled="true"
                            ></v-textarea>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-btn large color="primary"
                                   @click="editar">Editar Intervencion</v-btn>
                        </v-flex>
                    </v-layout>

                </v-container>
            </v-form>
        </v-app>
    </div>
</template>

<script>
    import axios from 'axios';
    import constantes from '@/const.js';

    export default {
        props: ['id'],
        data() {
            return {
                items: null
            }
        },
        mounted() {
            axios.get(constantes.path + 'intervencion/' + this.id)
                .then(response => this.items = response.data)
        },
        methods:{
            editar(){
                this.$router.push('/editarIntervencion/' + this.id)
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
