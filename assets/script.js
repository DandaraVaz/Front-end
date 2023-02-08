const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
/* A tag button foi colocada dentro de uma variavel chamada button */

button.addEventListener("click", add)
form.addEventListener("change", save)
/*adiciona o evento 'click' e a função a esse evento 'add'*/

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  //const today = "10/02"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso🔴")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) // {}
nlwSetup.setData(data)
nlwSetup.load()
