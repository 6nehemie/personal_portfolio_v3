// utils/loadMarkdown.ts
import fs from 'fs/promises';
import path from 'path';

/**
 * Load markdown content from a file
 * @param markdownFilePath The path to the markdown file
 * @returns The markdown content
 */
const loadMarkdown = async (markdownFilePath: string) => {
  try {
    const filePath = path.resolve(process.cwd(), markdownFilePath);
    const markdownContent = await fs.readFile(filePath, 'utf-8');
    return markdownContent;
  } catch (error) {
    console.error('Error reading markdown file:', error);
    return 'Error loading content'; // Provide a fallback UI
  }
};

export default loadMarkdown;
