# NestJS Fastify MongoDB Boilerplate

This boilerplate project uses NestJS, Fastify, and MongoDB, following best practices for structuring and testing the application. It's designed to get you up-and-running with a solid project structure and defaults.

## Project Structure

This project is structured into main directories: `src/` and `test/`.

- `src/`: This is the root directory of the source code.
  - `common/`: This directory contains common code, utilities, and helpers that can be used across the application.
  - `modules/`: This directory contains the application's modules. Each module is a self-contained unit of functionality, such as user management or payments. Each module has its own controllers, services, and repositories.
    - `module-name/`: Replace `module-name` with the actual name of the module.
      - `controllers/`: Contains the controllers for the module. Controllers handle incoming HTTP requests and send responses.
      - `services/`: Contains the services for the module. Services encapsulate the business logic of the application.
      - `repositories/`: Contains the repositories for the module. Repositories handle data access and abstraction from the main database.

- `test/`: Contains all the test files and testing configurations. Each file corresponds to a specific unit or integration test.

## Getting Started

1. Clone the repository to your local machine.

2. Install the dependencies with `npm install`.

3. Start the development server with `npm run start:dev`.

## How to Contribute

If you want to contribute to this project, here's a quick guide:

1. Fork the repository and clone your fork.

2. Create a branch for your new feature or bug fix.

3. Write your code. If you're adding a new module, create a new directory under `src/modules/` for it. Be sure to write tests for your code under the `test/` directory.

4. Make sure all tests pass and there are no linting errors.

5. Commit your changes and push to your fork.

6. Open a pull request against this repository.

We welcome contributions and are always looking for new contributors!

## Testing

Run `npm test` to run all unit and integration tests.

## Code Style

We use ESLint and Prettier to enforce a consistent code style. Run `npm run lint` to check your code for any style errors. If possible, configure your editor to automatically format your code and fix linting errors.


## Module Generation Script

This project includes a script that automates the creation of a new module with a specific directory structure. Here's how to use it:

1. Make sure you have the NestJS CLI installed globally. If you don't, install it with `npm i -g @nestjs/cli`.

2. Open a terminal in the project root directory.

3. Run the script by typing `./generate_module.sh <module-name>`, replacing `<module-name>` with the name of the module you want to create.

For example, if you want to create a new module named "order", you would type `./generate_module.sh order`. This will create a new directory under `src/modules/` named "order", with subdirectories for controllers, dto, models, repositories, and services. It will also generate an `order.module.ts`, `order.service.ts`, and `order.controller.ts` file in the appropriate directories.

## Editor Configuration

To ensure consistent coding styles and formatting across different editors and IDEs, this project includes an `.editorconfig` file. This file defines coding styles and formatting rules that will be automatically applied by compatible editors.

### Visual Studio Code

To set up the Visual Studio Code editor config for this project, follow these steps:

1. Make sure you have the "EditorConfig for VS Code" extension installed in Visual Studio Code.

2. In the root directory of the project, you will find a `.editorconfig` file. This file contains the coding styles and formatting rules.

3. The extension will automatically read the `.editorconfig` file and apply the defined rules when you open files in Visual Studio Code.

4. Customize the `.editorconfig` file to match your preferred coding styles and formatting rules.


We hope you enjoy using this boilerplate and find it useful. Happy coding!
