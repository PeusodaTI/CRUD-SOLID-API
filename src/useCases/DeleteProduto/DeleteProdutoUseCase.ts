import { AppErrors } from '../../errors/AppErrors'
import { 
    PostgresProdutosRepository 
} from '../../repositories/implementations/PostgresProdutosRepository'

export class DeleteProdutoUseCase {
    constructor(
        private postgresProdutosRepository: PostgresProdutosRepository
    ) {}

    async execute(id: string) {
        const produto = this.postgresProdutosRepository.findById(id)

        if (!produto) {
            throw new AppErrors('Não existe produto cadastrado com este id.', 404)
        }

        await this.postgresProdutosRepository.deleteProduto(id)
    }
}