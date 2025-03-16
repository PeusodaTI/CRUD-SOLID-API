import { Produto } from '../../entities/Produto'
import { AppErrors } from '../../errors/AppErrors'
import { IProdutosRepository } from '../../repositories/IProdutosRepository'
import { ICreateProdutoDTO } from './ICreateProdutoDTO'

export class CreateProdutoUseCase {
    constructor(
        private produtosRepository: IProdutosRepository
    ) {}

    async execute(data: ICreateProdutoDTO) {
        const produto = new Produto(data.nome, data.valor, data.descricao)

        const produtoAlreadyExist = await this.produtosRepository.findByName(produto.nome) 

        if (produtoAlreadyExist) {
            throw new AppErrors('Já existe um produto cadastrado.', 409)
        }

        await this.produtosRepository.save(produto)
    }
}