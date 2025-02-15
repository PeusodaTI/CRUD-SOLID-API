import { PostgresProdutosRepository } from '../../repositories/implementations/PostgresProdutosRepository'
import { CreateProdutoController } from './CreateProdutoController'
import { CreateProdutoUseCase } from './CreateProdutoUseCase'

const postgresProdutosRepository = new PostgresProdutosRepository

const createProdutoUseCase = new CreateProdutoUseCase(postgresProdutosRepository)

const createProdutoController = new CreateProdutoController(createProdutoUseCase)

export { createProdutoController }