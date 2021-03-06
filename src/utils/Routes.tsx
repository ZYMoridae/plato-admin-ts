const Routes = {
  HOME: "/home",
  USER: {
    LOGIN: "/login",
    INDEX: "/users",
    NEW: "/users/new",
    EDIT: "/users/:id(\\d+)"
  },
  PRODUCT: {
    INDEX: "/products",
    NEW: "/products/new",
    EDIT: "/products/:id(\\d+)",
    CATEGORY: {
      INDEX: "/products/categories",
      NEW: "/products/categories/new",
      EDIT: "/products/categories/:id"
    }
  },
  SKU: {
    INDEX: "/skus",
    NEW: "/skus/new",
    EDIT: "/skus/:id",
    ATTRIBUTE: {
      CATEGORY: {
        INDEX: "/skus/attributes/categories",
        NEW: "/skus/attributes/categories/new",
        EDIT: "/skus/attributes/categories/:id"
      }
    }
  },
  LOGISTIC_PROVIDER: {
    INDEX: "/logistic-providers",
    EDIT: "/logistic-providers/:id(\\d+)",
    NEW: "/logistic-providers/new"
  }
};

export default Routes;
