import { Produto } from '../entities/Produto'

export interface IProdutosRepository {
    save(produto: Produto): Promise<void>
    findByName(nome: string): Promise<Produto | null>
}