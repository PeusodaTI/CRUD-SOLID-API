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
            if (error instanceof Error) {
                return response.status(500).json({ 
                    error: 'Internal Server Error.', 
                    message: error.message 
                })
            }

            return response.status(500).json({ 
                error: 'Internal Server Error.',
                message: 'Erro interno não identificado.' 
            })
        }
    }
}