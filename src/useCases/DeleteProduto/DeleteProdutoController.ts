import { Request, Response } from 'express'

import { DeleteProdutoUseCase } from './DeleteProdutoUseCase'

export class DeleteProdutoController {
    constructor(
        private deleteProdutoUseCase: DeleteProdutoUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        try {
            await this.deleteProdutoUseCase.execute(id)

            return response.status(200).json('Produto excluído com sucesso.')
        } catch (error) {
            return response.status(400).json('Erro ao tentar excluir produto.')
        }
    }
}