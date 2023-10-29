export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
  //status: 'PUBLIC' | 'PRIVATE';
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
