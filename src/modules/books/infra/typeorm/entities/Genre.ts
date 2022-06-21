import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Genre {

    constructor(name: string){
        this.name = name
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

}

