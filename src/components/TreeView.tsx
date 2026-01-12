import { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import type { DragEndEvent } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import type { TreeNodeType } from "../types/tree";
import { mockTreeData } from "../data/mockTreeData";
import TreeNode from "./TreeNode";
import "../styles/tree.css";

export default function TreeView() {
  const [tree, setTree] = useState<TreeNodeType[]>(
    mockTreeData.map(n => ({ ...n, isExpanded: true }))
  );

  const addChild = (parentId: string) => {
    const name = prompt("Enter node name");
    if (!name) return;

    const newNode: TreeNodeType = {
      id: crypto.randomUUID(),
      label: name,
      children: [],
      isExpanded: true,
    };

    const addRecursively = (nodes: TreeNodeType[]): TreeNodeType[] =>
      nodes.map(n =>
        n.id === parentId
          ? {
              ...n,
              isExpanded: true,
              children: [...n.children, newNode],
            }
          : {
              ...n,
              children: addRecursively(n.children),
            }
      );

    setTree(prev => addRecursively(prev));
  };

  /* =========================
     TOGGLE EXPAND / COLLAPSE
  ========================= */

  const toggleExpand = (id: string) => {
    const toggle = (nodes: TreeNodeType[]): TreeNodeType[] =>
      nodes.map(n =>
        n.id === id
          ? { ...n, isExpanded: !n.isExpanded }
          : { ...n, children: toggle(n.children) }
      );

    setTree(prev => toggle(prev));
  };

  /* =========================
     DRAG & DROP
  ========================= */

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setTree(prev => {
      let draggedNode: TreeNodeType | null = null;

      // 1️⃣ Remove dragged node from tree
      const removeNode = (nodes: TreeNodeType[]): TreeNodeType[] =>
        nodes
          .filter(n => {
            if (n.id === active.id) {
              draggedNode = n;
              return false;
            }
            return true;
          })
          .map(n => ({
            ...n,
            children: removeNode(n.children),
          }));

      const cleanedTree = removeNode(prev);
      if (!draggedNode) return prev;

      // 2️⃣ Insert dragged node under drop target
      const insertNode = (nodes: TreeNodeType[]): TreeNodeType[] =>
        nodes.map(n =>
          n.id === over.id
            ? {
                ...n,
                isExpanded: true,
                children: [...n.children, draggedNode!],
              }
            : {
                ...n,
                children: insertNode(n.children),
              }
        );

      return insertNode(cleanedTree);
    });
  };

  /* =========================
     HELPERS
  ========================= */

  const getAllIds = (nodes: TreeNodeType[]): string[] =>
    nodes.flatMap(n => [n.id, ...getAllIds(n.children)]);


  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={getAllIds(tree)}>
        <div className="tree-container">
          {tree.map(node => (
            <TreeNode
              key={node.id}
              node={node}
              level={0}
              onAdd={addChild}
              onToggle={toggleExpand}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
