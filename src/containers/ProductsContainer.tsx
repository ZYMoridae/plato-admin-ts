import { connect } from "react-redux";
import { fetchProductsInfo } from "../actions";
import Products from "../components/products";

const mapStateToProps = (state: any) => {
  return {
    info: state.ProductsReducer.info,
    isFetchingProducts: state.ProductsReducer.isFetchingProducts,
    isFetchedProducts: state.ProductsReducer.isFetchedProducts,
    totalPages: state.ProductsReducer.totalPages,
    totalElements: state.ProductsReducer.totalElements
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
    fetchProductsInfo: (page: number, perPage: number, orderBy: string) => {
      dispatch(fetchProductsInfo(page, perPage, orderBy));
    }
  };
};

const ProductsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

export default ProductsContainer;
