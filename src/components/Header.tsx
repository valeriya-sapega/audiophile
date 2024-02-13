import ProductDescription from './ProductDescription';

const Header = () => {
  return (
    <header className='bg-primary py-12'>
      <ProductDescription
        isNew={true}
        title='XX99 Mark II Headphones'
        text='Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.'
        color='white'
        id={4}
      />
    </header>
  );
};
export default Header;
