import { useDispatch, useSelector } from 'react-redux';
import CategoryHeader from '../components/CategoryHeader';
import { AppDispatch, IRootState, fetchProducts } from '../store/store';
import { useEffect } from 'react';
import ProductDescription from '../components/ProductDescription';
import ProductCategories from './ProductCategories';
import Skeleton from './Skeleton';
import ErrorPage from '../pages/ErrorPage';
import ScrollToTop from '../utils/hooks/scrollToTop';
import MainContainer from './MainContainer';

interface CategoryPageProps {
  category: string;
}

const CategoryPage = ({ category }: CategoryPageProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, error } = useSelector(
    (state: IRootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [dispatch, category]);

  let content;

  if (isLoading) {
    content = (
      <div className='my-10 mx-4 md:mx-2 md:my-20'>
        <Skeleton times={4} />
      </div>
    );
  } else if (error) {
    content = <ErrorPage type='category' />;
  } else if (data && !error) {
    content = data.map((product) => {
      return (
        <div key={product.id}>
          <ProductDescription
            title={product.name}
            text={product.description}
            image={product.image.desktop}
            id={product.id}
          />
        </div>
      );
    });
  }

  return (
    <>
      <div>
        <CategoryHeader category={category} />
        <div className='container mx-auto'>
          <MainContainer>
            {content}
            <ProductCategories />
          </MainContainer>
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};
export default CategoryPage;
