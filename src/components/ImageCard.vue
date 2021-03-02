<template>
    <div class="card mb-4">
        <img :src="url" :alt="alt" />
        <div class="card-body">
            <h4 class="card-title text-center text-dark">
                {{ title }} ({{ id }})
            </h4>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageCard',
    props: {
        url: { type: String, required: true },
        title: { type: String, required: true },
        id: { type: Number, required: true },
        alt: { type: String, required: true }
    }
}
</script>
