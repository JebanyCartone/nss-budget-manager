package cz.cvut.fel.nss.budgetmanager.BudgetManager.repository;

import cz.cvut.fel.nss.budgetmanager.BudgetManager.model.Category;
import jakarta.persistence.TypedQuery;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryDao extends BaseDao<Category> {
    /**
     * Constructs a new BaseDao instance with the given type parameter.
     *
     * @param type the class type of the entity managed by this BaseDao.
     */
    public CategoryDao(Class<Category> type) {
        super(type);
    }

    public Category getCategoryByName(String name) {
        TypedQuery<Category> query = em.createNamedQuery("findCategoryByName", Category.class);
        query.setParameter("name", name);
        List<Category> categories = query.getResultList();
        return categories.isEmpty() ? null : categories.get(0);
    }
}
