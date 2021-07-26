package com.thien.controller;

import com.thien.model.City;
import com.thien.model.Country;
import com.thien.service.city.ICityService;
import com.thien.service.country.ICountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Optional;

@Controller
public class CityController {
    @Autowired
    private ICityService cityService;

    @Autowired
    private ICountryService countryService;

    @ModelAttribute("countries")
    public Iterable<Country> countries(){
        return countryService.findAll();
    }
    @GetMapping
    public ModelAndView showList(){
        Iterable<City> cities =  cityService.findAll();
        ModelAndView modelAndView  = new ModelAndView("/city/list");
        modelAndView.addObject("cities",cities);
        return modelAndView;
    }

    @GetMapping("/create-city")
    public ModelAndView showFormCreate(){
        ModelAndView modelAndView = new ModelAndView("/city/create");
        modelAndView.addObject("city",new City());
        return modelAndView;
    }

    @PostMapping("/create-city")
    public ModelAndView saveCity(@ModelAttribute("city") City city){
        cityService.save(city);
        ModelAndView modelAndView = new ModelAndView("/city/create");
        modelAndView.addObject("city",new City());
        modelAndView.addObject("message","New City");
        return modelAndView;
    }

    @GetMapping("/edit-city/{id}")
    public ModelAndView showFormEdit(@PathVariable Long id){
        Optional<City> city = cityService.findById(id);
        if (city.isPresent()){
            ModelAndView modelAndView = new ModelAndView("/city/update");
            modelAndView.addObject("city",city.get());
            return modelAndView;
        }else {
            ModelAndView modelAndView = new ModelAndView("/city/404-error");
            return modelAndView;
        }
    }

    @PostMapping("/edit-city")
    public ModelAndView updateCity(@ModelAttribute("city") City city){
        cityService.save(city);
        ModelAndView modelAndView = new ModelAndView("/city/update");
        modelAndView.addObject("city",city);
        modelAndView.addObject("message", "Update Success");
        return modelAndView;
    }

    @GetMapping("/delete-city/{id}")
    public ModelAndView showFormDelete(@PathVariable Long id){
        Optional<City> city = cityService.findById(id);
        if (city.isPresent()){
            ModelAndView modelAndView = new ModelAndView("/city/delete");
            modelAndView.addObject("city",city.get());
            return modelAndView;
        }else {
            ModelAndView modelAndView = new ModelAndView("/city/404-error");
            return modelAndView;
        }
    }
    @PostMapping("/delete-city")
    public String deleteCity(@ModelAttribute("city") City city){
        cityService.remove(city.getId());
        return "redirect:/";
    }

    @GetMapping("/view-city/{id}")
    public ModelAndView showFormView(@PathVariable Long id){
        Optional<City> city = cityService.findById(id);
        if (city.isPresent()){
            ModelAndView modelAndView = new ModelAndView("/city/view");
            modelAndView.addObject("city",city.get());
            return modelAndView;
        }else {
            ModelAndView modelAndView = new ModelAndView("/city/404-error");
            return modelAndView;
        }
    }
}
