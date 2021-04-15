import { articles } from '../../../data'

export default function handler(req, res) {
    res.json(articles)

}