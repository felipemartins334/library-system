import dayjs from "dayjs";
import { injectable } from "tsyringe";
import { AppError } from "../../../errors/AppError";
import { AppDataSource } from "../../../infra/database/data-source";
import { Book } from "../../books/infra/typeorm/entities/Book";
import { ICreateRentalDTO } from "../dtos/ICreateRentalDTO";
import { Rental } from "../infra/typeorm/entities/Rental";

@injectable()
class CreateRentalUseCase {

  async execute({book_id, duration, user_id }: ICreateRentalDTO) {

    const rentalRepository = AppDataSource.getRepository(Rental)
    const bookRepository = AppDataSource.getRepository(Book)

    const book = await bookRepository.findOneBy({ id: book_id })

    if(book.quantity===0){
        throw new AppError("All copies of this book were borrowed")        
    }
    
    book.quantity -= 1

    bookRepository.save(book)

    const start_date = dayjs()
    const end_date = start_date.add(duration, 'day')

    const start_dateToDate = start_date.toDate()
    const end_dateToDate = end_date.toDate()

    const rental = new Rental(user_id, book_id, duration, start_dateToDate, end_dateToDate)
    await rentalRepository.save(rental)
  }
}

export { CreateRentalUseCase };