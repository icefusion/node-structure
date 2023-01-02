
# Example of Node Structure

For this year I will try put some open examples as a suggestions to help the new developers to start with a project or structure.

I like to follow this structure that I propose because I isolate the modules and all classes, interfaces, files related with it.

I am studing DDD, than this can help to apply some knowledge.





## Application Structure

Just to you know how this aplication it's organized, I will try to explain a little.


**Main Structure:**

![App Screenshot](https://images2.imgbox.com/05/8f/ZeKegdVm_o.png)


Basically this is the meaning of our structure.

- **common** - All classes that we can to use during our development. It's like a shared.
- **modules** - All modules of our system. Some people call this folder app, but module make more sense for me.
- **resources** - All files is a resource for our application. For example, email templates.

Inside of modules, we have the main part of this example modules.

![App Screenshot](https://images2.imgbox.com/35/11/1slRllUt_o.png)

The strategy here is isolate all classes of the module.

- **interfaces** - Will have all interfaces related with this specific module.
- **entities** - Will have the entity class of database (schema for mongoose for example). It's just the representation of the table of database.
- **repository** - Will have all classes for make the queries. Basically all queries will be here.
- **services** - Will have all classes for business. Here we don't access the database directly, we call the repository. We can calculate all the things of this user class, apply the business rules.
- **controllers** - Will have all the controllers class to request a resource of our service. This is responsible to receive request and return the response.

## Instalation

You can use npm or yarn to install the project node-structure.

First you have to make the clone of project:

```bash
    git clone git@github.com:icefusion/node-structure.git
```

To access you can use:

```bash
  cd node-structure
```

To install run:

```bash
  npm install
```

To run application:

```bash
  npm run start:local
```
## API Documentation

#### Return a specific user

```http
  GET /user/view/1
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Mandatory**. The User Id that you want to get |


#### Return a list of users

**Get User:** Get a specific user.

```http
  GET /user/list
```


#### Return a list of adult users

**Get User:** Get a specific user.

```http
  GET /user/list/adults
```


#### Return a list of children users

**Get User:** Get a specific user.

```http
  GET /user/list/chidrens
```
## Author

- Github - [@icefusion](https://github.com/icefusion)
- Website - [https://williansfranco.dev](https://williansfranco.dev)
- Linkedin - [@willians-franco](https://www.linkedin.com/in/willians-franco/)

