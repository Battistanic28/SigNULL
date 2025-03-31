
export interface UserType {
      id: number;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      isAdmin: boolean;
    }

export interface MessageType {
  id: number;
  senderId: number;
  recieverId: number;
  content: string;
  createdAt: Date;
}