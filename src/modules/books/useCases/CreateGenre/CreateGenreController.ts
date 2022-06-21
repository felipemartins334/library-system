import { Request, Response } from "express";
import { container } from 'tsyringe'
import { CreateGenreUseCase } from "./CreateGenreUseCase";

class CreateGenreController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { name } = request.body
    const createGenreUseCase = container.resolve(CreateGenreUseCase)
    await createGenreUseCase.execute(name)
   
    return response.status(201).send()
  }
}

export { CreateGenreController }