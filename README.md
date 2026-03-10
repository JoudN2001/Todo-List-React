# 📝 React To-Do List App

A fully functional, responsive To-Do list application built with React and Material-UI. This project features full CRUD (Create, Read, Update, Delete) operations, task filtering, and data persistence, all wrapped in a clean, Arabic-supported (RTL) user interface.

## 🚀 Features

* **Complete CRUD Operations:** Users can add new tasks, edit existing ones, mark them as complete, and delete them.
* **Dynamic Filtering:** Instantly filter tasks by status (All, Completed, Incomplete) using a segmented control group.
* **Data Persistence:** Tasks are automatically saved to the browser's `localStorage` so data is never lost on refresh.
* **Custom Modals & Alerts:** Features custom-built confirmation popups and auto-dismissing success notifications.
* **Responsive RTL UI:** Built specifically with Right-to-Left (RTL) alignment for Arabic text support using Material-UI's layout system.

## 🛠️ Technologies Used

* **React.js** (Functional Components & Hooks)
* **Material-UI (MUI)** (Components, Theming, and CSS-in-JS via the `sx` prop)
* **JavaScript (ES6+)**
* **HTML5 / CSS3**

## 🧠 What I Learned

Building this project was a massive leap forward in my React journey. Here are the key technical concepts I learned and applied:

## 📲 Screenshot

![Screenshot](public/Screenshot/Screenshot%201.jpeg)
![Screenshot](public/Screenshot/Screenshot%202.jpeg)
![Screenshot](public/Screenshot/Screenshot%203.jpeg)
![Screenshot](public/Screenshot/Screenshot%204.jpeg)
![Screenshot](public/Screenshot/Screenshot%205.jpeg)

### 1. Advanced State Management & Context API
I moved beyond basic state and implemented the **Context API** (`useContext`) to prevent "prop drilling." I successfully created global providers for both the Task List data and the Active Filter state, allowing deeply nested child components to access and update the UI seamlessly.

### 2. React Hooks (`useState` & `useEffect`)
* Mastered `useState` for handling local component states (like toggling modals and capturing form input).
* Utilized `useEffect` to synchronize the application state with the browser's `localStorage` on initial render.
* Used `useEffect` combined with JavaScript's `setTimeout` and cleanup functions to build self-dismissing, memory-leak-free alert notifications.

### 3. React Portals (`createPortal`)
Instead of relying on standard DOM hierarchies, I learned how to use `react-dom/createPortal` to render my Edit/Delete modals and Alert notifications completely outside the main DOM tree. This ensured my popups were immune to parent CSS restrictions like `overflow: hidden` or `z-index` bugs.

### 4. Material-UI Mastery & CSS Specificity
* Learned how to leverage MUI's `Grid` and `Box` components to build complex, responsive flexbox layouts.
* Mastered the `sx` prop for writing nested CSS and applying dynamic styling based on React state (e.g., turning task cards green when completed).
* Overcame CSS specificity challenges, specifically learning how to use parent selectors (`&`) and target pseudo-classes like `&:last-child` to override default MUI component styles.

### 5. JavaScript Array Methods
Deepened my understanding of higher-order array methods by heavily utilizing `.map()` to dynamically render UI components and `.filter()` to instantly sort tasks and process delete operations without mutating the original state.

### 6. Event Bubbling & Propagation
Encountered and solved issues with DOM event bubbling by implementing `e.stopPropagation()`. This allowed me to create modals that close when clicking the background overlay, but remain open when interacting with the modal card itself.

## 💻 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/JoudN2001/Todo-List-React.git