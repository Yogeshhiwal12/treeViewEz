import type { TreeNodeType } from "../types/tree";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  node: TreeNodeType;
  level: number;
  onAdd: (parentId: string) => void;
  onToggle: (id: string) => void;
};

export default function TreeNode({ node, level, onAdd, onToggle }: Props) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({ id: node.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    marginLeft: level * 28,
  };

  const hasChildren = node.children.length > 0;

  return (
    <div ref={setNodeRef} style={style} className="tree-node">
      <div className="node-row">
        <span
          {...attributes}
          {...listeners}
          title="Drag"
          style={{
            cursor: "grab",
            color: "#b0b7c3",
            fontSize: 16,
            marginRight: 6,
            userSelect: "none",
          }}
        >
          ⠿
        </span>
        {hasChildren ? (
          <button
            onClick={() => onToggle(node.id)}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              fontSize: 14,
              marginRight: 6,
              color: "#555",
            }}
          >
            {node.isExpanded ? "▾" : "▸"}
          </button>
        ) : (
          <span style={{ width: 14 }} />
        )}
        <div className="node-content">
          <div
            className="node-avatar"
            style={{
              background:
                level === 0
                  ? "linear-gradient(135deg, #4facfe, #00c6ff)"
                  : "linear-gradient(135deg, #6fdc6f, #3dbb3d)",
            }}
          >
            {node.label.charAt(0).toUpperCase()}
          </div>
          <span className="node-text">{node.label}</span>
          <button
            className="add-btn"
            onClick={() => onAdd(node.id)}
            title="Add child"
          >
            +
          </button>
        </div>
      </div>
      {node.isExpanded &&
        node.children.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            level={level + 1}
            onAdd={onAdd}
            onToggle={onToggle}
          />
        ))}
    </div>
  );
}
