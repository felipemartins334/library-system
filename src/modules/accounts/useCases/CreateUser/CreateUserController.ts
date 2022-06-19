import { Request, Response } from "express";
import { container } from 'tsyringe'
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController{
  async handle(request: Request, response: Response): Promise<Response>{
    const { name, age, district, number, phone, street  } = request.body
    const createUserUseCase = container.resolve(CreateUserUseCase)
    await createUserUseCase.execute({
        name,
        age,
        district,
        number,
        phone,
        street
      })
   
      return response.status(201).send()
  }
}

export { CreateUserController }