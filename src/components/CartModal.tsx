import { useDispatch, useSelector } from 'react-redux';
import {
  IRootState,
  addToCart,
  getTotalPrice,
  decrementFromCart,
  removeFromCart,
  removeAllFromCart,
} from '../store/store';
import Button from './Button';
import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import PathConstants from '../routes/pathConstants';

interface CartModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const CartModal = ({ closeModal }: CartModalProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems, totalAmount, totalPrice } = useSelector(
    (state: IRootState) => state.cart
  );

  dispatch(getTotalPrice());

  const hadleCheckoutClick = () => {
    closeModal();
    navigate(PathConstants.CHECKOUT);
  };

  const products = cartItems.map((product) => {
    return (
      <div
        key={product.name}
        className='flex flex-row justify-between items-center'
      >
        <div className='flex flex-row gap-2 items-center'>
          <div className='w-12 h-12'>
            <img
              className='rounded-lg'
              src={product.image.desktop}
              alt={product.model}
            />
          </div>
          <div>
            <h3 className='text-sm uppercase font-bold text-primary'>
              {product.model}
            </h3>

            <h3 className='text-sm uppercase font-bold text-primary text-opacity-50'>
              $ {product.price.toLocaleString()}
            </h3>
          </div>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <div className='bg-greyBg w-20 rounded flex flex-row font-bold justify-center items-center'>
            <button
              onClick={() => dispatch(decrementFromCart(product))}
              className='text-primary text-opacity-50 py-1 px-2 hover:text-accentOrange'
            >
              -
            </button>
            <span className='px-2 text-sm'>{product.amount}</span>
            <button
              onClick={() => dispatch(addToCart(product))}
              className='text-primary text-opacity-50 py-1 px-2 hover:text-accentOrange'
            >
              +
            </button>
          </div>
          <div>
            <button
              onClick={() => dispatch(removeFromCart(product))}
              className='bg-greyBg rounded p-2'
            >
              <IoCloseOutline />
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='text-primary shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded bg-white p-8 absolute mx-auto left-0 right-0 top-28 z-10 w-[340px] sm:right-12 sm:left-auto lg:right-0'>
      {totalAmount === 0 ? (
        <div>
          <h3 className='text-lg font-bold text-center'>Cart is empty...</h3>
        </div>
      ) : (
        <>
          <div className='flex flex-row justify-between items-center mb-6'>
            <h2 className='text-lg tracking-wider uppercase'>
              CART ({totalAmount})
            </h2>
            <Button
              className='font-medium p-0'
              variant='link'
              onClick={() => dispatch(removeAllFromCart())}
            >
              Remove all
            </Button>
          </div>
          <div className='flex flex-col gap-6'>{products}</div>
          <div className='flex flex-row justify-between items-center mt-8 mb-6 mr-1'>
            <h3 className='text-sm font-light text-primary text-opacity-50 uppercase'>
              Total
            </h3>
            <h3 className='text-lg font-bold text-primary uppercase'>
              $ {totalPrice.toLocaleString()}
            </h3>
          </div>
          <Button onClick={hadleCheckoutClick} className='w-full'>
            Checkout
          </Button>
        </>
      )}
    </div>
  );
};
export default CartModal;
