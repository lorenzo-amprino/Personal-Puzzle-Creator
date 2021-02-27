import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Puzzle } from 'src/app/model/puzzle';
import { Router } from '@angular/router';
import { CommonResponse } from 'src/app/common/commonResponse';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Template } from 'src/app/model/template';


const url = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class PuzzleService {

  constructor(
    private http: HttpClient,
    private router: Router) { }

  private _createdPuzzle: Puzzle;

    public get createdPuzzle(): Puzzle {
        return this._createdPuzzle;
    }

    public set createdPuzzle(createdPuzzle: Puzzle) {
        this._createdPuzzle = createdPuzzle;
    }


  createPuzzle(request: any): Observable<CommonResponse<Puzzle>>{
    return this.http.post<CommonResponse<Puzzle>>(`${url}/puzzle/create`, request )
    .pipe(
      tap( (res: CommonResponse<Puzzle>) => {
      this.createdPuzzle = res.data;
      return res.data;
    })
    )
  }

  updatePuzzle(request:any){
    this.http.post<CommonResponse<Puzzle>>(`${url}/puzzle/update`, request )
    .subscribe((res: CommonResponse<Puzzle>) => {
      console.log("saved")
    })
  }

  deletePuzzle(id: string) {
    this.http.post<CommonResponse<boolean>>(`${url}/puzzle/delete`, id)
      .subscribe()
  }

  getPuzzle(id: string): Observable<CommonResponse<Puzzle>> {
    return this.http.get<CommonResponse<Puzzle>>(`${url}/puzzle?id=${id}`)
  }

  getTemplates(): Observable<CommonResponse<Template[]>> {
    return this.http.get<CommonResponse<Template[]>>(`${url}/puzzle/template`)
  }
  
}
