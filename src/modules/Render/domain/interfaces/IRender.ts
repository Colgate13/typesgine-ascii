export interface IRenderFor {
  write(data: string): void;
  clear(): void;
}

export interface IRender {
  write(data: string): void;
  clear(): void;
}