package arotec.rws.controller;

import java.util.Locale;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller
public class dbManagementController {

	@RequestMapping(value = "/pgOraPage", method = RequestMethod.GET)
	public String pgOraPage(Locale locale, HttpServletRequest req, HttpServletResponse res) {
		
		return "wijmo/pgOraPage"; 
	}
	
	@RequestMapping(value = "/adminPage", method = RequestMethod.GET)
	public String adminPage(Locale locale, HttpServletRequest req, HttpServletResponse res) {
		
		return "wijmo/adminPage"; 
	}
}
