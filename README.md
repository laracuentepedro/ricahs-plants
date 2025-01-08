# Rica's Plants

Rica's Plants is a React-based web application built with Vite. The app serves as the frontend for a fictional e-commerce store specializing in plants. It provides a seamless user experience for browsing and purchasing plants, with features such as user authentication, session management, a dynamic plant list page, and more.

This app was built as the capstone project for the amazing Alvin Zablan's react formula course. 

You can access a live version of this app here:

https://ricas-plants.netlify.app


---

## Features

### 1. **User Authentication**
The app includes a user authentication system with the following features:
- **Sign In Page**: Users can log in with their username and password.
  - Displays error messages for invalid credentials.
  - Shows success message when signing in after creating a new account.
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
- **Protected Routes**: Implements route protection with automatic redirects:
  - Signed-in users are redirected from auth pages to the plant list.
  - Signed-out users are redirected to the sign-in page.

---

### 3. **Plant List Page**
- Displays a grid of available plants with the following features:
  - Plant images with dynamic pot color selection
  - Plant name and price information
  - Interactive pot color swatches for each plant
  - Loading state with animated spinner while fetching data
- Implements a clean, responsive layout with maximum width constraints
- Integrates with backend API to fetch plant data

---

### 4. **Navigation & UI**
- **NavBar Component**: 
  - Displays the app's logo and branding
  - Shows the logged-in user's username
  - Features a user menu dropdown with sign-out functionality
- **Responsive Design**:
  - Adapts to different screen sizes
  - Shows/hides decorative elements based on viewport
  - Maintains consistent spacing and layout across devices

---

### 5. **Styling & Design System**
- **Custom Fonts**: 
  - `Lato` for general text and UI elements
  - `Playfair Display` for headings and brand elements
- **Color Scheme**:
  - Primary: Emerald theme for brand identity
  - Supporting colors for UI elements and states
- **UI Components**:
  - Custom form containers with responsive design
  - Loading spinners for async operations
  - Interactive buttons and dropdowns
  - Error and success message displays

---

### 6. **API Integration**
- **API Fetch Utility**: A centralized utility for API requests that:
  - Automatically handles authentication headers
  - Manages session tokens
  - Provides consistent error handling
- **Service Modules**:
  - User service for authentication operations
  - Plant service for fetching plant data
  - Structured API endpoints for different operations

---

### 7. **Shopping Cart Functionality**
- **Cart Management**: Users can add plants to their shopping cart.
  - Displays the number of items in the cart.
  - Allows users to view and manage cart contents.
  - Provides a checkout process for purchasing plants.

---

### 8. **User Profile Management**
- **Profile Page**: Users can view and update their profile information.
  - Allows users to change their password.
  - Displays order history and details.

---

### 9. **Plant Care Instructions and Tips**
- **Plant Details Page**: Provides detailed information about each plant.
  - Includes care instructions and tips for maintaining healthy plants.

---

## Development Setup
The app is built with modern tooling:
- **Vite**: For fast development and optimized builds
- **ESLint**: Configured for React with additional plugins
- **Tailwind CSS**: For utility-first styling
- **Path Aliases**: For clean import statements

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/laracuentepedro/ricahs-plants.git
   cd ricahs-plants
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173)

### Scripts

- `npm run dev`: Starts the development server
- `npm run build`: Builds the app for production
- `npm run preview`: Previews the production build
- `npm run lint`: Runs ESLint to check code quality

## Technologies Used

- **Frontend**: React 18, React Router v7
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Icons**: Font Awesome
- **HTTP Client**: Fetch API
- **Authentication**: JWT-based sessions

## Future Features
Planned enhancements include:
- Plant search and filtering capabilities
- Order processing system

## Updates
This README will be updated as new features are added to the app.
