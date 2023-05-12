import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {map, Observable} from 'rxjs';

export interface ITask {
  id?: string
  title: string
  date?: string
}

export interface ICreateResponse {
  name: string
}

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  static url = 'https://orginizer-1d05c-default-rtdb.europe-west1.firebasedatabase.app/tasks'

  constructor(private http: HttpClient) {
  }

  getTask(date: moment.Moment): Observable<ITask[]> {
    return this.http.get<ITask[]>(`${TasksService.url}/${date.format('DD-MM-YYYY')}.json`)
      .pipe(
        map(tasks => {
          if (!tasks) {
            return []
          }
          // @ts-ignore
          return Object.keys(tasks).map(key => ({...tasks[key], id: key})).reverse()
        })
      )
  }

  removeTask(task: ITask) {
    return this.http.delete(`${TasksService.url}/${task.date}/${task.id}.json`)
  }

  createTask(task: ITask): Observable<ITask> {
    return this.http.post<ICreateResponse>(`${TasksService.url}/${task.date}.json`, task)
      .pipe(
        map(response => {
          return {...task, id: response.name}
        })
      )
  }
}
