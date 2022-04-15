//*showquestions
let questions = []
const showQuestions = data => {
  console.log(data)
  data.map(question => questions.unshift(question))
  const main = document.querySelector("main")
  main.innerHTML = ""
  questions.map(({ author, body, id }) => {
    const element = document.createElement("div")
    element.className = "card"
    element.innerHTML = `
    <div>
    <h1>${author}</h1>
    <button onclick="window.location.href='../perguntas/index.html?id=${id}'">Responder</button>
    </div>
    <p>${body}</p>
  `
    main.appendChild(element)
  })
}
//*post new question
const post = document.querySelector("#post")
post.addEventListener("click", e => {
  const inputs = {
    author: document.getElementById("author").value,
    body: document.getElementById("body").value,
  }
  e.preventDefault()
  fetch("http://localhost:3001/question", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputs),
  })
    .then(resp => resp.json())
    .then(() => {
      showQuestions([inputs])
    })
})

//*allquestions
fetch("http://localhost:3001/question")
  .then(res => res.json())
  .then(resp => {
    showQuestions(resp)
  })
  .catch(e => console.log("houve um erro" + e))
