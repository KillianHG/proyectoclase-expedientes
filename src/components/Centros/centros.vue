<template>
    <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
            <div>
                <v-btn large color="primary"
                       @click="newCentro">Nuevo Centro</v-btn>
            </div>
            <v-card>
                <v-list two-line>
                    <div class="grey lighten-5" >
                        <v-subheader>LISTA DE CENTROS</v-subheader>
                        <v-divider divider></v-divider>
                    </div>
                    <template v-for="(item, index) in items">
                        <v-list-tile
                                :key="item.id_centro"
                                avatar
                                ripple
                                @click="loadCentro(item.id_centro)"
                        >
                            <v-list-tile-content>
                                <v-list-tile-sub-title>{{ item.id_centro }}</v-list-tile-sub-title>
                                <v-list-tile-title>{{ item.nombre_de_centro }} {{ item.direccion_de_centro }}</v-list-tile-title>
                            </v-list-tile-content>
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
            axios.get(constantes.path + 'centros')
                .then(response => this.items = response.data)
        },
        methods: {
            loadCentro(id){
                this.$router.push('/centro?id=' + id)
            },
            newCentro(){
                this.$router.push('/nuevocentros/nuevo')
            }
        }
    }
</script>

<style scoped>

</style>
