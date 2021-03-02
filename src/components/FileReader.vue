<template>
    <input type="file" @change="loadDataFromFile" />
</template>

<script>
export default {
    name: 'FileReader',
    methods: {
        loadDataFromFile(e) {
            const reader = new FileReader()
            const file = e.target.files[0]

            reader.onload = (e) => this.$emit('load', e.target.result)
            reader.readAsText(file)
        }
    }
}
</script>