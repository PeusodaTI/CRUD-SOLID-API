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
            throw new Error('Não existe produto cadastrado com esse id.')
        }
        
        await this.postgresProdutosRepository.updateProduto(data)
    }
}