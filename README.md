# Healthcare Dashboard

A modern healthcare dashboard built with React, Vite, and Tailwind CSS. This application allows healthcare providers to manage patient information with a clean and intuitive interface, featuring local storage for data persistence.

## Features

- Patient information management
- Local storage integration for data persistence
- File upload with base64 storage
- File download capability
- Real-time form validation
- Responsive design
- Animated UI components using Framer Motion

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)
- VS Code (recommended) or any preferred code editor

## Getting Started

1. Create a new project directory:
```bash
mkdir healthcare-dashboard
cd healthcare-dashboard
```

2. Initialize a new Vite project:
```bash
npm create vite@latest . -- --template react
```

3. Install dependencies:
```bash
npm install framer-motion react-hot-toast tailwindcss postcss autoprefixer
```

4. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

5. Start the development server:
```bash
npm run dev
```

## Project Structure

```
healthcare-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx    # Patient records display
│   │   ├── Header.jsx      # Application header
│   │   └── PatientForm.jsx # Patient information form
│   ├── App.jsx            # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css        # Global styles
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Local Storage Implementation

The application uses browser's localStorage to:
- Store patient information persistently
- Save uploaded files as base64 strings
- Retrieve data on application load
- Enable file downloads

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally

## Development in VS Code

1. Open VS Code:
```bash
code .
```

2. Install recommended VS Code extensions:
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense

3. Start development:
   - Open terminal in VS Code (Ctrl + `)
   - Run `npm run dev`
   - Begin editing files in the `src` directory
   - Changes will automatically reload in the browser

## Building for Production

1. Run the build command:
```bash
npm run build
```

2. The built files will be in the `dist` directory

## Data Persistence

All patient data and uploaded files are automatically saved to localStorage:
- Data persists across browser sessions
- Files are stored as base64 strings
- Downloads are handled through data URL conversion

## Browser Support

The application works best in modern browsers that support:
- LocalStorage API
- FileReader API
- Blob URLs
- ES6+ JavaScript features

## License

This project is licensed under the MIT License