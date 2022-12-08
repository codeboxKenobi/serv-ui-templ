<template>
    <input class="input-cmp" 
        type="text" 
        :placeholder="placeholder">

    <span class="input-cmp-warning-text">
        {{ warningTxt }}
    </span>
</template>

<script>
import { ref } from 'vue'

    export default {
        props: {
            placeholder: { type: String, default: 'placeholder' }
        },

        setup() {
            const warningTxt = ref( '* Предупреждение' )

            return {
                warningTxt
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.input-cmp {
    height: 30px;
    width: calc( 100% - 24px );
    padding: 0px 10px;
    margin: 10px 10px;
    border: $main-border;
    outline: none;
    color: $main-color;

    &-warning-text {
        @include flexRow( flex-start, center );
        @include font( 10px );
        color: $main-white;
        height: 10px;
        width: calc( 100% - 2px );
    }
}

::placeholder {
    color: $main-color;
}
</style>