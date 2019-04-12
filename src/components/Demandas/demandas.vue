<template>
    <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
            <div>
                <v-btn large color="primary"
                       @click="newDemanda">Nueva demanda</v-btn>
            </div>
            <v-card>
                <v-list two-line>
                    <div class="grey lighten-5" >
                        <v-subheader>DEMANDAS</v-subheader>
                        <v-divider divider></v-divider>
                    </div>
                    <template v-for="(item, index) in items">
                        <v-list-tile
                                :key="item.dni"
                                avatar
                                ripple
                                @click="loadDemanda(item.id_demanda)"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.nombre }} {{ item.apellidos }}</v-list-tile-title>

                                <v-list-tile-sub-title>{{ item.id_centro }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ item.dni }}</v-list-tile-action-text>
                            </v-list-tile-action>
                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ item.id_demanda }}</v-list-tile-action-text>
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
                axios.get('http://localhost:3000/api/demandas/' + this.id)
                    .then(response => this.items = response.data)
            } else {
                axios.get('http://localhost:3000/api/demandas/')
                    .then(response => this.items = response.data)
            }


        },
        methods: {
            newDemanda() {
                this.$router.push('/demandas/nuevo/?id=' + this.id)
            },
            loadDemanda(id){
                if (id != null) {
                    this.$router.push('/demanda?id=' + id)
                }
            },
        }
    }
</script>

<style scoped>

</style>
