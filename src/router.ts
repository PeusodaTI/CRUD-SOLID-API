import { Router } from 'express'
import { createProdutoController } from './useCases/CreateProduto'
import { getProdutosController } from './useCases/GetProduto/index'

const router = Router()

router.post('/produtos', async (request, response) => {
    await createProdutoController.handle(request, response)
})

router.get('/produtos', async(request, response) => {
    await getProdutosController.handle(request, response)
})

export { router }