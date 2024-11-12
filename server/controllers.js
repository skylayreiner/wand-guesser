import { Player } from "./db.js";

export function getPlayers(req, res) {
  Player.find({})
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((err) => {
      res.sendStatus(400);
    });
}
