import { injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { AppDataSource } from "../../../../infra/database/data-source";
import { ICreateBookDTO } from "../../dtos/ICreateBookDTO";
import { Book } from "../../infra/typeorm/entities/Book";

@injectable()
class CreateBookUseCase {

  async execute({author, title, volume, year, genre}: ICreateBookDTO) {
    const bookRepository = AppDataSource.getRepository(Book)
    const bookAlreadyExists = await bookRepository.findOneBy({ title })
    
    if(bookAlreadyExists){
      throw new AppError("Book already exists")
    }

    const book = new Book(title, author, year, volume, genre)
    await bookRepository.save(book)
  }
}

export { CreateBookUseCase };