import { Produto } from '../../entities/Produto'
import { AppErrors } from '../../errors/AppErrors'
import { 
    PostgresProdutosRepository 
} from '../../repositories/implementations/PostgresProdutosRepository'
import { IUpdateProdutoDTO } from './IUpdateProdutoDTO'

export class UpdateProdutoUseCase {
    constructor(
        private postgresProdutosRepository: PostgresProdutosRepository
    ) {}

    async execute(data: IUpdateProdutoDTO) {
        const produto = await this.postgresProdutosRepository.findById(data.id)

        if (!produto) {
            throw new AppErrors('Não existe produto cadastrado com este id.', 404)
        }

        const produtoUpdate: Produto = {
            ... produto,
            ... data
        }       
        
        await this.postgresProdutosRepository.updateProduto(produtoUpdate)
    }
}