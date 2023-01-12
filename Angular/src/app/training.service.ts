import { Injectable } from '@angular/core';
import { HttpClient ,  HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable,throwError } from 'rxjs';
import { Training } from './training';

@Injectable()

export class TrainingService {

    private REST_API : String ="http://localhost:8081/TRAINING-SERVICE/api/training";
      
     // Http Header
    httpHeaders = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    );
    
    constructor(private httpClient: HttpClient) { }

    
    //Get
    public getTrainings():Observable<any> {
        return this.httpClient.get<Training>(`${this.REST_API}/all`);
    }

    // Add
    addTraining(training: Training): Observable<any> {
     let API_URL = `${this.REST_API}/create`;
     return this.httpClient
      .post<Training>(API_URL, training,httpHeaders)
      
    }

    // Update
    updateTraining(data: any): Observable<any> {
     let API_URL = `${this.REST_API}/update`;
     return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders })
      
    }


     // Delete
    deleteTraining(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete/${id}`;
    return this.httpClient
      .delete(API_URL, { headers: this.httpHeaders })
      
  }

   /* public addTraining(training: Training): Observable<Training> {
        return this.httpClient.post<Training>(`${this.apiServerUrl}/Training/add`, training);
    }*/

   
    
    // Error
  // handleError(error: HttpErrorResponse) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Handle client error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Handle server error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   console.log(errorMessage);
  //   return throwError(() => {
  //     errorMessage;
  //   });
  // }

}
