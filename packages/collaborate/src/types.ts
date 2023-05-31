export type TodoAwareness = Map<
  number,
  {
    user: {
      name: string;
      color: string;
    };
    cursor: {
      x: number | undefined;
      y: number | undefined;
    };
  }
>;

export interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}
