<template>
    <button class="btn btn-primary">
        <i :class="icon" class="fa fa-2x"></i>
    </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: false,
            default: 'fa-plus'
        }
    },

    name: 'FabButton'
}
</script>

<style lang="scss" scoped>
    button{
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 80px;
        height: 80px;
        border-radius: 100%;
    }
</style>