<template>
    <form class="form-cmp">

        <div class="form-cmp-state-text-section">
            {{ stateText }}
        </div>

        <div class="form-cmp-input-section">
            <input-cmp v-for="( field, fieldIndex ) in inputFields" 
                :key="fieldIndex" 
                :placeholder="field" />
        </div>

        <div class="form-cmp-butons-section">
            <button-cmp name="Войти" 
                @click-handler="this.$store.commit( 'SET_AUTH_STATE', true );" />
            <span class="form-cmp-butons-section-reg">
                Регистрация
            </span>
        </div>
        
    </form>
</template>

<script>
import { ref } from 'vue'
import InputCmp from '../InputCmp.vue'
import ButtonCmp from '../ButtonCmp.vue'

    export default {
        components: {
            InputCmp,
            ButtonCmp
        },

        setup() {
            const stateText = ref( 'Вход' )
            const inputFields = ref( [ 'Почта', 'Пароль' ] )

            return {
                stateText,
                inputFields
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '~/src/assets/styles/custom.scss';

.form-cmp {
    @include flexCol( center, center );
    height: 100%;
    width: 30%;
    min-width: 300px;
    border: $main-border;

    &-state-text-section {
        @include flexRow( flex-start, center );
        @include font( 20px );
        color: $main-white;
        height: 50px;
        width: 90%;
        margin: 10px;
    }

    &-input-section {
        @include flexCol(flex-start, center );
        height: auto;
        width: 90%;
        margin: 10px;
    }

    &-butons-section {
        @include flexCol( flex-start, center );
        height: 80px;
        width: 90%;
        margin: 10px;

        &-reg {
            @include flexRow( center, center );
            @include font( 12px );
            color: $main-white;
            height: 50px;
            width: 30%;
            margin: 10px;
            border-bottom: $main-border-white;
        }
    }
}
</style>