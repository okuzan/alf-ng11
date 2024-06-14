export interface Friend {
  status: string;
  id: number;
  username: string;
  email: string;
}

export interface User {
  id: number;
  streak: number;
  username: string;
  email: string;
  uiLang: string;
  roles: string[];
  tags: string[];
  targetLangs: string[];
  curLang: string;
  profilePicLink: string;
  background: string;
  fluentLangs: string[];
}

export interface FriendshipActionDto {
  idInitiator: number;
  idAcceptor: number;
  action: string;
}

export interface FriendshipDto {
  requesterId: number;
  requesteeId: number;
  status: string;
  created: string;
  updated: string;
}
