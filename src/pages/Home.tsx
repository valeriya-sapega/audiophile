import Header from '../components/Header';
import ProductCategories from '../components/ProductCategories';
import MainContainer from '../components/MainContainer';

const Home = () => {
  return (
    <>
      <Header />
      <div className='container mx-auto bg-white'>
        <MainContainer>
          <ProductCategories />
        </MainContainer>
      </div>
    </>
  );
};
export default Home;
