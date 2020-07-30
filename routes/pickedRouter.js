const express = require('express')
const pickedRouter = express.Router()
const { v4: uuidv4 } = require('uuid')

const picks = [
    { player: 'Lamar Jackson', position: 'QB', _id: uuidv4() },
    { player: 'Justin Tucker', position: 'Kicker', _id: uuidv4() },
    { player: 'Marquise Brown', position: 'WideReceiver', _id: uuidv4() }
]

pickedRouter.route('/')
    .get(( req, res ) => {
        res.send(picks)
    })
    .post(( req, res) => {
        const newPick = req.body
        newPick._id = uuidv4()
        picks.push(newPick)
        res.send(`Successfully added ${newPick.player} to the database`)
    })

    pickedRouter.get('/search/position', ( req, res ) => {
        const position = req.query.position
        const filteredPicks = picks.filter(pick => pick.position === position)
        res.send(filteredPicks)
    })

    module.exports = pickedRouter