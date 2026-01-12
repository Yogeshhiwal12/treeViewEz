# 📋 Kanban Board – React + TypeScript

A modern, responsive **Kanban Board** built using **React, TypeScript, and dnd-kit**.  
It supports drag-and-drop between columns, inline card editing, and a clean professional UI inspired by popular project management tools.

🔗 **Live Demo:**  
👉 https://react-kanban-boardez.netlify.app/

---

## 🚀 Features

- ✅ Three default columns:
  - Todo
  - In Progress
  - Done
- ➕ Add cards to any column
- 🗑️ Delete cards
- ✏️ Inline editable card titles
- 🧲 Drag & drop cards between columns
- 📐 Preserves card order within columns
- 📱 Fully responsive (mobile-friendly)
- 🎨 Professional, modern UI
- 🧠 Clean component structure:  
  **KanbanBoard → Column → Card**

---

## 🛠 Tech Stack

- **React 18**
- **TypeScript**
- **dnd-kit** (Drag & Drop)
- **Vite**
- **CSS (custom, no UI library)**

---

## 📁 Project Structure

```txt
src/
 ├─ components/
 │   ├─ KanbanBoard.tsx
 │   ├─ Column.tsx
 │   ├─ Card.tsx
 ├─ data/
 │   └─ mockData.ts
 ├─ types/
 │   └─ kanban.ts
 ├─ styles/
 │   └─ kanban.css
 ├─ App.tsx
 └─ main.tsx
