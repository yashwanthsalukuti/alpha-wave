"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcMusic,
  FcSportsMode,
  FcOldTimeCamera,
  FcSalesPerformance,
  FcMultipleDevices,
  FcFilmReel,
  FcPuzzle,
} from "react-icons/fc";
import { IconType } from "react-icons/lib";
import { CategoryItem } from "./category-item";

interface CategeroisProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  Music: FcMusic,
  Photography: FcOldTimeCamera,
  Accounting: FcSalesPerformance,
  Engineering: FcEngineering,
  Fitness: FcSportsMode,
  "Computer Science": FcMultipleDevices,
  Filming: FcFilmReel,
  Gaming: FcPuzzle,
};

export const Categories = ({ items }: CategeroisProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
