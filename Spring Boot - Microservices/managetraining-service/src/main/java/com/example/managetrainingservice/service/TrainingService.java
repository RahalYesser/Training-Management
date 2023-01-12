package com.example.managetrainingservice.service;

import com.example.managetrainingservice.model.Training;
import com.example.managetrainingservice.repository.TrainingRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class TrainingService {

    @Autowired
    private TrainingRepository trainingRepository;

    public Training  addTraining(Training training) {
        return trainingRepository.save(training);
    }

    public List<Training> findAllTrainings() {
        return trainingRepository.findAll();
    }

    public Training updateTraining(Long id, Training training) {
        return trainingRepository.findById(id)
                .map(t -> {
                    t.setName(t.getName());
                    t.setDate(t.getDate());
                    t.setImageURL(t.getImageURL());
                    t.setDescription(t.getDescription());
                    t.setTrainer_name(t.getTrainer_name());
                    return trainingRepository.save(t);
                }).orElseThrow(() -> new RuntimeException("Training was not found"));
    }

    public void deleteTraining(Long id) {
        trainingRepository.deleteTrainingById(id);
    }

    public Training findTrainingById(Long id){
        return trainingRepository.findTrainingById(id)
                .orElseThrow(() -> new RuntimeException("Training by id " + id + "was not found"));
    }


}
