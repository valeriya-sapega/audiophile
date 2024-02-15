import Header from '../components/Header';
import ProductCategories from '../components/ProductCategories';
import MainContainer from '../components/MainContainer';
import ScrollToTop from '../utils/hooks/scrollToTop';

const Home = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto bg-white'>
        <MainContainer>
          <ProductCategories />
        </MainContainer>
      </div>
      <ScrollToTop />
    </>
  );
};
export default Home;
