<template>
    <div id="crearusuario">
        <v-app id="inspire">
            <v-form>
                <v-container>
                    <h3>Datos personales</h3>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md3>
                            <v-text-field
                                    v-model="items[0].dni"
                                    label="Dni"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md7>
                            <v-text-field
                                    v-model="items[0].nombre"
                                    label="Nombre"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].apellidos"
                                    label="Apellido"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].fecha_de_nacimiento"
                                    label="Fecha de nacimiento"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].ciudad_de_nacimiento"
                                    label="Ciudad de nacimiento"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].pais_de_nacimiento"
                                    label="Pais de nacimiento"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].direccion_reside"
                                    label="Direccion"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].poblacion_reside"
                                    label="Poblacion"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].provincia_reside"
                                    label="Provincia"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].id_centro"
                                    label="ID Centro"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-btn large color="primary"
                                   @click="showDemandas">Ver demandas</v-btn>
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
        data() {
            return {
                dni: null,
                items: null
            }
        },
        created() {
            this.dni = this.$route.query.id
        },
        mounted() {
            axios.get(constantes.path + 'alumnos/' + this.dni)
                .then(response => this.items = response.data)
        },
        methods: {
            showDemandas(){
                this.$router.push('/demandas?id=' + this.dni)
            }
        }

    }
</script>

<style scoped>

</style>
