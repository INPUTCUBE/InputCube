package com.inputcube;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class InputcubeApplication {

	public static void main(String[] args) {
		SpringApplication.run(InputcubeApplication.class, args);
	}

}

@RestController
class ContactController {
    @GetMapping("/api/status")
    public String getStatus() {
        return "Inputcube Backend is operational.";
    }
}
