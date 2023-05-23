package com.example.bakerybe.dto.request;

import javax.validation.constraints.NotBlank;

public class SignInForm {
    @NotBlank(message = "Vui lòng nhập tên đăng nhập.")
    private String username;
    @NotBlank(message = "Vui lòng nhập mật khẩu.")
    private String password;

    public SignInForm() {
    }
    public SignInForm(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
