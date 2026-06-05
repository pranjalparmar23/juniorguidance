package com.article.hub.serviceImpl;

import com.article.hub.dao.ArticleRepository;
import com.article.hub.dao.UserInfoRepository;
import com.article.hub.entity.Article;
import com.article.hub.entity.Category;
import com.article.hub.entity.UserInfo;
import com.article.hub.service.ArticleService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Objects;
import java.util.Optional;

@Service
public class ArticleServiceImpl implements ArticleService {

    Logger  log = LoggerFactory.getLogger(ArticleServiceImpl.class);

    @Autowired
    ArticleRepository articleRepository;

    @Autowired
    UserInfoRepository userInfoRepository;

    @Override
    public ResponseEntity<?> addNewArticle(Article article) {
        try{
            UserInfo currentUser = getCurrentUser();
            if(Objects.isNull(currentUser)){
                return new ResponseEntity<>("{\"message\":\"Unauthorized.\"}", HttpStatus.UNAUTHORIZED);
            }
            if(!Objects.isNull(article)){
                String errorKeyValue = article.checkForNullValues();
                if(Objects.isNull(errorKeyValue)){
                    article.setPublication_date(new Date());
                    article.setCategory(new Category(article.getCategoryId()));
                    article.setCreatedBy(currentUser);
                    articleRepository.save(article);
                    return new ResponseEntity<>("{\"message\":\"Article added successfully.\"}", HttpStatus.OK);
                } else{
                    return new ResponseEntity<>("{\"message\":\"Invalid value for ("+errorKeyValue+")\"}", HttpStatus.BAD_REQUEST);
                }
            }
            return new ResponseEntity<>("{\"message\":\"Invalid Data.\"}", HttpStatus.BAD_REQUEST);
        } catch(Exception ex){
            log.error("Exception in addNewArticle : {}", ex.getMessage());
        }
        return new ResponseEntity<>("{\"message\":\"Something went wrong.\"}", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> getAllArticle() {
        try{
            UserInfo currentUser = getCurrentUser();
            if(Objects.isNull(currentUser)){
                return new ResponseEntity<>("{\"message\":\"Unauthorized.\"}", HttpStatus.UNAUTHORIZED);
            }
            if(isAdmin(currentUser)){
                return new ResponseEntity<>(articleRepository.getAllArticle(null), HttpStatus.OK);
            }
            return new ResponseEntity<>(articleRepository.getAllArticleByUser(currentUser.getId(), null), HttpStatus.OK);
        } catch(Exception ex){
            log.error("Exception in getAllArticle : {}", ex.getMessage());
        }
        return new ResponseEntity<>("{\"message\":\"Something went wrong.\"}", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> getAllPublishedArticle() {
        try{
            return new ResponseEntity<>(articleRepository.getAllArticle("Published"), HttpStatus.OK);
        } catch(Exception ex){
            log.error("Exception in getAllPublishedArticle : {}", ex.getMessage());
        }
        return new ResponseEntity<>("{\"message\":\"Something went wrong.\"}", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> updateArticle(Article article) {
        try{
            UserInfo currentUser = getCurrentUser();
            if(Objects.isNull(currentUser)){
                return new ResponseEntity<>("{\"message\":\"Unauthorized.\"}", HttpStatus.UNAUTHORIZED);
            }
            String errorKeyValue = article.checkForNullValues();
            if(Objects.isNull(errorKeyValue) && !Objects.isNull(article.getId())){
                Optional<Article> optionalArticle = articleRepository.findById(article.getId());
                if(!optionalArticle.isPresent()){
                    return new ResponseEntity<>("{\"message\":\"Article id does not found .\"}", HttpStatus.NOT_FOUND);
                }
                Article dbArticle = optionalArticle.get();
                if(!canManage(dbArticle, currentUser)){
                    return new ResponseEntity<>("{\"message\":\"You can update only your own article.\"}", HttpStatus.FORBIDDEN);
                }
                dbArticle.setTitle(article.getTitle());
                dbArticle.setContent(article.getContent());
                dbArticle.setCategory(new Category(article.getCategoryId()));
                dbArticle.setPublication_date(new Date());
                dbArticle.setStatus(article.getStatus());
                articleRepository.save(dbArticle);
                return new ResponseEntity<>("{\"message\":\"Article updated successfully.\"}", HttpStatus.OK);
            } else{
                return new ResponseEntity<>("{\"message\":\"Invalid value for ("+errorKeyValue+").\"}", HttpStatus.BAD_REQUEST);
            }
        } catch(Exception ex){
            log.error("Exception in updateArticle : {}", ex.getMessage());
        }
        return new ResponseEntity<>("{\"message\":\"Something went wrong.\"}", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> deleteArticle(Integer id) {
        try{
            UserInfo currentUser = getCurrentUser();
            if(Objects.isNull(currentUser)){
                return new ResponseEntity<>("{\"message\":\"Unauthorized.\"}", HttpStatus.UNAUTHORIZED);
            }
            if(!Objects.isNull(id)){
                Optional<Article> optionalArticle = articleRepository.findById(id);
                if(!optionalArticle.isPresent()){
                    return new ResponseEntity<>("{\"message\":\"Article id does not found.\"}", HttpStatus.NOT_FOUND);
                }
                Article article = optionalArticle.get();
                if(!canManage(article, currentUser)){
                    return new ResponseEntity<>("{\"message\":\"You can delete only your own article.\"}", HttpStatus.FORBIDDEN);
                }
                articleRepository.delete(article);
                return new ResponseEntity<>("{\"message\":\"Article deleted successfully.\"}", HttpStatus.OK);
            } else{
                return new ResponseEntity<>("{\"message\":\"Invalid value for (Article Id).\"}", HttpStatus.BAD_REQUEST);
            }
        } catch(Exception ex){
            log.error("Exception in deleteArticle : {}", ex.getMessage());
        }
        return new ResponseEntity<>("{\"message\":\"Something went wrong.\"}", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    private UserInfo getCurrentUser() {
        Object principal = SecurityContextHolder.getContext().getAuthentication() != null
                ? SecurityContextHolder.getContext().getAuthentication().getPrincipal()
                : null;
        if(Objects.isNull(principal)){
            return null;
        }
        String email = principal instanceof org.springframework.security.core.userdetails.UserDetails
                ? ((org.springframework.security.core.userdetails.UserDetails) principal).getUsername()
                : principal.toString();
        return userInfoRepository.findByEmail(email).orElse(null);
    }

    private Boolean isAdmin(UserInfo userInfo) {
        return "false".equalsIgnoreCase(userInfo.getIsDeletable());
    }

    private Boolean canManage(Article article, UserInfo userInfo) {
        return isAdmin(userInfo) || (!Objects.isNull(article.getCreatedBy()) && Objects.equals(article.getCreatedBy().getId(), userInfo.getId()));
    }
}
