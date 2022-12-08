<template>
    <button class="tab-cmp" 
        type="button" 
        @click="$emit( 'click-handler' )">
        {{ name }}
    </button>
</template>

<script>
    export default {
        props: {
            name: { type: String, default: 'Tab' }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.tab-cmp {
    height: 30px;
    padding: 5px;
    margin: 10px;
    background-color: $main-color;
    color: $main-white;
    border: none;
    border-bottom: $main-border;
    outline: none;
}
</style>