const express = require("express")
const database = require("./database.js")
const porta = 1337
const app = express()

app.use(express.urlencoded({ extended: true }))

// Exibir todos os Clientes
app.get("/clientes", (req, res) => {
	res.send(database.exibirTodosOsClientes())
})

// Exibir Cliente
app.get("/clientes/:id", (req, res) => {
	res.send(database.exibirCliente(req.params.id))
})

// Adicionar Cliente
app.post("/clientes", (req, res) => {
	const cliente = database.adicionarCliente({
		nome: req.body.nome,
		idade: req.body.idade,
		sexo: req.body.sexo
	})
	res.send(cliente)
})

// Alterar Cliente
app.put("/clientes/:id", (req, res) => {
	const cliente = database.adicionarCliente({
		id: req.params.id,
		nome: req.body.nome,
		idade: req.body.idade,
		sexo: req.body.sexo
	})
	res.send(cliente)
})

// Excluir Cliente
app.delete("/clientes/:id", (req, res) => {
	const cliente = database.excluirCliente(req.params.id)
	res.send(cliente)
})

app.listen(porta, () => {
	console.log(`Executando na porta ${porta}.`)
})
