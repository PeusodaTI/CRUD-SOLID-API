import { 
    PostgresProdutosRepository 
} from '../../repositories/implementations/PostgresProdutosRepository'
import { GetProdutosController } from './GetProdutosController'
import { GetProdutosUseCase } from './GetProdutosUserCase'

const postgresProdutosRepository = new PostgresProdutosRepository()

const getProdutosUseCase = new GetProdutosUseCase(postgresProdutosRepository)

const getProdutosController = new GetProdutosController(getProdutosUseCase)

export { getProdutosController }