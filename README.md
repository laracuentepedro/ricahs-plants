# Rica's Plants

Rica's Plants is a React-based web application built with Vite. The app is designed to provide a seamless user experience for managing plants, with features such as user authentication, session management, and a plant list page. The project is a work in progress, and this document outlines the features implemented so far.

---

## Features

### 1. **User Authentication**
The app includes a robust user authentication system with the following features:
- **Sign In Page**: Users can log in with their username and password.
  - Displays error messages for invalid credentials.
  - Redirects users to the plant list page upon successful login.
- **Sign Up Page**: New users can create an account by providing a username and password.
  - Validates input fields:
    - Username must be longer than 3 characters.
    - Password must be at least 4 characters long.
    - Password and confirm password fields must match.
  - Displays error messages for invalid input or server errors.
  - Redirects users to the sign-in page after successful account creation.

---

### 2. **Session Management**
The app uses a session-based authentication system:
- **Session Token Storage**: The session token is stored in `localStorage` for persistent login.
- **Session Context**: A global context (`SessionContext`) is used to manage the user's session state across the app.
  - Provides the username of the logged-in user.
  - Includes methods for signing in, signing out, and managing session tokens.

---

### 3. **Plant List Page**
- A placeholder page (`PlantListPage`) is implemented to display a list of plants.
- Includes a navigation bar (`NavBar`) that displays the app's logo and the logged-in user's username.

---

### 4. **Navigation**
The app uses `react-router-dom` for client-side routing:
- **Routes**:
  - `/`: Sign In Page
  - `/sign-up`: Sign Up Page
  - `/plants`: Plant List Page
- **Redirects**:
  - If a user is already signed in, they are redirected to the plant list page when accessing the sign-in or sign-up pages.

---

### 5. **Shared Components**
The app includes reusable components to ensure consistency and modularity:
- **NavBar**: Displays the app's logo and the logged-in user's username.
- **RedirectToPlantsIfSignedIn**: A higher-order component that redirects signed-in users to the plant list page.
- **FormContainer**: A layout component for authentication forms, with a responsive design and a background image.
- **AuthForm**: A dynamic form component for handling user input in the sign-in and sign-up pages.
  - Includes input validation and a loading spinner for the submit button.

---

### 6. **API Integration**
The app integrates with a backend API for user authentication:
- **API Fetch Utility**: A utility function (`apiFetch`) is used to make API requests.
  - Automatically includes the API key and session token in the request headers.
- **User Service**: A service module (`user.js`) provides methods for:
  - Creating a new user (`createUser`).
  - Creating a new session (`createSession`).

---

### 7. **Styling**
The app uses Tailwind CSS for styling:
- **Custom Fonts**: The app includes two custom fonts:
  - `Lato` for general text.
  - `Playfair Display` for headings.
- **Responsive Design**: The app is designed to be responsive and works well on different screen sizes.
- **Custom Components**: Tailwind classes are used to style components like buttons, forms, and navigation bars.

---

### 8. **Development Setup**
The app is built with Vite, providing a fast development environment with hot module replacement (HMR). Key development features include:
- **ESLint Configuration**: The app uses ESLint with plugins for React and React Hooks to enforce coding standards.
- **Path Aliases**: The app uses `vite-jsconfig-paths` to enable path aliases for cleaner imports.

---

## Project Structure
The project is organized into the following directories:
- `src/`: Contains the source code for the app.
  - `pages/`: Includes the main pages of the app (e.g., SignInPage, SignUpPage, PlantListPage).
  - `shared-components/`: Contains reusable components like `NavBar` and `RedirectToPlantsIfSignedIn`.
  - `services/`: Includes service modules for API integration and session management.
  - `contexts/`: Contains the `SessionContext` for global state management.
- `public/`: Contains static assets like the app's favicon.
- `index.html`: The main HTML file for the app.

---

## Installation and Setup
To run the app locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/laracuentepedro/ricahs-plants.git
   cd ricahs-plants



2. Install dependencies:
    ```npm install



3. Start the development server:
    ```npm run dev



4. Open the app in your browser at http://localhost:5173.



## Scripts
The following scripts are available in the package.json file:

npm run dev: Starts the development server.
npm run build: Builds the app for production.
npm run preview: Previews the production build.
npm run lint: Runs ESLint to check for code quality issues.


## Technologies Used

Frontend: React, React Router, Tailwind CSS
Build Tool: Vite
Linting: ESLint
API Integration: Fetch API
State Management: React Context API


## Future Features
The app is a work in progress, and the following features are planned for future development:

Displaying a detailed list of plants on the Plant List Page.
Adding CRUD functionality for managing plants.
Implementing user roles and permissions.
Enhancing the UI/UX with additional animations and interactivity.


## Updates
This README will be updated as new features are added to the app.
