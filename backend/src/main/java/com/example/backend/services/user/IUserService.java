package com.example.backend.services.user;

import com.example.backend.dtos.AuthenticationResponseDTO;
import com.example.backend.dtos.LoginDTO;
import com.example.backend.dtos.RegisterDTO;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.NonNull;
import org.springframework.stereotype.Service;


public interface IUserService {

    AuthenticationResponseDTO login(@NonNull LoginDTO loginDTO);

    AuthenticationResponseDTO register(@NonNull RegisterDTO newUserDTO);
    AuthenticationResponseDTO refreshToken(@NonNull HttpServletRequest request,
                                           @NonNull HttpServletResponse response);
}
