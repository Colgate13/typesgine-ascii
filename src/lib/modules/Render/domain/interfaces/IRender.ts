export interface IRenderFor {
  write(data: string): void;
  clear(): void;
  exit(): void;
}

export interface IRender {
  write(data: string): void;
  clear(): void;
  exit(): void;
}