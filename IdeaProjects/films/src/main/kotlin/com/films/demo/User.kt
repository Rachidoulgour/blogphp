package com.films.demo

import org.springframework.web.bind.annotation.GetMapping

class User constructor() {
    var user:String = "";
    var pass:String = "";
    constructor(user:String, pass:String):this()
    {
        this.user = user;
        this.pass = pass;
    }
    override fun toString():String{
        return "User{" +
                "user'" + user + '\'' +
                ", pass='" +pass + '\''+
                '}';
    }

}