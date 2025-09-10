interface IChat {
  id: string;
  contactId: string;
  pinned: boolean;
  createTs: string;
  updateTs: string;
  messages: IChatMessage[];
  archived: boolean;
}

interface IChatMessage {
  id: string;
  text: string;
  createTs: string;
  updateTs: string;
  edited: boolean;
  type: string;
  status: string;
  replyTo?: string;
}

interface IUser {
  id: string;
  username: string;
  phoneNumber: number;
  password: string;
  firstName: string;
  secondName: string;
  avatar: string;
  createAccountTs: string;
  lastSeenTs: string;
}
