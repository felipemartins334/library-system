import { injectable } from "tsyringe";
import { AppDataSource } from "../../../../infra/database/data-source";
import { User } from "../../infra/typeorm/entities/User";


@injectable()
class DeleteUserUseCase {

  async execute(user_id: string): Promise<void> {
    const userRepository = AppDataSource.getRepository(User)
    await userRepository.delete(user_id)
  }
}

export { DeleteUserUseCase };