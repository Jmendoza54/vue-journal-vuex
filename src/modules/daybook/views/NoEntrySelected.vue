<template>
    <div class="d-flex justify-content-center">
        <h1 class="align-self-center">Nada seleccionado</h1>
    </div>

    <FabButton />
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        FabButton: defineAsyncComponent(() => import('../components/Fab'))
    },
}
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>