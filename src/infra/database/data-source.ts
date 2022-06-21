import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../../modules/accounts/infra/typeorm/entities/User"
import { Book } from "../../modules/books/infra/typeorm/entities/Book"
import { Genre } from "../../modules/books/infra/typeorm/entities/Genre"
import { Rental } from "../../modules/rentals/infra/typeorm/entities/Rental"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "sqluser",
    password: "password",
    database: "library",
    entities: [User, Book, Genre, Rental],
    synchronize: true,
    logging: false,
})

AppDataSource.initialize()
.then(() => {
    
})
.catch((error) => console.log(error))