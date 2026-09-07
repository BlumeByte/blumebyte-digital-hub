import type { Project } from "@/data/projects";

export type ProductVisual = {
  title: string;
  src: string;
  alt: string;
  category: string;
};

export function getProductVisual(projects: readonly Project[], activeIndex: number): ProductVisual {
  if (!projects.length) {
    throw new Error("At least one product is required to select a visual.");
  }

  const index = Math.min(projects.length - 1, Math.max(0, activeIndex));
  const project = projects[index];

  return {
    title: project.title,
    src: project.image,
    alt: project.imageAlt,
    category: project.category,
  };
}
