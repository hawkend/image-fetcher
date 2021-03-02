import constants from '../constants.js'

export class ImageService {

    constructor(props = {}) {
        this.target = props.target || constants.TARGET
    }

    async fetch(ids) {
        const urls = this.mapToUrl(ids)
        const requests = urls.map(url => fetch(url))
        console.log(urls)

        try {
            const responses = await Promise.all(requests)
            const result = await Promise.all(responses.map(r => r.json()))

            return result.map(({ num, img, title, alt }) => ({
                id: num,
                img: img,
                title: title,
                alt
            }))
        } catch (_) {
            return constants.INVALID_SCHEMA
        }
    }

    mapToUrl(ids) {
        return ids.map(id => `${this.target}${id}`)
    }
}

export const imageService = new ImageService()
