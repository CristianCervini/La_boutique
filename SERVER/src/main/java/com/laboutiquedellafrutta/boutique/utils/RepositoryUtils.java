package com.laboutiquedellafrutta.boutique.utils;

import java.util.Optional;

import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.laboutiquedellafrutta.boutique.repository.AbstractEntityRepository;

@Service
public class RepositoryUtils {
	
	public <T> void save(T entity, AbstractEntityRepository<? super T> repository) {
		repository.save(entity);
	}
	
	public <T> void deleteById(Long id, AbstractEntityRepository<? super T> repository) {
		repository.deleteById(id);
	}
	
	public <T> Optional<T> findOne(T entity, AbstractEntityRepository<? super T> repository) {
		Example<T> example = Example.of(entity);
		return repository.findOne(example);
	}
	
}
