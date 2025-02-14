import { uuid } from 'uuidv4'

export class Produto {
    constructor(
        public nome: string,
        public valor: number,
        public descricao: string,
        public readonly id?: string
    ) {
        
        if (!id) {
            this.id = uuid()
        }
    }
}