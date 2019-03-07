<template>

    <v-layout row>
        <v-flex xs12 sm8 offset-sm2>
            <v-card>
                <v-list two-line>
                    <template v-for="(item, index) in items">
                        <v-list-tile
                                :key="item.title"
                                avatar
                                ripple
                                @click="loadAlumnos(item.id)"
                        >
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                            </v-list-tile-content>
                            <v-list-tile-action>
                                <v-list-tile-action-text>{{ item.id }}</v-list-tile-action-text>
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
    export default {
        data () {
            return {
                selected: [],
                items: [
                    {
                        id: '1',
                        headline: 'Brunch this weekend?',
                        title: 'Ali Connors',
                        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
                    },
                    {
                        id: '2',
                        headline: 'Summer BBQ',
                        title: 'me, Scrott, Jennifer',
                        subtitle: "Wish I could come, but I'm out of town this weekend."
                    },
                    {
                        id: '3',
                        headline: 'Oui oui',
                        title: 'Sandra Adams',
                        subtitle: 'Do you have Paris recommendations? Have you ever been?'
                    },
                    {
                        id: '4',
                        headline: 'Birthday gift',
                        title: 'Trevor Hansen',
                        subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
                    },
                    {
                        id: '5',
                        headline: 'Recipe to try',
                        title: 'Britta Holt',
                        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
                    }
                ]
            }
        },

        methods: {
            loadAlumnos(id){
                this.$router.push('/demandas/' + id)
            }
        }
    }
</script>

<style scoped>

</style>