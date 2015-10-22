package com.base.starter.api;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.base.starter.api.models.User;

@RestController
@RequestMapping("/api")
public class ExampleRESTController {
	private static final Logger logger = LoggerFactory.getLogger(ExampleRESTController.class);
	
	@RequestMapping("/test")
	public @ResponseBody User getUser(HttpServletRequest req, HttpServletResponse resp) {
		logger.info("Returning User: Stephen");
		return new User("Stephen");
	}
}
