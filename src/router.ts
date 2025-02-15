import { Router } from 'express'
import { createProdutoController } from './useCases/CreateProduto'

const router = Router()

router.post('/produtos', async (request, response) => {
    await createProdutoController.handle(request, response)
})

export { router }