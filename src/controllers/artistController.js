import { Artist } from '../models/Artist.js'

const artistController ={
    async index(req, res) {
        const artists = await Artist.findAll();
        res.json(artists);
    }
}

export { artistController }