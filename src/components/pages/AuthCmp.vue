<template>
    <div class="auth-cmp">
        <form-cmp />
    </div>
</template>

<script>
import FormCmp from '../ui/forms/FormCmp.vue';
    export default {
        components: {
            FormCmp
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.auth-cmp {
    @include flexRow( center, center );
    height: 100vh;
    width: 100vw;
    background-color: $main-color;
}
</style>