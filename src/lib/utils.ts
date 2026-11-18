/** A link is real unless it is empty or still a placeholder. */
export const isReal = (u?: string): boolean => !!u && !/example\.com|your-handle/.test(u);

/** Light twin of a project image: /img/x.jpg becomes /img/light/x.jpg. */
export const lightCover = (path: string): string => path.replace("/img/", "/img/light/");
