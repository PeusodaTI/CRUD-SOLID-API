import { Router } from 'express'

import { createProdutoController } from '../useCases/CreateProduto'
import { getProdutosController } from '../useCases/GetProduto/index'
import { updateProdutoController } from '../useCases/UpdateProduto'
import { deleteProdutoController } from '../useCases/DeleteProduto'

const produtoRouter = Router()

produtoRouter.post('/', async (request, response) => {
    await createProdutoController.handle(request, response)
})

produtoRouter.get('/', async(request, response) => {
    await getProdutosController.handle(request, response)
})

produtoRouter.put('/:id', async(request, response) => {
    await updateProdutoController.handle(request, response)
})

produtoRouter.delete('/:id', async(request, response) => {
    await deleteProdutoController.handle(request, response)
})

export { produtoRouter }