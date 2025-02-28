import { Request, Response } from 'express'
import { GetProdutosUseCase } from './GetProdutosUserCase'

export class GetProdutosController {
    constructor(
        private getProdutosUseCase: GetProdutosUseCase
    ) {}

    public async handle(request: Request, response: Response): Promise<Response> {
        try {
            const produtos = await this.getProdutosUseCase.execute()

            return response.status(200).json(produtos)
        } catch (error) {
            return response.status(400).json('Erro ao tentar buscar produtos.')
        }

    }
}