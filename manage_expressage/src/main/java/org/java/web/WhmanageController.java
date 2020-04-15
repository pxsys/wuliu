package org.java.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class WhmanageController {

    @GetMapping("/forward/{target}")
    public String forward(@PathVariable("target") String target){

        return "/"+target;
    }
}
