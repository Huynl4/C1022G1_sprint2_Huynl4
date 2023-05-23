package com.example.bakerybe.service;
import com.example.bakerybe.model.Role;
import com.example.bakerybe.model.RoleName;

import java.util.Optional;

public interface IRoleService {
    Optional<Role> findByName(RoleName name);
}
