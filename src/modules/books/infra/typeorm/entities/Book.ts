import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Book {

    constructor(title: string, author: string, year: string, volume: string, genre: string){
        this.title = title
        this.author= author
        this.year = year
        this.volume= volume
        this.genre = genre
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
    volume: string

    @Column()
    genre: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

