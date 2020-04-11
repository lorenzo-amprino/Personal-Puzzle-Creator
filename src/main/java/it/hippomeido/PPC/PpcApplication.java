package it.hippomeido.PPC;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
public class PpcApplication {

	public static void main(String[] args) {
		SpringApplication.run(PpcApplication.class, args);
	}


}
