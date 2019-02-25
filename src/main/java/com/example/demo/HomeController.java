package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String homePage() {
        return "index";
    }

    @GetMapping("/AboutBootCamp")
    public String bootCamp() {
        return "AboutBootCamp";
    }

    @GetMapping("/AboutDeveloper")
    public String developer() {
        return "AboutDeveloper";
    }

    @GetMapping("/html5")
    public String html5() {
        return "html5";
    }

    @GetMapping("/css")
    public String css() {
        return "css";
    }

    @GetMapping("/javascript")
    public String javascript() {
        return "javascript";
    }

    @GetMapping("/mysql")
    public String mysql() {
        return "mysql";
    }

    @GetMapping("/springBoot")
    public String spring() {
        return "SpringBoot";
    }

    @GetMapping("/BootStrap")
    public String bootstrap() {
        return "BootStrap";
    }


    //java file start here
    @GetMapping("/Abstraction")
    public String abstraction() {
        return "Abstraction";
    }

    @GetMapping("/Polymorphism")
    public String polymorphism() {
        return "Polymorphism";
    }

    @GetMapping("/Composition")
    public String composition() {
        return "Composition";
    }

    @GetMapping("/Inheritance")
    public String inheritance() {
        return "Inheritance";
    }

    @GetMapping("/Encapsulation")

    public String encapsulation() {
        return "Encapsulation";
    }
    @GetMapping("/CoreJava")
    public String coreJava(){
        return "CoreJava";
    }
    //other controller
    @GetMapping("Github")
    public String gitHub(){
        return "Github";
    }
    @GetMapping("ProgramDesign")
    public String programDesign(){
        return "ProgramDesign";
    }

}
