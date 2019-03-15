<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="nuevo-intervenciones">
        <v-app id="">
            <v-form>
                <v-container>
                    <h1>Intervenciones</h1>
                    <v-layout row wrap>
                        <v-flex xs12 sm12 md12>
                            <v-flex xs3 sm3 md3>
                                <v-text-field
                                        label="Dni"
                                        required
                                ></v-text-field>
                            </v-flex>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    label="Nombre"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    label="Apellidos"
                                    required
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
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
                                            v-model="date"
                                            label="Fecha Intervencion"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-autocomplete
                                    ref="Actuacion"
                                    v-model="actuacion"
                                    :rules="[() => !!actuacion || 'Este apartado es requerido']"
                                    :items="actuaciones"
                                    label="Actuacion"
                                    placeholder="Elige Actuacion"
                                    required
                            ></v-autocomplete>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                                    label="Descripcion"
                                    required
                                    box
                            ></v-textarea>
                        </v-flex>
                        <v-flex xs12 sm5>
                            <div>
                                <v-btn large color="primary">Validar</v-btn>
                            </div>
                        </v-flex>
                    </v-layout>

                </v-container>
            </v-form>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "nuevo-intervenciones",
        data: () => ({
            actuaciones:['random 1', 'random 2', 'random 3']


        })
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
