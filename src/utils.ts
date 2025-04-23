import { existsSync, lstatSync, mkdirSync, writeFileSync } from 'node:fs';

export const checkIsDirectory = (filePath: string): boolean => {
  return existsSync(filePath) && lstatSync(filePath).isDirectory();
};

export const createDirectory = (directoryPath: string): void => {
  mkdirSync(directoryPath);
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const writeToFile = (filePath: string, data: any): void => {
  writeFileSync(filePath, data);
};
