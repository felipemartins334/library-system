import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Book {

    constructor(title: string, author: string, year: string, quantity: number, volume: string){
        this.title = title
        this.author= author
        this.year = year
        this.quantity = quantity
        this.volume= volume
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    title: string

    @Column()
    author: string

    @Column()
    year: string

    @Column()
    quantity: number

    @Column()
    volume: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

