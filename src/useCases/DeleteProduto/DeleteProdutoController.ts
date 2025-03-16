import { Request, Response } from 'express'
import { z, ZodError } from 'zod'

import { DeleteProdutoUseCase } from './DeleteProdutoUseCase'
import { AppErrors } from '../../errors/AppErrors'

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
            if (error instanceof ZodError) {
                return response.status(400).json({ message: 'Erro de validação.', error })    
            }

            if (error instanceof AppErrors) {
                return response.status(error.statusCode).json({ message: error.message })    
            }

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