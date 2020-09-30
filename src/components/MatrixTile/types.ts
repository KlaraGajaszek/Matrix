import { Task } from "../../models/Task";
import { TaskCategory } from "../../models/TaskCategory";

export type MatrixTileProps = {
  categoryTitle: string;
  taskCategory: Task[];
  categoryName: TaskCategory;
};
