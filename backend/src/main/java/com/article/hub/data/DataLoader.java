package com.article.hub.data;

import com.article.hub.dao.UserInfoRepository;
import com.article.hub.entity.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    UserInfoRepository userInfoRepository;

    @Autowired
    private PasswordEncoder encoder;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        if(!userInfoRepository.findByEmail("admin@gmail.com").isPresent()){
            UserInfo userInfo = new UserInfo();
            userInfo.setName("***");
            userInfo.setEmail("***@gmail.com");
            userInfo.setIsDeletable("false");
            userInfo.setStatus("true");
            userInfo.setPassword(encoder.encode("***"));
            userInfoRepository.save(userInfo);
        }
        System.out.println("=========== You can login with : email (***@gmail.com) and password (***) ===========");
    }
}
