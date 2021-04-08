<template>
    <div id="home">
        <h1>Hello</h1>
        <p>
            Welcome
        </p>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {};
        },
        created () {
            document.title = this.$route.meta.title;
        },
    }
</script>

<style scoped>

</style>