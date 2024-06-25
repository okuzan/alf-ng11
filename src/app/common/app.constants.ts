import {environment} from '../../environments/environment';

export class AppConstants {
  private static API_BASE_URL = environment.apiUrl;
  public static API_URL = AppConstants.API_BASE_URL + '/api/v1';
  public static AUTH_API = AppConstants.API_URL + '/auth';
  public static CARD_API = AppConstants.API_URL + '/cards';
  public static FRIEND_API = AppConstants.API_URL + '/friend';
  public static SUGGESTION_API = AppConstants.API_URL + '/cards/suggest';
  public static LANG_API = AppConstants.API_URL + '/lang';
  public static FD_BASE_URL = 'https://api.dictionaryapi.dev/api/v2';
  public static FD_ENDPOINT = 'entries';
  public static FD_LANG_CODE = 'en';
  private static OAUTH2_URL = AppConstants.API_URL + '/oauth2/authorization';
  private static REDIRECT_URL = '?redirect_uri=' + environment.feUrl + '/login';
  public static GOOGLE_AUTH_URL = AppConstants.OAUTH2_URL + '/google' + AppConstants.REDIRECT_URL;
  public static FACEBOOK_AUTH_URL = AppConstants.OAUTH2_URL + '/facebook' + AppConstants.REDIRECT_URL;
  public static APPLE_AUTH_URL = AppConstants.OAUTH2_URL + '/apple' + AppConstants.REDIRECT_URL;
}
