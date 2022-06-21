import { injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { AppDataSource } from "../../../../infra/database/data-source";
import { Genre } from "../../infra/typeorm/entities/Genre";

@injectable()
class CreateGenreUseCase {

  async execute(name: string) {
    const genreRepository = AppDataSource.getRepository(Genre)
    const genreAlreadyExists = await genreRepository.findOneBy({ name })
    
    if(genreAlreadyExists){
      throw new AppError("Genre already exists")
    }

    const genre = new Genre(name)
    await genreRepository.save(genre)
  }
}

export { CreateGenreUseCase };