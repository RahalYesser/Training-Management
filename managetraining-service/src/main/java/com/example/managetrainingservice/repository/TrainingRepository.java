package com.example.managetrainingservice.repository;

import com.example.managetrainingservice.model.Training;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TrainingRepository extends JpaRepository<Training, Long> {
    void deleteTrainingById(Long id);

    Optional<Training> findTrainingById(Long id);
}
