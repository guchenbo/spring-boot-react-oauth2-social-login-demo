package com.example.springsocial.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author guchenbo
 * @date 2026/1/3
 */
@RestController
@RequestMapping("/")
public class IndexController {

    @GetMapping
    public String index() {
        return "index";
    }
}
