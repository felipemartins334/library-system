import { Request, Response } from "express";
import { container } from 'tsyringe'
import { GetUserUseCase } from "./GetUserUseCase";


class GetUserController{
  async handle(request: Request, response: Response): Promise<Response>{

    const name = request.query.name as string
    const getUserUseCase = container.resolve(GetUserUseCase)
    const users = await getUserUseCase.execute(name)

    return response.json(users).send()
  }
}

export { GetUserController }