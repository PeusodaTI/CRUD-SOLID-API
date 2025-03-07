import { PrismaClient } from '@prisma/client'
import { Produto } from '../../entities/Produto'
import { prisma } from '../../utils/prisma-database'
import { IProdutosRepository } from '../IProdutosRepository'

export class PostgresProdutosRepository implements IProdutosRepository {
    private ormRepository: PrismaClient = prisma
    
    async save(produto: Produto): Promise<void> {
        await this.ormRepository.produto.create({
            data: {
                nome: produto.nome,
                valor: produto.valor,
                descricao: produto.descricao
            }
        })
    }
    
    async findByName(nome: string): Promise<Produto | null> {
        const findProduto = await this.ormRepository.produto.findUnique({
            where: { nome }
        })
        
        if (findProduto) {
            return findProduto
        }
        
        return null
    }

    async getProdutos(): Promise<Produto[]> {
        const produtos = await this.ormRepository.produto.findMany()

        return produtos
    }

    async findById(id: string): Promise<Produto | null> {
        const produto = await this.ormRepository.produto.findUnique({
            where: { id }
        })

        return produto
    }

    async updateProduto(produto: Produto): Promise<Produto> {
        const updateProduto = await this.ormRepository.produto.update({
            where: { 
                id: produto.id
            }, 
            data: {
                nome: produto.nome,
                valor: produto.valor,
                descricao: produto.descricao
            }
        })

        return updateProduto
    }

    async deleteProduto(id: string): Promise<void> {
        await this.ormRepository.produto.delete({
            where: { id }
        })
    }
}