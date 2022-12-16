import { Request, Response } from "express";
import { container } from 'tsyringe'
import { DeleteBookUseCase } from "./DeleteBookUseCase";


class DeleteBookController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { book_id } = request.body

    const deleteBookUseCase = container.resolve(DeleteBookUseCase)
    await deleteBookUseCase.execute(book_id)
    return response.status(200).send()
  }
}

export { DeleteBookController }
