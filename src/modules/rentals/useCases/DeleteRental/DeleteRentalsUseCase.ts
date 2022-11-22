import { injectable } from "tsyringe";
import { AppDataSource } from "../../../../infra/database/data-source";
import { Rental } from "../../infra/typeorm/entities/Rental";

@injectable()
class DeleteRentalUseCase {

  async execute(rental_id: string): Promise<void> {
    const rentalRepository = AppDataSource.getRepository(Rental)
    await rentalRepository.delete(rental_id)
  }
}

export { DeleteRentalUseCase };