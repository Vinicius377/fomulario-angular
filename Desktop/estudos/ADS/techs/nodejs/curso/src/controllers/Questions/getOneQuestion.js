import Questions from "../../models/Questions.js";

export function getOneQuestion(req, res) {
  const { id } = req.params;
  Questions.findOne({
    where: {
      id,
    },
  }).then((resp) => {
    res.json(resp);
  });
}
