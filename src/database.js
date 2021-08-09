const contador = {
	_id: 1,
	get id() {
		return this._id++
	}
}

const clientes = {}

function adicionarCliente(cliente) {
	if (!cliente.id) {
		cliente.id = contador.id
	}
	clientes[cliente.id] = cliente
	return cliente
}

function exibirCliente(id) {
	return clientes[id] || {}
}

function exibirTodosOsClientes() {
	return Object.values(clientes)
}

function excluirCliente(id) {
	const lixo = clientes[id]
	delete clientes[id]
	return lixo
}

module.exports = {
	adicionarCliente,
	exibirCliente,
	exibirTodosOsClientes,
	excluirCliente
}
