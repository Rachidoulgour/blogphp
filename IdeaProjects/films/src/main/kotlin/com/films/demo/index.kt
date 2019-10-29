package com.films.demo

import org.springframework.stereotype.Controller
import org.springframework.ui.Model
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.servlet.ModelAndView

@Controller
class Index {
    @GetMapping("/")
    fun index(model:Model):String{
        model.addAttribute("mensaje", "Rachid")
        return "index";
    }
    @GetMapping("/view1")
    fun view1(model:Model):String{
        model.addAttribute("name", "Rafael")
        return "index1";
    }
    @GetMapping("/view2")
    fun view2():ModelAndView{
        var mav = ModelAndView("index2")
        mav.addObject("name", "Roberto")
        return mav
    }
    @GetMapping("/view3")
    fun view3():ModelAndView{
        var mav = ModelAndView("index3")
        mav.addObject("User", User("rachid", "41254"))
        return mav
    }
    private fun getUsers():List<User>{
        val users = ArrayList<User>();
        users.add(User("raul", "1234"))
        users.add(User("rafa", "456"))
        users.add(User("rachid", "7854"))
        return users
    }
    @GetMapping("/viewList")
    fun viewList():ModelAndView{
        var mav = ModelAndView("index4")
        mav.addObject("Users",getUsers())
        return mav
    }
    @GetMapping("/layoutExemple")
    fun layout():String{
        return "layoutExemple"
    }

}