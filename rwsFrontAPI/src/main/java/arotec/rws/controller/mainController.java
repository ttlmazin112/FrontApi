package arotec.rws.controller;

import java.util.Locale;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class mainController {
	@RequestMapping(value = "/originPage", method = RequestMethod.GET)
	public String originPage(Locale locale, HttpServletRequest req, HttpServletResponse res) {
		
		return "map/originPage"; 
	}

}
