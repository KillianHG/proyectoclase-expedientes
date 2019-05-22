<template>
    <div id="nuevo-intervenciones">
        <v-app id="">
            <v-form>
                <v-container>
                    <h1>Intervenciones</h1>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md12>
                            <v-flex xs3 sm3 md3>
                                <v-text-field
                                        v-model="items[0].dni"
                                        label="Dni"
                                        required

                                ></v-text-field>
                            </v-flex>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].nombre"
                                    label="Nombre"
                                    required

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].apellidos"
                                    label="Apellidos"
                                    required

                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].id_centro"
                                    label="Centro"
                                    required

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

                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                                    v-model="items[0].descripcion_de_la_intervencion"
                                    label="Descripcion"
                                    required
                                    box

                            ></v-textarea>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-btn large color="primary"
                                   @click="savedata">Guardar</v-btn>
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
        props: ['id_intervencion'],
        data() {
            return {

                items: null
            }
        },
        mounted() {
            axios.get(constantes.path + 'intervencion/' + this.id_intervencion)
                .then(response => this.items = response.data)
        },

        methods:{

            savedata(){
                axios.put(constantes.path + 'intervencion/' + this.id,this.items).then(
                    alert("la intervencion con el id "+ this.items[0].id + " se ha editado")

                )
                this.$router.push('/intervenciones')

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
