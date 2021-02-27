import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rivista } from 'src/app/model/Rivista';
import { CommonResponse } from 'src/app/common/commonResponse';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const url = environment.baseURL;


@Injectable({
  providedIn: 'root'
})
export class RivistaService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  rivista: Rivista;
  rivisteSalvate: Rivista[];

  createRivista(request: Rivista){
    this.http.post<CommonResponse<Rivista>>(`${url}/rivista/create`, request )
    .subscribe((res: CommonResponse<Rivista>) => {
      this.rivista = res.data;
      this.router.navigate([`/modificaRivista/${res.data.id}`]);
    })
  }

  updateRivista(request: Rivista){
    this.http.post<CommonResponse<Rivista>>(`${url}/rivista/update`, request )
    .subscribe((res: CommonResponse<Rivista>) => {
      this.rivista = res.data;
    })
  }

  getRiviste(){
    this.http.get<CommonResponse<Rivista[]>>(`${url}/rivista/getRiviste`)
    .subscribe((res: CommonResponse<Rivista[]>) =>{
      this.rivisteSalvate = res.data;
    })
  }

  deleteRivista(id: String) {
    this.http.post<CommonResponse<Boolean>>(`${url}/rivista/delete`, id)
      .subscribe((res: CommonResponse<boolean>) => {
        if(res.data){
          this.getRiviste();
        }
      })
  }

  getRivista(id: String): Observable<CommonResponse<Rivista>>{
    return this.http.get<CommonResponse<Rivista>>(`${url}/rivista?id=${id}`)
  }
}
