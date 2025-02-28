import { Produto } from '../../entities/Produto';
import { PostgresProdutosRepository } from '../../repositories/implementations/PostgresProdutosRepository'

export class GetProdutosUseCase {
    constructor(
        private postgresProdutosRepository: PostgresProdutosRepository
    ) {}

    async execute(): Promise<Produto[]> {
        return await this.postgresProdutosRepository.getProdutos()
    }
}