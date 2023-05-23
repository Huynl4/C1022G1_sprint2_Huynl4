package com.example.bakerybe.service.impl;


import com.example.bakerybe.model.Role;
import com.example.bakerybe.model.RoleName;
import com.example.bakerybe.repository.IRoleRepository;
import com.example.bakerybe.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RoleService implements IRoleService {

    @Autowired
    private IRoleRepository iRoleRepository;

    @Override
    public Optional<Role> findByName(RoleName name) {
        return iRoleRepository.findByName(name);
    }
}
