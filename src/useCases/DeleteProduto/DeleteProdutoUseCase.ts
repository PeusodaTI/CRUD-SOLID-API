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
            throw new Error('Não existe produto cadastrado com este id.')
        }

        await this.postgresProdutosRepository.deleteProduto(id)
    }
}