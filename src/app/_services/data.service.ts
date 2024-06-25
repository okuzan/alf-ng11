import {Injectable} from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs';
import {AppConstants} from '../common/app.constants';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private userInfoKey = 'userInfo';
  private wordlistKey = 'wordlist';

  constructor(private http: HttpClient,
              private snack: MatSnackBar
  ) {
    this.requestWordlist().then(r => {
      this._wordlist = r;
    });
  }

  _wordlist: string[];

  get wordlist() {
    if (!this._wordlist) {
      try {
        let wordlist = JSON.parse(localStorage.getItem(this.wordlistKey));
        if (!wordlist) {
          this.requestWordlist().then(r => {
              return r;
            }
          );
        } else {
          console.log('WORDLIST RESTORED FROM LOCAL STORAGE');
        }
      } catch (e) {
        this.requestWordlist().then(r => {
            return r;
          }
        );
      }
    }
    return this._wordlist;
  }

  _user: User;

  set user(user) {
    this._user = user;
  }

  async requestWordlist(): Promise<string[]> {
    return fetch('assets/txt/wordlist.txt')
      .then(response => response.text())
      .then(data => {
        let result = data.toString().replace(/\r/g, '').split('\n');
        this._wordlist = result;
        return result;
      });
  }

  deleteUserInfo() {
    localStorage.removeItem(this.userInfoKey);
  }

  getProfile(): Observable<any> {
    return this.http.get(AppConstants.API_URL + '/system-info/active-profiles');
  }

  showToast(msg: string): void {
    this.snack.open(msg, '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      direction: 'rtl',
      panelClass: 'simple-snack-bar'
    });
  }
}
