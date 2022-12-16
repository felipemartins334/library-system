import { Request, Response } from "express";
import { container } from 'tsyringe'
import { DeleteRentalUseCase } from "./DeleteRentalsUseCase";


class DeleteRentalsController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { rental_id } = request.body

    const deleteRentalsUseCase = container.resolve(DeleteRentalUseCase)
    await deleteRentalsUseCase.execute(rental_id)
    return response.status(200).send()
  }
}

export { DeleteRentalsController }
