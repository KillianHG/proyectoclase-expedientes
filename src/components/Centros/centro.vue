<template>
    <div>
        <v-app id="inspire">
            <v-form>
                <v-container>
                    <h1>Datos del Centro</h1>
                    <v-layout row wrap>
                        <v-flex xs12 sm5 md5>
                            <v-text-field
                                    v-model="items[0].nombre_de_centro"
                                    label="Nombre Del Centro"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].telefono_de_contacto"
                                    label="Telefono"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].nom_director_centro"
                                    label="Nombre Director del Centro"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].direccion_de_centro"
                                    label="Direccion del Centro"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].poblacion"
                                    label="Poblacion"
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].provincia"
                                    label="Provincia"
                                    :disabled="true"
                            ></v-text-field>
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
                id: null,
                items: null
            }
        },
        created() {
            this.id = this.$route.query.id
        },
        mounted() {
            axios.get(constantes.path + 'centros/' + this.id)
                .then(response => this.items = response.data)
        }

    }
</script>

<style scoped>

</style>
