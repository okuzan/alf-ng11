import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConstants} from '../common/app.constants';
import {FDEntry} from '../models/fd.model';
import {CardDto, ReportDto} from '../models/card.model';
import {MachineTranslationDto, TranslationCard} from '../models/translation.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiscoveryService {

  constructor(private http: HttpClient) {
  }

  searchInMyStack(text: string): Observable<any> {
    return this.http.get<CardDto[]>(AppConstants.LANG_API + '/cards/search/' + text);
  }

  getReport(text: string, lang: string): Observable<any> {
    return this.http.get<ReportDto>(AppConstants.LANG_API + '/words/' + text + '/' + lang + '/report');
  }

  translate(text: string, from: string, to: string): Observable<HttpResponse<TranslationCard>> {
    return this.http.get<HttpResponse<TranslationCard>>(AppConstants.LANG_API + '/translate/' + from + '/' + to + '/' + text);
  }

  bulkTranslate(text: string, to: string): Observable<any> {
    return this.http.post<HttpResponse<MachineTranslationDto>>(AppConstants.LANG_API + '/translations/' + to + '/bulk', text
    );
  }

  fdSearch(text: string):
    Observable<HttpResponse<FDEntry[]>> {
    return this.http.get<HttpResponse<FDEntry[]>>(AppConstants.FD_BASE_URL + AppConstants.FD_ENDPOINT + AppConstants.FD_LANG_CODE + text);
  }

  random(): Observable<any> {
    return this.http.get(AppConstants.LANG_API + '/words/random');
  }

  getPronunciation(lang: string, text: string): Observable<string> {
    return this.http.post('http://localhost:9998/api/lang/audio/' + lang, text, {
      responseType: 'blob'
    }).pipe(
      map(blob => {
        return window.URL.createObjectURL(blob);
      }));
  }
}
