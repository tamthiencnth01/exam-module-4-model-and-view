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
@Table(name = "cities")
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String area;
    @Column(nullable = false)
    private String population;
    @Column(nullable = false)
    private String gdp;
    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;

    public City(String name, String area, String population, String gdp, String description, Country country) {
        this.name = name;
        this.area = area;
        this.population = population;
        this.gdp = gdp;
        this.description = description;
        this.country = country;
    }
}
