# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

all used dependency

# Create project
npm create vite@latest employee-task-management

# Move into project
cd employee-task-management

# Install dependencies
npm install

# Install Tailwind
npm install tailwindcss @tailwindcss/vite

# Install React Router
npm install react-router-dom

# Install Axios
npm install axios

# Install Redux Toolkit
npm install @reduxjs/toolkit react-redux

# Install Icons
npm install react-icons

# Start project
npm run dev



src

│

├── pages
      Actual Screens

├── components
      Reusable UI

├── layouts
      Common Structure

├── routes
      Navigation

├── hooks
      Reusable Logic

├── features
      Redux Modules

├── api
      Axios

├── services
      Business Logic

├── app
      Redux Store

├── utils
      Helpers

├── assets
      Images




      | Topic              | Where You'll Use It   |
| ------------------ | --------------------- |
| useState           | Forms                 |
| useEffect          | API Calls             |
| useRef             | Login Input Focus     |
| useMemo            | Search Filter         |
| useCallback        | Table Buttons         |
| useReducer         | Login Form (optional) |
| useContext         | Theme/User (optional) |
| Custom Hook        | useFetch/useAuth      |
| React.memo         | Task Row              |
| Lazy Loading       | Dashboard Modules     |
| Nested Routing     | Dashboard/Profile     |
| Outlet             | Dashboard Layout      |
| React Router       | Complete Navigation   |
| Protected Route    | Authentication        |
| Role Authorization | Admin/Employee        |
| Axios Interceptor  | JWT Token             |
| Redux Toolkit      | User + Tasks          |
| createAsyncThunk   | API Calls             |
| Error Boundary     | Dashboard             |
| Loading Spinner    | API Loading           |


Day 1
Project setup (Vite)
React Router
Folder structure
Navbar & Layout
Day 2
Login page
ProtectedRoute
Nested routing
Outlet
Day 3
Redux Toolkit
Auth Slice
Login Flow
Day 4
Task CRUD UI
API Integration
Axios Interceptor
Day 5
createAsyncThunk
Loading
Error Handling
Day 6
Lazy Loading
React.memo
useMemo
useCallback
Day 7
Custom Hooks
Role Authorization
Error Boundary
Day 8
Code Cleanup
README
Deploy (optional)