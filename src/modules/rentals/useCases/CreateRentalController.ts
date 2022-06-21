import { Request, Response } from "express";
import { container } from 'tsyringe'
import { CreateRentalUseCase } from "./CreateRentalUseCase";

class CreateRentalController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { book_id, user_id, duration } = request.body
    const createRentalUseCase = container.resolve(CreateRentalUseCase)
    await createRentalUseCase.execute({ book_id, duration, user_id })
   
    return response.status(201).send()
  }
}

export { CreateRentalController }