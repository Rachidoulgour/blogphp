package com.store.demo.application.services



import com.store.demo.Products.Domain.entities.User
import java.util.*

interface IUserService {
    fun getUsers():List<User>
    fun addUser(user: User): User
    fun getUserByUsername(username:String): Optional<User>
}