import Questions from "../../models/Questions.js";

export function getAllQuestion(req, res) {
  Questions.findAll().then((resp) => {
    console.log(JSON.stringify(resp));
    res.json(resp);
  });
}
