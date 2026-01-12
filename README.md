# 🌳 React Tree View Component

A **modern, professional Tree View component** built with **React + TypeScript**, supporting hierarchical data with drag & drop, expand/collapse, and dynamic node creation.  
Designed to be clean, intuitive, and enterprise-ready.

🔗 **Live Demo:**  
👉 https://treeviewez.netlify.app/

---

## ✨ Features

- 🌿 **Hierarchical Tree Structure**
  - Unlimited nesting (parent → child → grandchild)
- ➕ **Add Nodes**
  - Add child nodes to any level
- ▸ **Expand / Collapse**
  - Toggle visibility of child nodes
- 🧲 **Drag & Drop**
  - Drag nodes and move them across the hierarchy
  - Safe drag handle (no click conflicts)
- 🎨 **Professional UI**
  - Circular avatars
  - Dotted hierarchy connectors
  - Card-based layout with soft shadows
- 📱 **Responsive**
  - Works smoothly on desktop and mobile

---

## 🛠 Tech Stack

- **React 18**
- **TypeScript**
- **dnd-kit** (Drag & Drop)
- **Vite**
- **Custom CSS (no UI framework)**

---

## 📁 Project Structure

```txt
src/
 ├─ components/
 │   ├─ TreeView.tsx
 │   ├─ TreeNode.tsx
 ├─ data/
 │   └─ mockTreeData.ts
 ├─ types/
 │   └─ tree.ts
 ├─ styles/
 │   └─ tree.css
 ├─ App.tsx
 └─ main.tsx
