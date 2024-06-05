import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';
import {storyData} from "../interfaces/types";

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  constructor(private http: HttpClient) { }

  getData(page: number, pageSize: number | undefined): Observable<storyData[]> {
    return this.http.get<storyData[]>(`${environment.url_api}/stories?page=${page}&pageSize=${pageSize}`);
  }
}
