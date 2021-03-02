import constants from '../constants.js'
import axios from 'axios'

export class ImageService {

    constructor(props = {}) {
        this.target = props.target || constants.TARGET
    }

    async fetch(ids) {
        try {
            const urls = this.mapToUrl(ids)
            const requests = urls.map(url => axios.get(url))
            const responses = await Promise.all(requests)
            const result = responses.map(r => r.data)

            return result.map(({ num, img, title, alt }) => ({
                id: num,
                img: img,
                title: title,
                alt
            }))
        } catch (_) {
            throw new Error(constants.NOT_JSON)
        }
    }

    mapToUrl(ids) {
        return ids.map(id => `${this.target}${id}`)
    }
}

export const imageService = new ImageService()
