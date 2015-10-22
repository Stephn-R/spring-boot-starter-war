/**
 *
 */
package com.base.starter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.DispatcherServletAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.embedded.FilterRegistrationBean;
import org.springframework.boot.context.embedded.ServletRegistrationBean;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

import com.base.starter.cors.SimpleCORSFilter;

/**
 * Main File for running Spring Boot Application
 * @author Stephn-R
 */
@SpringBootApplication
public class Application extends SpringBootServletInitializer {
	/**
	 * Maps all the resource folders for Spring Boot
	 */
	@Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(Application.class);
    }

	/**
	 * Custom function for adding prefix/suffixes to views
	 * @return {@link InternalResourceViewResolver}
	 */
	@Bean
	public InternalResourceViewResolver viewResolver() {
		final InternalResourceViewResolver viewResolver = new InternalResourceViewResolver();
		viewResolver.setPrefix("/WEB-INF/views/");
		viewResolver.setSuffix(".jsp");
		return viewResolver;
	}
	
	/**
	 * Registers a simple CORS Filter to the FilterChain for all API endpoints
	 * @return
	 */
	@SuppressWarnings("serial")
	@Bean
	public FilterRegistrationBean corsFilter() {
		FilterRegistrationBean filterRegBean = new FilterRegistrationBean();
		SimpleCORSFilter corsFilter = new SimpleCORSFilter();
	    filterRegBean.setFilter(corsFilter);
	    // Setup filter configurations
	    List<String> urlPatterns = new ArrayList<String>() {{ add("/api/*"); }};
	    filterRegBean.setUrlPatterns(urlPatterns);
	    return filterRegBean;
	}

	/**
	 * Simple dispatcher servlet creater
	 * @return {@link DispatcherServlet}
	 */
	@Bean
	// Only used when running in embedded servlet
	public DispatcherServlet dispatcherServlet() {
		return new DispatcherServlet();
	}

	/**
	 * Runs the application
	 * @param args
	 */
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
