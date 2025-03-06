import { PostgresProdutosRepository } from '../../repositories/implementations/PostgresProdutosRepository'
import { UpdateProdutoController } from './UpdateProdutoController'
import { UpdateProdutoUseCase } from './UpdateProdutoUseCase'

const postgresProdutosRepository = new PostgresProdutosRepository()

const updateProdutoUseCase = new UpdateProdutoUseCase(postgresProdutosRepository)

const updateProdutoController = new UpdateProdutoController(updateProdutoUseCase)

export { updateProdutoController }