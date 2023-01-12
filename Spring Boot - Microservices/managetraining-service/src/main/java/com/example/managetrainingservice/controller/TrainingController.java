package com.example.managetrainingservice.controller;

import com.example.managetrainingservice.model.Training;
import com.example.managetrainingservice.service.TrainingService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/training")
@AllArgsConstructor
public class TrainingController {

    private final TrainingService trainingService;

    @GetMapping("/all")
    public ResponseEntity<List<Training>> getAlLlTrainings () {
        List<Training> trainings = trainingService.findAllTrainings();
        return new ResponseEntity<>(trainings, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Training> getTrainingById (@PathVariable("id") Long id) {
        Training training = trainingService.findTrainingById(id);
        return new ResponseEntity<>(training, HttpStatus.OK);
    }


    @PostMapping("/add")
    public ResponseEntity<Training> addTraining(@RequestBody Training training){
        Training newTraining = trainingService.addTraining(training);
        return new ResponseEntity<>(newTraining, HttpStatus.OK);
    }



    @PutMapping("/update/{id}")
    public ResponseEntity<Training> updateTraining(@PathVariable Long id,@RequestBody Training training) {
        Training updateTraining = trainingService.updateTraining(id,training);
        return new ResponseEntity<>(updateTraining, HttpStatus.OK);
    }


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteTraining(@PathVariable Long id) {
        trainingService.deleteTraining(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
