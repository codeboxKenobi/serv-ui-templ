<template>
    <div class="user-cmp">
        <header class="user-cmp-header">
            <nav-cmp />
        </header>

        <main class="user-cmp-main">

        </main>
    </div>
</template>

<script>
import NavCmp from '../ui/controls/NavCmp.vue';
    export default {
        components: {
            NavCmp
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.user-cmp {
    height: 100vh;
    width: 100vw;
    background-color: rgb(180, 214, 148);

    &-header {
        height: 50px;
        background-color: $main-color;
    }

    &-main {
        height: calc( 100vh - 50px );
        background-color: $main-white;
    }
}
</style>