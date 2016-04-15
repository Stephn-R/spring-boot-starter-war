package com.base.starter;

import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

public class WebConfig extends WebMvcConfigurerAdapter {
  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
  	if (!registry.hasMappingForPattern("/webjars/**")) {
  		registry.addResourceHandler("/webjars/**").addResourceLocations(
  				"classpath:/META-INF/resources/webjars/");
  	}
  	if (!registry.hasMappingForPattern("/**")) {
  		registry.addResourceHandler("/**").addResourceLocations(
  				RESOURCE_LOCATIONS);
  	}
  }
}
