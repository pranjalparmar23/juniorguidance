package com.article.hub.serviceImpl;

import com.article.hub.dao.CategoryRepository;
import com.article.hub.dao.UserInfoRepository;
import com.article.hub.entity.Category;
import com.article.hub.entity.UserInfo;
import com.article.hub.service.CategoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@Service
public class CategoryServiceImpl implements CategoryService {

    Logger log = LoggerFactory.getLogger(CategoryServiceImpl.class);

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    UserInfoRepository userInfoRepository;

    @Override
    public ResponseEntity<?> addNewCategory(Category category) {
        try{
            UserInfo currentUser = getCurrentUser();
            if(Objects.isNull(currentUser)){
                return new ResponseEntity<>("{\"message\":\"Unauthorized.\"}", HttpStatus.UNAUTHORIZED);
            }
            if(!Objects.isNull(category) && Objects.isNull(category.getId()) && !Objects.isNull(category.getName())){
                if(!categoryRepository.existsByNameIgnoreCase(category.getName())){
                    category.setCreatedBy(currentUser);
                    categoryRepository.save(category);
                    return new ResponseEntity<>("{\"message\":\"Category added successfully.\"}", HttpStatus.OK);
                } else{
                    return new ResponseEntity<>("{\"message\":\"Category already exists.\"}", HttpStatus.CONFLICT);
                }
            } else{
                return new ResponseEntity<>("{\"message\":\"Invalid Data.\"}", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception ex){
            log.error("Exception in addNewCategory : {}", ex.getMessage());
        }
        return new ResponseEntity<>("{\"message\":\"Something went wrong.\"}", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> getAllCategory() {
        try{
            UserInfo currentUser = getCurrentUser();
            if(Objects.isNull(currentUser)){
                return new ResponseEntity<>("{\"message\":\"Unauthorized.\"}", HttpStatus.UNAUTHORIZED);
            }
            if(isAdmin(currentUser)){
                return new ResponseEntity<>(categoryRepository.getAllCategory(), HttpStatus.OK);
            }
            return new ResponseEntity<>(categoryRepository.getAllCategoryByUser(currentUser.getId()), HttpStatus.OK);
        } catch (Exception ex){
            log.error("Exception in getAllCategory : {}", ex.getMessage());
        }
        return new ResponseEntity<>("{\"message\":\"Something went wrong.\"}", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> getAllCategoryForSelection() {
        try{
            return new ResponseEntity<>(categoryRepository.getAllCategory(), HttpStatus.OK);
        } catch (Exception ex){
            log.error("Exception in getAllCategoryForSelection : {}", ex.getMessage());
        }
        return new ResponseEntity<>("{\"message\":\"Something went wrong.\"}", HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @Override
    public ResponseEntity<?> updateCategory(Category category) {
        try{
            UserInfo currentUser = getCurrentUser();
            if(Objects.isNull(currentUser)){
                return new ResponseEntity<>("{\"message\":\"Unauthorized.\"}", HttpStatus.UNAUTHORIZED);
            }
            if(!Objects.isNull(category) && !Objects.isNull(category.getId()) && !Objects.isNull(category.getName())){
                Optional<Category> optionalCategory = categoryRepository.findById(category.getId());
                if(!optionalCategory.isPresent()){
                    return new ResponseEntity<>("{\"message\":\"Category id does not found.\"}", HttpStatus.NOT_FOUND);
                }
                Category dbCategory = optionalCategory.get();
                if(!canManage(dbCategory, currentUser)){
                    return new ResponseEntity<>("{\"message\":\"You can update only your own category.\"}", HttpStatus.FORBIDDEN);
                }
                if(categoryRepository.existsByNameIgnoreCaseAndIdNot(category.getName(), category.getId())){
                    return new ResponseEntity<>("{\"message\":\"Category with name ("+ category.getName() + ") already exists.\"}", HttpStatus.CONFLICT);
                }
                dbCategory.setName(category.getName());
                categoryRepository.save(dbCategory);
                return new ResponseEntity<>("{\"message\":\"Category updated successfully.\"}", HttpStatus.OK);
            } else{
                return new ResponseEntity<>("{\"message\":\"Invalid Data.\"}", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception ex){
            log.error("Exception in updateCategory : {}", ex.getMessage());
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

    private Boolean canManage(Category category, UserInfo userInfo) {
        return isAdmin(userInfo) || (!Objects.isNull(category.getCreatedBy()) && Objects.equals(category.getCreatedBy().getId(), userInfo.getId()));
    }
}
