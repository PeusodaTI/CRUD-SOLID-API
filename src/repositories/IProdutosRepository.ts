import { Produto } from '../entities/Produto'

export interface IProdutosRepository {
    save(produto: Produto): Promise<void>
    findByName(nome: string): Promise<Produto | null>
    getProdutos(): Promise<Produto[]>
    findById(id: string): Promise<Produto | null>
    updateProduto(produto: Produto): Promise<Produto>
    deleteProduto(id: string): Promise<void>
}