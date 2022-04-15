import Questions from "../../models/Questions.js"

export function newQuestion(req, res) {
  console.log("aq")
  const { author, body } = req.body
  console.log(author)
  if (author && body) {
    Questions.create({
      author,
      body,
    }).then(resp => res.json(resp))
  }
}
