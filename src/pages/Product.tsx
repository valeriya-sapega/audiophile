import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  AppDispatch,
  IRootState,
  addToCart,
  fetchSingleProduct,
} from '../store/store';
import { useEffect } from 'react';
import Skeleton from '../components/Skeleton';
import ErrorPage from './ErrorPage';
import ScrollToTop from '../utils/hooks/scrollToTop';
import ProductDescription from '../components/ProductDescription';
import ProductText from '../components/ProductText';
import ProductCategories from '../components/ProductCategories';
import MainContainer from '../components/MainContainer';

const Product = () => {
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector(
    (state: IRootState) => state.singleProduct
  );

  useEffect(() => {
    dispatch(fetchSingleProduct(id!));
  }, [dispatch, id]);

  const handleAddToCartClick = () => {
    dispatch(addToCart(data));
  };

  let content;

  if (isLoading) {
    content = (
      <div className='my-10 mx-4 md:mx-2 md:my-20'>
        <Skeleton times={3} />
      </div>
    );
  } else if (error) {
    content = <ErrorPage type='product' />;
  } else if (data && !error) {
    const { name, description, price, isNew, features, image, includes } = data;
    content = (
      <>
        <ProductDescription
          isNew={isNew}
          title={name}
          text={description}
          price={price}
          image={image.desktop}
          addToCart={true}
          reverse={true}
          handleAddToCartClick={handleAddToCartClick}
        />
        <ProductText features={features} includes={includes} />
      </>
    );
  }

  return (
    <div className='container mx-auto'>
      <MainContainer>
        {content}
        <ProductCategories />
      </MainContainer>
      <ScrollToTop />
    </div>
  );
};
export default Product;
