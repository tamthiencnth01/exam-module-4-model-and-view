package com.thien.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "countries")
public class Country {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @OneToMany(targetEntity = City.class, fetch = FetchType.EAGER)
    private List<City> cities;

    public Country(String name, List<City> cities) {
        this.name = name;
        this.cities = cities;
    }
}
