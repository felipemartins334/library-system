import { injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { AppDataSource } from "../../../../infra/database/data-source";
import { IAddGenreToBookDTO } from "../../dtos/IAddGenreToBookDTO";
import { Book } from "../../infra/typeorm/entities/Book";
import { Genre } from "../../infra/typeorm/entities/Genre";

@injectable()
class AddGenreToBookUseCase {

  async execute({genre_id, book_id}: IAddGenreToBookDTO) {
    const bookRepository = AppDataSource.getRepository(Book)
    const genreRepository = AppDataSource.getRepository(Genre)
    
    const book = await bookRepository.findOne( 
      {
        relations: {
            genres: true,
        },
        where: {
          id: book_id
        }
      })
    if(!book){
        throw new AppError("Book doesn't exist")
    }

    const genre = await genreRepository.findOneBy( { id: genre_id } )
    if(!genre){
        throw new AppError("Genre doesn't exist")
    }

    book.genres.push(genre)
    await bookRepository.save(book)
  }
}

export { AddGenreToBookUseCase };