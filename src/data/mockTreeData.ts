import type { TreeNodeType } from "../types/tree";

export const mockTreeData: TreeNodeType[] = [
  {
    id: "1",
    label: "Root 1",
    children: [
      {
        id: "1-1",
        label: "Child 1",
        children: [],
      },
    ],
  },
  {
    id: "2",
    label: "Root 2",
    children: [],
  },
];
