import { PrismaClient } from '@prisma/client'
import { Produto } from '../../entities/Produto'
import { prisma } from '../../utils/prisma-database'
import { IProdutosRepository } from '../IProdutosRepository'

export class PostgresProdutosRepository implements IProdutosRepository {
    private ormRepository: PrismaClient = prisma
    
    async findByName(nome: string): Promise<Produto | null> {
        const findProduto = this.ormRepository.produto.findUnique({
            where: {
                nome
            }
        })
        
        if (findProduto) {
            return findProduto
        }
        
        return null
    }
    
    async save(produto: Produto): Promise<void> {
        await this.ormRepository.produto.create({
            data: {
                nome: produto.nome,
                valor: produto.valor,
                descricao: produto.descricao
            }
        })
    }
    
    async getProdutos(): Promise<Produto[]> {
        const produtos = await this.ormRepository.produto.findMany()

        console.log(produtos)

        return produtos
    }
}