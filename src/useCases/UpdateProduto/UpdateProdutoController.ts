import { Request, Response } from 'express'
import { z, ZodError } from 'zod'

import { UpdateProdutoUseCase } from './UpdateProdutoUseCase'
import { AppErrors } from '../../errors/AppErrors'

export class UpdateProdutoController {
    constructor(
        private updateProdutoUseCase: UpdateProdutoUseCase
    ) {}

    public async handle(request: Request, response: Response): Promise<Response> {
        

        try {
            const bodySchema = z.object({
                nome: z.string({ 
                    required_error: 'O campo nome é obrigatório e deve conter no mínimo 3 caractéres.',
                    invalid_type_error: 'O campo nome deve ser do tipo String.' 
                }).min(3).optional(),
                valor: z.number({
                    required_error: 'O campo valor é obrigatório.',
                    invalid_type_error: 'O campo valor deve ser do tipo Number.' 
                }).optional(),
                descricao: z.string({
                    required_error: 'O campo descrição é obrigatório e deve conter no mínimo 10 caractéres.',
                    invalid_type_error: 'O campo descrição deve ser do tipo String.' 
                }).min(10).optional()
            })
            
            const paramsSchema = z.object({
                id: z.string({
                    required_error: 'O campo id é obrigatório.',
                    invalid_type_error: 'O campo id é do tipo UUID.'
                })
            })

            const { nome, valor, descricao } = bodySchema.parse(request.body)

            const { id } = paramsSchema.parse(request.params)

            const produto = await this.updateProdutoUseCase.execute({
                id, 
                nome, 
                valor,
                descricao
            })

            return response.status(200).json(produto)

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