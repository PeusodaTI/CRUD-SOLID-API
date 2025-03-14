import { Router } from 'express'

import { createProdutoController } from './useCases/CreateProduto'
import { getProdutosController } from './useCases/GetProduto/index'
import { updateProdutoController } from './useCases/UpdateProduto'
import { deleteProdutoController } from './useCases/DeleteProduto'

const router = Router()

router.post('/produtos', async (request, response) => {
    await createProdutoController.handle(request, response)
})

router.get('/produtos', async(request, response) => {
    await getProdutosController.handle(request, response)
})

router.put('/produtos', async(request, response) => {
    await updateProdutoController.handle(request, response)
})

router.delete('/produtos', async(request, response) => {
    await deleteProdutoController.handle(request, response)
})

export { router }