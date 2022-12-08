<template>
    <button class="button-cmp"
        @click.prevent="$emit( 'click-handler' )">
        {{ name }}
    </button>
</template>

<script>
    export default {
        props: {
            name: { type: String, default: 'Btn' }
        },

        setup() {

            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.button-cmp {
    @include font( 12px );
    color: main-color;
    height: 26px;
    min-width: 50px;
    border: $main-border;
    outline: none;
    margin: 5px 10px;
    padding: 5px 10px;

    &:hover {
        background-color: $main-color;
        color: $main-white;
        border: $main-border-white;
    }
}
</style>