export interface UserInfoDto {
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
