import { IUser } from "../interfaces/user.entity.interface";

class UserRepository {
  private data: IUser[] = [
    {
      id: 1,
      name: "Will",
      age: 42
    },
    {
      id: 2,
      name: "Diana",
      age: 34
    },
    {
      id: 3,
      name: "Diogo",
      age: 15
    },
    {
      id: 4,
      name: "Pietra",
      age: 0
    },
  ];

  public getData() {
    return this.data;
  }

  public getChildrens() {
    const childrens = this.data.filter((item) => {
      return item.age < 18;
    });

    return childrens;
  }

  public getAdults() {
    const adult = this.data.filter((item) => {
      return item.age > 18;
    });

    return adult;
  }

  public getUser(id: number) {
    const adult = this.data.find((item) => item.id === id);

    return adult;
  }
}

export const userRepository = new UserRepository();
