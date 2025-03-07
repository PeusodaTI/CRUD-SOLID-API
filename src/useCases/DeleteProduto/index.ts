import { PostgresProdutosRepository } from '../../repositories/implementations/PostgresProdutosRepository'
import { DeleteProdutoController } from './DeleteProdutoController'
import { DeleteProdutoUseCase } from './DeleteProdutoUseCase'

const postgresProdutosRepository = new PostgresProdutosRepository()

const deleteProdutoUseCase = new DeleteProdutoUseCase(postgresProdutosRepository)

const deleteProdutoController = new DeleteProdutoController(deleteProdutoUseCase)

export { deleteProdutoController }