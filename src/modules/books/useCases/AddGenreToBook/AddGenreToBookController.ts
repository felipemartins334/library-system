import { Request, Response } from "express";
import { container } from 'tsyringe'
import { AddGenreToBookUseCase } from "./AddGenreToBookUseCase";

class AddGenreToBookController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { book_id, genre_id  } = request.body
    const addGenreToBookUseCase = container.resolve(AddGenreToBookUseCase)
    await addGenreToBookUseCase.execute({
        genre_id,
        book_id
      })
   
      return response.status(201).send()
  }
}

export { AddGenreToBookController }