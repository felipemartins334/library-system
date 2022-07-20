import { Request, Response } from "express";
import { container } from 'tsyringe'
import { GetBooksUseCase } from "./GetBooksUseCase"

class GetBooksController{
  async handle(request: Request, response: Response): Promise<Response>{
    const title = request.query.title as string
    const getBooksUseCase = container.resolve(GetBooksUseCase)
    const books = await getBooksUseCase.execute(title)
   
    return response.status(200).json(books)
  }
}

export { GetBooksController }