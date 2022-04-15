import Questions from "../../models/Questions.js";

export function deleteQuestion(req, res) {
  const { id } = req.params;
  Questions.destroy({
    where: {
      id,
    },
  });
}
