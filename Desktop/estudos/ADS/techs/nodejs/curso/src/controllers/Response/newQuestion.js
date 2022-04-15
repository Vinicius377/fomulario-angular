import Questions from "../../models/Questions.js";

export function newQuestion(req, res) {
  const { author, body } = req.body;
  if (author && body) {
    Questions.create({
      author,
      body,
    });
  }
}
