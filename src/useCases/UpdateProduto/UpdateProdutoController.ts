import { Request, Response } from 'express'

import { UpdateProdutoUseCase } from './UpdateProdutoUseCase'

export class UpdateProdutoController {
    constructor(
        private updateProdutoUseCase: UpdateProdutoUseCase
    ) {}

    public async handle(request: Request, response: Response): Promise<Response> {
        const { nome, valor, descricao } = request.body
        const { id } = request.params

        try {
            const produto = await this.updateProdutoUseCase.execute({
                id, 
                nome, 
                valor,
                descricao
            })

            return response.status(200).json(produto)

        } catch (error) {
            return response.status(400).json('Erro ao tentar atualizar produto')
        }
    }
}