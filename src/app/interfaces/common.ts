export interface IApiResponse {
  result: boolean;
  message: string;
  data: any;
}

// export interface IEvent {
//   id: number;
//   name: string;
//   description: string;
//   date: string;
//   time: string;
//   location: string;
//   price: number;
//   imageUrl: string;
// }

export interface IEvent {
  eventId: number;
  eventName: string;
  startDate: Date;
  startTime: string;
  endDate: Date;
  endTime: string;
  capacity: number;
  organizerName: string;
  organizerId: number;
  description: string;
  userId: number;
  price: number;
  location: string;
  imageUrl: string;
}