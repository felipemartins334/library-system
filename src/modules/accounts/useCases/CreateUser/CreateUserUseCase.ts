import { injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { AppDataSource } from "../../../../infra/database/data-source";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";

@injectable()
class CreateUserUseCase {

  async execute({age, district, name, number, phone, street}: ICreateUserDTO) {
    const userRepository = AppDataSource.getRepository(User)
    const userAlreadyExists = await userRepository.findOneBy({ name })
    if(userAlreadyExists){
      throw new AppError("User already exists")
    }
    const user = new User(name, age, phone, street, district, number)
    await userRepository.save(user)
  }
}

export { CreateUserUseCase };