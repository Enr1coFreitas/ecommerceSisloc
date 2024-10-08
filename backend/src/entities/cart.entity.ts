import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
import { Product } from './product.entity'

@Entity()
export class Cart {

    @PrimaryColumn('uuid')
    readonly id: string

    @Column('float')
    subtotal: number

    constructor() {
        if (!this.id) {
            this.id = uuid()
        }
    }
    @ManyToMany(type => Product, {
        eager: true,
    })@JoinTable()
    products: Product[]    
}
