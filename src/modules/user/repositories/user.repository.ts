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

  public getData(): IUser[] {
    return this.data;
  }

  public getChildrens(): IUser[] {
    const childrens = this.data.filter((item) => {
      return item.age < 18;
    });

    return childrens;
  }

  public getAdults(): IUser[] {
    const adult = this.data.filter((item) => {
      return item.age > 18;
    });

    return adult;
  }

  public getUser(id: number): IUser | undefined {
    const adult = this.data.find((item) => {
      return item.id === id;
    });

    return adult;
  }
}

export { UserRepository };
