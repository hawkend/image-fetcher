<template>
    <main class="container-md min-vh-100 min-vh-100" id="app">
        <h1 class="mb-4 py-4">XKCD Image fetcher</h1>
        <p>
            Select a browse button and upload a valid json file to start
            fetching images.
        </p>
        <p>
            The structure of JSON must consist of the data key which hold an
            array of ids.
        </p>
        <FileReader class="mb-4" @load="imageIds = $event" />
        <template v-if="invalid">
            <div class="alert alert-danger" role="alert">
                {{ message }}
            </div>
        </template>
        <div class="py-2">
            <template v-for="item in fetchedImages">
                <ImageCard
                    :key="item.id"
                    :id="item.id"
                    :alt="item.alt"
                    :url="item.img"
                    :title="item.title"
                />
            </template>
        </div>
    </main>
</template>

<script>
import ImageCard from './components/ImageCard.vue'
import FileReader from './components/FileReader.vue'
import { imageService } from './services/image_service.js'
import constants from './constants.js'

export default {
    data: () => ({
        imageIds: {},
        fetchedImages: {},
        invalid: false,
        message: 'Unknown error.'
    }),
    watch: {
        imageIds: function () {
            try {
                const parsedData = JSON.parse(this.imageIds)
                this.invalid = false

                imageService
                    .fetch(parsedData.data)
                    .then((r) => (this.fetchedImages = r))
                    .catch(
                        (r) => (this.invalid = true),
                        (this.message = constants.INVALID_SCHEMA)
                    )
            } catch (_) {
                this.invalid = true
                this.message = constants.NOT_JSON
            }
        }
    },
    components: {
        ImageCard,
        FileReader
    }
}
</script>
