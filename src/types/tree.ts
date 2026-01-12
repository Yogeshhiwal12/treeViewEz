export type TreeNodeType = {
  id: string;
  label: string;
  children: TreeNodeType[];
  isExpanded?: boolean;
};
