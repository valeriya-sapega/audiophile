import Button from './Button';
import PathConstants from '../routes/pathConstants';
import { Link } from 'react-router-dom';

const ProductCategories = () => {
  return (
    <div className='grid grid-cols-1 pt-[100px] mt-30 md:grid-cols-3 gap-8 items-end'>
      <div className='mx-4 md:mx-2'>
        <img
          src='./assets/shared/desktop/image-category-thumbnail-headphones.png'
          alt='headphonesCategory'
          className='-mb-[38%] mx-auto object-contain'
        />
        <div className='pt-[24%] pb-8 bg-black bg-opacity-5 text-center rounded-lg'>
          <Link to={PathConstants.HEADPHONES}>
            <h3 className='font-bold uppercase'>headphones</h3>
            <Button className='uppercase' variant='link'>
              {`Shop >`}
            </Button>
          </Link>
        </div>
      </div>
      <div className='mx-4 md:mx-2'>
        <img
          src='./assets/shared/desktop/image-category-thumbnail-earphones.png'
          alt='earphonesCategory'
          className='-mb-[42%] mx-auto object-contain'
        />
        <div className='pt-[24%] pb-8 bg-black bg-opacity-5 text-center rounded-lg'>
          <Link to={PathConstants.EARPHONES}>
            <h3 className='font-bold uppercase'>earphones</h3>
            <Button className='uppercase' variant='link'>
              {`Shop >`}
            </Button>
          </Link>
        </div>
      </div>
      <div className='mx-4 md:mx-2'>
        <img
          src='./assets/shared/desktop/image-category-thumbnail-speakers.png'
          alt='speakersCategory'
          className='-mb-[40%] mx-auto object-contain'
        />
        <div className='pt-[24%] pb-8 bg-black bg-opacity-5 text-center rounded-lg'>
          <Link to={PathConstants.SPEAKERS}>
            <h3 className='font-bold uppercase'>speakers</h3>
            <Button className='uppercase' variant='link'>
              {`Shop >`}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCategories;
