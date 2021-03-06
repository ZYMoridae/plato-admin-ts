import Zjax from "../utils/zjax";
import Utils from "../utils/Utils";
import ActionType from "./ActionType";

// ANCHOR Fetch all product category
export const fetchAllProductCategoryFulfilled = (
  results: any,
  totalPages: number,
  totalElements: number
) => {
  return {
    type: ActionType.PRODUCT.CATEGORY.GET_ALL.FULFILLED,
    fetchAllProductCategoryPending: false,
    fetchAllProductCategoryFulfilled: true,
    productCategories: results,
    totalPages: totalPages,
    totalElements: totalElements,
    receivedAt: Date.now()
  };
};

export const fetchAllProductCategoryPending = () => {
  return {
    type: ActionType.PRODUCT.CATEGORY.GET_ALL.PENDING,
    fetchAllProductCategoryPending: true,
    fetchAllProductCategoryFulfilled: false
  };
};

export const fetchAllProductCategoryError = (err: any) => {
  return {
    type: ActionType.PRODUCT.CATEGORY.GET_ALL.ERROR,
    fetchAllProductCategoryPending: false,
    fetchAllProductCategoryFulfilled: true
  };
};

export const fetchAllProductCategory = (
  page: number,
  perPage: number,
  orderBy: string
) => {
  return function(dispatch: any) {
    dispatch(fetchAllProductCategoryPending());

    let options = {
      method: Zjax.HTTP.METHOD.GET
    };

    Zjax.request({
      url: `/api/product-categories?page=${page -
        1}&size=${perPage}&sort=${orderBy}&keyword`,
      option: Utils.addToken(options),
      successCallback: (response: any) => {
        dispatch(
          fetchAllProductCategoryFulfilled(
            response.data._embedded.productCategoryList,
            response.data.page.totalPages,
            response.data.page.totalElements
          )
        );
      },
      failureCallback: (error: any) => {
        dispatch(fetchAllProductCategoryError(error));
      }
    });
  };
};
