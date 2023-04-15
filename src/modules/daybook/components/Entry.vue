<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 10 }})">
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">03</span>
            <span class="mx-1 fs-5">Abril</span>
            <span class="mx-2 fw-light">2023, Lunes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, porro at eveniet obcaecati cumque quaerat, nemo id quae illo dignissimos labore in dolorem! Quo, esse? Eligendi laudantium fugiat voluptates non?
        </div>
    </div>
</template>

<script>
export default {
    name: 'EntryElement'
}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: gray, $amount: 45);
        }

        .entry-description{
            font-size: 12px;
        }
    }
</style>