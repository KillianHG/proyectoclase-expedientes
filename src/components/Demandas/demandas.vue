<template>
    <div>
        <p>{{ id }}</p>
        <p>{{ data.deck_id }}</p>
    </div>
</template>

<script>

    import axios from 'axios';

    export default {
        data() {
            return {
                id: this.$route.query.id,
                data: null
            }
        },
        mounted() {
            axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
                .then(response => this.data = response.data)
        }
    }
</script>

<style scoped>

</style>
