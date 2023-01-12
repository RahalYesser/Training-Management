import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Training } from './training';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  input_key! : string;
  key ="admin2022";

  
  public trainings: Training[] = [];
  public editTraining?: Training ;
  public deleteTraining?: Training ;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
      this.getTrainings();
  }

  public getTrainings(): void {
    this.trainingService.getTrainings().subscribe(
      (response: Training[]) => {
        this.trainings = response;
        console.log(response);
      }
    );
  }
  
  public onAddTraining(addForm: NgForm): void {

    document.getElementById('add-training-form')?.click();
    
    this.trainingService.addTraining(addForm.value).subscribe(

      (response: Training) => {
        console.log(response);
        this.getTrainings();
        addForm.reset();
      }
    
    );
  }

  public onUpdateTraining(training: Training): void {
    this.trainingService.updateTraining(training).subscribe(
      (response: Training) => {
        console.log(response);
        this.getTrainings();
      }
    );
  }

  public onDeleteTraining(trainingId: any): void {
    this.trainingService.deleteTraining(trainingId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTrainings();
      },
    );
  }

  public searchTranings(key: string): void {
    console.log(key);
    const results: Training[] = [];
    for (const training of this.trainings) {
      if (training.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || training.description.toLowerCase().indexOf(key.toLowerCase()) !== -1
      || training.trainer_name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(training);
      }
    }
    this.trainings = results;
    if (results.length === 0 || !key) {
      this.getTrainings();
    }
  }

  public onOpenModal(training: any, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addTrainingModal');
    }
    if (mode === 'edit') {
      this.editTraining = training;
      button.setAttribute('data-bs-target', '#editTrainingModal');
    }
    if (mode === 'delete') {
      this.deleteTraining = training;
      button.setAttribute('data-bs-target', '#deleteTrainingModal');
    }
    
    container!.appendChild(button);
    button.click();
  }


 

}
