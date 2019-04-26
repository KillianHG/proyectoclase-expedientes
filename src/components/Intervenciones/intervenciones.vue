<template>
    <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
            <div>
                <v-btn large color="primary"
                       @click="newIntervencion">Nueva intervencion</v-btn>
            </div>
            <v-card>
                <v-list three-line>
                    <div class="grey lighten-5" >
                        <v-subheader>INTERVENCIONES</v-subheader>
                        <v-divider divider></v-divider>
                    </div>
                    <template v-for="(item, index) in items">
                        <v-list-tile
                                :key="item.dni"
                                avatar
                                ripple
                                @click="loadIntervencion(item.no_registro)"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.nombre }} {{ item.apellidos }}</v-list-tile-title>
                                <v-list-tile-sub-title class="text--primary">{{ item.actuacion }}</v-list-tile-sub-title>
                                <v-list-tile-sub-title>{{ item.id_centro }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ item.dni }}</v-list-tile-action-text>
                            </v-list-tile-action>
                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ item.no_registro }}</v-list-tile-action-text>
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
        data() {
            return {
                alert: false,
                id: this.$route.query.id,
                items: null
            }
        },
        mounted() {
            if(this.id != null) {
                axios.get(constantes.path + 'intervenciones/' + this.id)
                    .then(response => this.items = response.data)
            } else {
                axios.get(constantes.path + 'intervenciones/')
                    .then(response => this.items = response.data)
            }
        },
        methods: {
            newIntervencion() {
                this.$router.push('/intervenciones/nuevo/?id=' + this.id )
            },
            loadIntervencion(id){
                this.$router.push('/intervencion?id=' + id)
            },
        }
    }
</script>

<style scoped>

</style>
