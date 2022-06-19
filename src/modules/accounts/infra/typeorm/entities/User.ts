import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {

    constructor(name: string, age: number, phone: string, street: string, district: string, number: number){
        this.name = name
        this.age= age
        this.phone = phone
        this.street = street
        this.district= district
        this.number= number
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    name: string

    @Column()
    age: number

    @Column()
    phone: string

    @Column()
    street: string

    @Column()
    district: string

    @Column()
    number: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

