# Portfolio

## Description

This project is a modern, single-page personal portfolio website designed to showcase professional work, skills, and contact information. It serves as a central hub for visitors to learn about the owner, view their projects, and get in touch. The application is built with a clean and responsive design, ensuring a great user experience across different devices.

## Tech Stack

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast and lightweight build tool for modern web development.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **JavaScript:** The core programming language for the application logic.

## Features

- **Hero Section:** A welcoming introduction to the visitor.
- **About Section:** A brief overview of the owner's background and skills.
- **Projects Showcase:** A dedicated section to display and describe personal or professional projects.
- **Contact Form:** An easy way for visitors to reach out.
- **Responsive Design:** The layout is optimized for both desktop and mobile viewing.
- **Data-Driven Content:** Section content is managed through simple JavaScript objects, making it easy to update.

## Project Structure (High-Level)

The source code is organized to separate concerns and maintain a clean architecture.

- `src/` → Contains all the main application source code.
- `src/assets/` → Static assets like fonts and images.
- `src/components/` → Reusable UI components (e.g., `Navbar`, `Footer`).
- `src/data/` → Data files that populate the content for each section.
- `src/layouts/` → The main layout structure of the application.
- `src/sections/` → The major page sections (e.g., `Hero`, `About`, `Projects`).

## Getting Started

Follow these instructions to set up and run the project locally.

1.  **Install dependencies:**
    Open your terminal and run the following command to install the necessary packages.

    ```bash
    npm install
    ```

2.  **Run the development server:**
    This command will start the Vite development server, typically on `http://localhost:5173`.

    ```bash
    npm run dev
    ```

3.  **Build for production (optional):**
    To create an optimized production build, run:
    ```bash
    npm run build
    ```
    The output files will be located in the `dist/` directory.

## Notes

- The content displayed on the website is populated from the files in the `src/data/` directory. To change the text for the Hero, About, Projects, or other sections, you can modify the corresponding JavaScript files in that folder.

## License

This project does not currently specify a license.
