<template>
    <v-app>
        <v-form>
            <v-container>
                <h1>Datos Tutor a Cargo</h1>
                <v-layout row wrap>
                    <v-flex xs12 sm5 md12>
                        <v-text-field
                                v-model="items[0].dni"
                                label="Dni"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm6 md5>
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
                                v-model="items[0].parentesco"
                                label="Parentesco"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="items[0].nacionalidad"
                                label="Nacionalidad"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="items[0].telefono_1"
                                label="Telefono"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md5>
                        <v-text-field
                                v-model="items[0].telefono_2"
                                label="Telefono 2(Opcional)"
                                :disabled="true"
                        ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12>
                        <div>
                            <v-btn large color="primary" @click="postData">Dar Alta</v-btn>
                        </div>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>
    </v-app>
</template>

<script>
    import axios from 'axios';

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
            axios.get('http://localhost:3000/api/tutores/' + this.dni)
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