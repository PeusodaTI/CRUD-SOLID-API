import { Request, Response } from "express";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase";

export class CreateProdutoController {
    constructor(
        private createProdutoUseCase: CreateProdutoUseCase
    ) {}

    public async handle(request: Request, response: Response): Promise<Response> {
        const { nome, valor, descricao } = request.body
        try {
            this.createProdutoUseCase.execute({
                nome,
                valor,
                descricao
            })

            return response.status(201).json('Produto cadastrado.')
        } catch (error) {
            return response.status(400).json('Erro ao criar produto.')
        }
    }
}