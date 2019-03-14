<template>
    <div>
        <p>{{ id }}</p>
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
            axios.get('http://172.31.73.46:3000/api/alumnos/')
                .then(response => this.data = response.data)
        },
    }
</script>

<style scoped>

</style>
