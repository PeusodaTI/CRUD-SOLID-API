import { v4 as uuidv4 } from 'uuid'

export class Produto {
    constructor(
        public nome: string,
        public valor: number,
        public descricao: string,
        public readonly id?: string
    ) {
        
        if (!id) {
            this.id = uuidv4()
        }
    }
}