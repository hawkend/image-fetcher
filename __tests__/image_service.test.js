import axios from 'axios'
import constants from '../src/constants.js'
import { imageService } from '../src/services/image_service.js'

jest.mock('axios')

describe('ImageService tests', () => {
    it('fetches successfully data from an API and transform it.', async () => {
        const input =
                {
                    data: {
                        month: '7',
                        num: 614,
                        link: '',
                        year: '2009',
                        news: '',
                        safe_title: 'Woodpecker',
                        transcript: "[[A man with a beret and a woman are standing on a boardwalk, leaning on a handrail.]]\nMan: A woodpecker!\n<<Pop pop pop>>\nWoman: Yup.\n\n[[The woodpecker is banging its head against a tree.]]\nWoman: He hatched about this time last year.\n<<Pop pop pop pop>>\n\n[[The woman walks away.  The man is still standing at the handrail.]]\n\nMan: ... woodpecker?\nMan: It's your birthday!\n\nMan: Did you know?\n\nMan: Did... did nobody tell you?\n\n[[The man stands, looking.]]\n\n[[The man walks away.]]\n\n[[There is a tree.]]\n\n[[The man approaches the tree with a present in a box, tied up with ribbon.]]\n\n[[The man sets the present down at the base of the tree and looks up.]]\n\n[[The man walks away.]]\n\n[[The present is sitting at the bottom of the tree.]]\n\n[[The woodpecker looks down at the present.]]\n\n[[The woodpecker sits on the present.]]\n\n[[The woodpecker pulls on the ribbon tying the present closed.]]\n\n((full width panel))\n[[The woodpecker is flying, with an electric drill dangling from its feet, held by the cord.]]\n\n{{Title text: If you don't have an extension cord I can get that too.  Because we're friends!  Right?}}",
                        alt: 'If you don\'t have an extension cord I can get that too.  Because we\'re friends!  Right?',
                        img: 'https://imgs.xkcd.com/comics/woodpecker.png',
                        title: 'Woodpecker',
                        day: '24'
                    }
                }

        const output =
            [
                {
                    id: 614,
                    img: 'https://imgs.xkcd.com/comics/woodpecker.png',
                    title: 'Woodpecker',
                    alt: 'If you don\'t have an extension cord I can get that too.  Because we\'re friends!  Right?'
                }
            ]

        axios.get.mockImplementationOnce(() => Promise.resolve(input))
        await expect(imageService.fetch([614])).resolves.toEqual(output)
    })

    it('passes a wrong invalid JSON schema', async () => {
        axios.get.mockImplementationOnce(() => Promise.rejects(constants.INVALID_SCHEMA))
        await expect(imageService.fetch(undefined)).rejects.toEqual(new Error(constants.NOT_JSON))
    })
})
