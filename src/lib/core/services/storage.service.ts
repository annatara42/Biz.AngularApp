import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  environmentName: string = '';
  environmentUrl: string = 'Debug api';
  apiKey: string = 'F3A4F748-604A-4CDB-83AF-58B20FAC327B';
  token: string =
    'DEV_SHOULD_USE_ID_TOKEN_FROM_ENVIRONMENT_THEY_ARE_DEVELOPING';

  constructor(private http: HttpClient) {
    this.environmentName = environment.environmentName;
    this.environmentUrl = environment.apiUrl;
  }

  jwt(): any {
    const headers = new HttpHeaders({
      ApiKey: this.apiKey,
      Accept: 'application/json',
      ContentType: 'application/json',
      Authorization: 'Bearer ' + this.token,
    });
    const options = { headers };
    return options;
  }

  getUser(): any {
    return this.http
      .get(this.environmentUrl + 'api/user', this.jwt())
      .pipe(
        map((response) => {
          console.log(response, 'this is the response');
        })
      )
      .toPromise()
      .catch(this.error);
  }

  // Create
  createTask(data): Observable<any> {
    const baseUrl = `${this.environmentUrl}/create-task`;
    return this.http.post(baseUrl, data).pipe(catchError(this.error));
  }

  // Read
  showTasks() {
    return this.http.get(`${this.environmentUrl}`);
  }

  // Update
  // updateTask(id, data): Observable<any> {
  //   let baseUrl = `${this.environmentUrl}/update-task/${id}`;
  //   return this.http
  //     .put(baseUrl, data, { headers: this.headers })
  //     .pipe(catchError(this.error));
  // }

  // Delete
  deleteTask(id): Observable<any> {
    var baseUrl = `${this.environmentUrl}/delete-task/${id}`;
    return this.http.delete(baseUrl).pipe(catchError(this.error));
  }

  // Handle Errors
  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
