import { Request, Response } from "express";
import { container } from 'tsyringe'
import { GetRentalsUseCase } from "./GetRentalsUseCase";


class GetRentalsController{
  async handle(request: Request, response: Response): Promise<Response>{
    const name = request.query.name as string

    const getRentalsUseCase = container.resolve(GetRentalsUseCase)
    const rentals = await getRentalsUseCase.execute(name)
    return response.json(rentals).send()
  }
}

export { GetRentalsController }