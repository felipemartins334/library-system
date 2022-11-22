import { injectable } from "tsyringe";
import { User } from '../../infra/typeorm/entities/User'
import { AppDataSource } from "../../../../infra/database/data-source";

@injectable()
class GetUserUseCase {

  async execute(name: string ): Promise<User[]> {
    const usersRepository = AppDataSource.getRepository(User)
    
    if(name){ 
      const users = await usersRepository
      .createQueryBuilder("user")
      .where("user.name like :name", { name: `%${name}%` })
      .getMany()
      return users
 }

  return await usersRepository.find()

   
  }
}

export { GetUserUseCase };