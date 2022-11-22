import { injectable } from "tsyringe";
import { AppDataSource } from "../../../../infra/database/data-source";
import { Rental } from "../../infra/typeorm/entities/Rental";
import dayjs from "dayjs";

@injectable()
class GetRentalsUseCase {

  async execute(name: string ): Promise<Rental[]> {

    
    if(name){ 
        const rentals = await AppDataSource.manager.query(`SELECT rental.id, rental.start_date, rental.expiration_date, rental.duration, user.name, book.title FROM user INNER JOIN rental ON rental.user_id = user.id INNER JOIN book ON rental.book_id = book.id WHERE user.name LIKE '${name}%'`)
        
        rentals.forEach(rental => {
          
          rental.start_date = dayjs(rental.start_date).format("DD-MM-YYYY")
          rental.expiration_date = dayjs(rental.expiration_date).format("DD-MM-YYYY")
        })

        return rentals

 }


    const rentals = await AppDataSource.manager.query("SELECT rental.id, rental.start_date, rental.expiration_date, rental.duration, user.name, book.title FROM rental INNER JOIN user ON rental.user_id = user.id INNER JOIN book ON rental.book_id = book.id")
    rentals.forEach(rental => {
      rental.start_date = dayjs(rental.start_date).format("DD-MM-YYYY")
      rental.expiration_date = dayjs(rental.expiration_date).format("DD-MM-YYYY")
    })
    return rentals
  }
}

export { GetRentalsUseCase };