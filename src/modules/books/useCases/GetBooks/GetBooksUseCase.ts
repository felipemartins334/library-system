import { injectable } from "tsyringe";
import { AppDataSource } from "../../../../infra/database/data-source";
import { Book } from "../../infra/typeorm/entities/Book";

@injectable()
class GetBooksUseCase {

  async execute(title: string): Promise<Book[]> {
    const bookRepository = AppDataSource.getRepository(Book)
    if(title){
        const books = await bookRepository
        .createQueryBuilder("book")
        .where("book.title like :title", { title: `%${title}%` })
        .getMany()
        console.log(books)
        return books
    }
    else{
        const books = await bookRepository.find()
        return books
    }
  }
}

export { GetBooksUseCase };