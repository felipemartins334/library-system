import { injectable } from "tsyringe";
import { AppDataSource } from "../../../../infra/database/data-source";
import { Book } from "../../infra/typeorm/entities/Book";


@injectable()
class DeleteBookUseCase {

  async execute(book_id: string): Promise<void> {
    const bookRepository = AppDataSource.getRepository(Book)
    await bookRepository.delete(book_id)
  }
}

export { DeleteBookUseCase };