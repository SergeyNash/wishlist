export interface Gift {
  id: string;
  name: string;
  description: string;
  reserved: boolean;
  imageUrl: string;
  reservedBy?: string;
  storeUrl: string;
  price: string;
}

export interface NotificationState {
  visible: boolean;
  message: string;
}