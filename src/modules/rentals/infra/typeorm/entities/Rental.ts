import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Rental {

    constructor(user_id: number, book_id: number, duration: number, start_date: Date, expiration_date: Date){
        this.user_id = user_id
        this.book_id= book_id
        this.duration = duration
        this.start_date = start_date
        this.expiration_date= expiration_date
    }

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    user_id: number

    @Column()
    book_id: number

    @Column()
    duration: number

    @Column()
    start_date: Date

    @Column()
    expiration_date: Date

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

