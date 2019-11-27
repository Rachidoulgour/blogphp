package com.store.demo.application.infrastructure.controller

import com.store.demo.Products.Domain.entities.User
//import com.store.demo.application.services.IUserServiceAuth
import com.store.demo.application.domain.dao.IUserDao
import com.store.demo.application.services.IUserService
import org.apache.juli.logging.LogFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*
import javax.servlet.http.HttpServletRequest


@RestController

@RequestMapping("api/v2/user")
class UsersController {
    @Autowired
    private lateinit var userService: IUserService
    @CrossOrigin(origins = ["http://localhost:3000"])
    @RequestMapping("/", "GET", "application/json")
    fun getUsers(): ResponseEntity<List<User>> = ResponseEntity(userService.getUsers(), HttpStatus.OK)

    @CrossOrigin(origins = ["http://localhost:3000"])
    @PostMapping("/")
    fun addUser(@RequestBody user: User):ResponseEntity<User>{
        val result: User = userService.addUser(user)
        return when(result){
            null -> ResponseEntity(result, HttpStatus.BAD_REQUEST)
            else -> ResponseEntity(result, HttpStatus.CREATED)
        }
    }
    @CrossOrigin(origins = ["http://localhost:3000"])
    @GetMapping("/username/{username}")
    fun getUserByUsername(@PathVariable username:String):ResponseEntity<User>
    {

        val result: Optional<User> = userService.getUserByUsername(username)
        return result.map {
            res-> ResponseEntity(res, HttpStatus.OK)
        }
                .orElse(ResponseEntity(HttpStatus.NO_CONTENT))
    }




}