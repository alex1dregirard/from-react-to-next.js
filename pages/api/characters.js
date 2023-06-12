import { getSortedCharactersData } from "../../lib/characters";

export default function handler(req, res) {
    res.status(200).json(getSortedCharactersData());
  }