package com.example.springsocial.security.oauth2.user;

import java.util.Map;

/**
 *
 * @author guchenbo
 * @date 2026/1/3
 */
public class GuchenboOAuth2UserInfo extends OAuth2UserInfo {
    public GuchenboOAuth2UserInfo(Map<String, Object> attributes) {
        super(attributes);
    }

    @Override
    public String getId() {
        return attributes.get("userId").toString();
    }

    @Override
    public String getName() {
        return attributes.get("username").toString();
    }

    @Override
    public String getEmail() {
        return attributes.get("email").toString();
    }

    @Override
    public String getImageUrl() {
        return "";
    }
}
