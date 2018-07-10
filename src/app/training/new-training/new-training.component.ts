import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


import { TrainingService } from '../training.service';
import { Exercise } from './../exercise.module';
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  exercises: Exercise[];
  isLoading = true;
  private exerciseSubscription: Subscription;
  private loadingSubscription: Subscription;

  constructor(
    private trainingService: TrainingService,
    private uiService: UIService
  ) { }

  ngOnInit() {
    this.loadingSubscription = this.uiService.loadingStateChanged.subscribe(
      isLoading => {
        this.isLoading = isLoading;
      } 
    );
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(
      exercises =>{         
        this.exercises = exercises; 
      });
      this.fetchExercises();    
  }

  ngOnDestroy() {
    if(this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
    if(this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }    
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);    
  }

  fetchExercises() {
    this.trainingService.fetchAvailableExercises(); 
  }

}
