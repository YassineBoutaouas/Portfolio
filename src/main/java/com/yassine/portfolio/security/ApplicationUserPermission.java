package com.yassine.portfolio.security;

public enum ApplicationUserPermission {

    PAGE_VISITOR("PAGE:VISIT");

    private final String permission;

    ApplicationUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}
