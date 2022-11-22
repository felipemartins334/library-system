import { Request, Response } from "express";
import { container } from 'tsyringe'
import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { author, quantity, title, volume, year, genre  } = request.body
    const createBookUseCase = container.resolve(CreateBookUseCase)
    await createBookUseCase.execute({
        author, 
        quantity, 
        title, 
        volume, 
        year,
        genre
      })
   
      return response.status(201).send()
  }
}

export { CreateBookController }
