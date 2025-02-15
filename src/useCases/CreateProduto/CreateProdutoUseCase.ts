import { IProdutosRepository } from '../../repositories/IProdutosRepository';
import { ICreateProdutoDTO } from './ICreateProdutoDTO'

export class CreateProdutoUseCase {
    constructor(
        private produtosRepository: IProdutosRepository
    ) {}

    async execute(produto: ICreateProdutoDTO) {
        this.produtosRepository.save(produto)
    }
}