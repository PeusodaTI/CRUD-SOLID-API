import { Request, Response } from 'express'
import { z } from 'zod'

import { DeleteProdutoUseCase } from './DeleteProdutoUseCase'

export class DeleteProdutoController {
    constructor(
        private deleteProdutoUseCase: DeleteProdutoUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const paramsSchema = z.object({
                id: z.string({
                    required_error: 'O campo id é obrigatório.',
                    invalid_type_error: 'O campo id deve ser do tipo UUID.'
                }).uuid()
            })

            const { id } = paramsSchema.parse(request.params)

            await this.deleteProdutoUseCase.execute(id)

            return response.status(200).json('Produto excluído com sucesso.')
        } catch (error) {
            return response.status(400).json('Erro ao tentar excluir produto.')
        }
    }
}