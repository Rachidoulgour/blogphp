package com.store.demo.application.services.implementation

import com.store.demo.Products.Application.services.Implementations.IProductService
import com.store.demo.Products.Domain.dao.IProductDao
import com.store.demo.Products.Domain.entities.Product
import com.store.demo.Products.Domain.entities.User
import com.store.demo.application.domain.dao.IUserDao
import com.store.demo.application.services.IUserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.util.*


@Service
class UserServiceImp: IUserService {

    @Autowired
    private lateinit var userDao: IUserDao
    @Transactional(readOnly = true)
    override fun getUsers():List<User> = userDao.findAll() as List<User>
    override fun addUser(user: User): User = userDao.save(user)
    override fun getUserByUsername(username: String): Optional<User> = userDao.findUserByUsername(username)
}
