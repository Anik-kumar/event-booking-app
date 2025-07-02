export interface IApiResponse<T> {
  result: boolean;
  message: string;
  data: T;
}

export interface IEvent {
  id: number;
  name: string;
  description: string;
  date: string;
  time: string;
  location: string;
  price: number;
  imageUrl: string;
}