import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {switchMap} from 'rxjs';
import {DateService} from '../../services/date.service';
import {ITask, TasksService} from '../../services/tasks.service';

@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent implements OnInit {

  @ViewChild('inputTask') inputTask: ElementRef
  @ViewChild('sectionContainer') scrollContainer: ElementRef

  form: FormGroup
  tasks: ITask[] = []

  constructor(public dateService: DateService, private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.dateService.date.pipe(
      switchMap(value => {
        return this.tasksService.getTask(value);
      })
    ).subscribe(tasks => {
      this.tasks = tasks
    })

    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    })
  }

  submit(): void {
    const {title} = this.form.value
    const task: ITask = {
      title,
      date: this.dateService.date.value.format('DD-MM-YYYY')
    }

    this.tasksService.createTask(task).subscribe(task => {
      this.tasks.unshift(task)
      this.form.reset()
      this.inputTask.nativeElement.style.minHeight = '10px'
    }, err => console.error(err))
  }

  removeTask(task: ITask): void {
    this.tasksService.removeTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id)
    }, err => console.error(err))
  }

  autoSizeToInputArea(): void {
    this.inputTask.nativeElement.style.minHeight =`${this.inputTask.nativeElement.scrollHeight}px`
  }
}
