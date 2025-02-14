import { Produto } from '../../entities/Produto'
import { IProdutosRepository } from '../IProdutosRepository'

export class PostgresProdutosRepository implements IProdutosRepository {
    private produto: Produto[] = []

    async save(produto: Produto): Promise<void> {
        this.produto.push(produto)
    }
}