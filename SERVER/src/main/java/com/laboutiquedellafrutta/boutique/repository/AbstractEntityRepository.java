package com.laboutiquedellafrutta.boutique.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface AbstractEntityRepository<T> extends JpaRepository<T, Long>, CrudRepository<T, Long> {

}
