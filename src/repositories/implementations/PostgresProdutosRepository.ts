import { Produto } from '../../entities/Produto'
import { IProdutosRepository } from '../IProdutosRepository'

export class PostgresProdutosRepository implements IProdutosRepository {
    private produto: Produto[] = []
    
    async findByName(nome: string): Promise<Produto | null> {
        const findProduto = this.produto.find(produto => produto.nome == nome)

        if (findProduto) {
            return findProduto
        }

        return null
    }

    async save(produto: Produto): Promise<void> {
        this.produto.push(produto)
    }
}