package com.junaid.loan_backend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping("/")
    public String index() {

        return "index.html";
    }
    @RequestMapping("/user")
    public String user() {
        return "user.html";
    }


}
