import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User[] | Error {
    const user = this.usersRepository.findById(user_id);

    if (!user || !user.admin) throw new Error("User do not permission!");

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
