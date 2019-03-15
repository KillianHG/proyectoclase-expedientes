<template>
    <div id="nuevo-demandas">
        <v-app id="">
            <v-form>
                <v-container>
                    <h1>Demandas</h1>
                    <v-layout row wrap>
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
                                    v-model="items[0].fecha_de_nacimiento"
                                    label="Fecha de Nacimiento"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md6>
                            <v-text-field
                                    v-model="items[0].numero_registro"
                                    label="Nº Reg"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md7>
                            <v-text-field
                                    v-model="items[0].nombre_de_centro"
                                    label="Centro"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md5>
                            <v-text-field
                                    v-model="items[0].curso"
                                    label="Curso"
                                    required
                                    :disabled="true"
                            ></v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-textarea
                                    v-model="items[0].concrecion"
                                    label="Concrecion"
                                    required
                                    box
                                    :disabled="true"
                            ></v-textarea>
                        </v-flex>
                    </v-layout>

                </v-container>
            </v-form>
        </v-app>
    </div>
</template>

<script>
    import axios from 'axios';

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
            axios.get('http://localhost:3000/api/demandas/' + this.id)
                .then(response => this.items = response.data)
        },
        methods: {
            showDemandas(){
                this.$router.push('/demandas?id=' + this.id)
            }
        }

    }
</script>

<style scoped>

</style>