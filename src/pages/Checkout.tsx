import { useDispatch, useSelector } from 'react-redux';
import { IRootState, getTotalPrice, removeAllFromCart } from '../store/store';

import Input from '../components/Input';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';
import { useState } from 'react';
import ThankYouPopup from '../components/ThankYouPopup';

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const { cartItems, totalPrice } = useSelector(
    (state: IRootState) => state.cart
  );

  dispatch(getTotalPrice());

  const onOrderCompleteClick = () => {
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    dispatch(removeAllFromCart());
  };

  const renderedCartItems = cartItems.map((product) => {
    return (
      <div className='my-8 flex flex-row justify-between items-center gap-6'>
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
          </div>
        </div>
        <div className='text-sm font-bold text-primary text-opacity-50'>
          x{product.amount}
        </div>
      </div>
    );
  });

  const shippingPrice = 50;

  return (
    <div className='mx-auto container'>
      <div className='mx-4 my-12 grid grid-cols-1 md:my-32 md:mx-12 lg:grid-cols-3 gap-4 '>
        <div className='bg-white shadow-xl rounded px-6 py-8 md:px-14 md:py-12 lg:cols-start-1 lg:col-span-2'>
          <h1 className='text-3xl uppercase font-bold tracking-wide mb-10'>
            Checkout
          </h1>
          <div>
            <h3 className='mb-4 text-lg text-accentOrange font-bold uppercase'>
              Billing details
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6'>
              <Input
                id='fullName'
                label='full name'
                type='text'
                placeholder='Jane Doe'
              />
              <Input
                id='email'
                label='Email Address'
                type='email'
                placeholder='jane@doe.com'
              />
              <Input
                id='phone'
                label='phone number'
                type='tel'
                placeholder='+12345006789'
              />
            </div>
          </div>

          <div className='mt-12'>
            <h3 className='mb-4 text-lg text-accentOrange font-bold uppercase'>
              Shipping Info
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-x-4 gap-y-6'>
              <Input
                id='address'
                label='address'
                type='text'
                placeholder='44 Khreschatyk street'
                className='lg:col-span-2'
              />
              <Input
                id='zipcode'
                label='ZIP code'
                type='text'
                placeholder='01001'
                className='lg:row-start-2'
              />
              <Input
                id='city'
                label='City'
                type='text'
                placeholder='Kyiv'
                className='lg:row-start-2'
              />
              <Input
                id='country'
                label='country'
                type='text'
                placeholder='Ukraine'
              />
            </div>
          </div>
          <div className='mt-12'>
            <h3 className='mb-4 text-lg text-accentOrange font-bold uppercase'>
              payment details
            </h3>
            <div className='grid grid-cols-1 lg:grid-cols-2 grid-rows-3 gap-x-4 gap-y-6'>
              <h3 className='font-bold capitalize self-center lg:self-start'>
                Payment Method
              </h3>
              <RadioButton id='emoney' label='e-Money' />
              <RadioButton
                className='lg:col-start-2'
                id='cash'
                label='Cash on Delivery'
              />
              <Input
                id='eNumber'
                label='e-Money Number'
                type='number'
                placeholder='238521993'
                className='lg:row-start-3'
              />
              <Input
                id='ePin'
                label='e-Money PIN'
                type='number'
                placeholder='6891'
                className='lg:row-start-3'
              />
            </div>
          </div>
        </div>
        <div className='bg-white shadow-xl rounded h-fit px-6 py-8 md:px-14 md:py-12 '>
          <h2 className='text-lg font-bold tracking-wider uppercase '>
            Summary
          </h2>

          {renderedCartItems}
          <div className='flex flex-row justify-between items-center'>
            <h3 className='uppercase text-sm text-primary text-opacity-50 tracking-wider'>
              Total
            </h3>
            <h3 className='uppercase text-sm text-primary font-bold'>
              $ {totalPrice.toLocaleString()}
            </h3>
          </div>
          <div className='mt-2 flex flex-row justify-between items-center'>
            <h3 className='uppercase text-sm text-primary text-opacity-50 tracking-wider'>
              Shipping
            </h3>
            <h3 className='uppercase text-sm text-primary font-bold'>
              $ {shippingPrice}
            </h3>
          </div>
          <div className='flex flex-row justify-between items-center mb-8 mt-6'>
            <h3 className='uppercase text-sm text-primary text-opacity-50 tracking-wider'>
              Grand Total
            </h3>
            <h3 className='uppercase text-lg text-accentOrange font-bold'>
              $ {(shippingPrice + totalPrice).toLocaleString()}
            </h3>
          </div>
          <Button onClick={onOrderCompleteClick} className='w-full'>
            Complete order
          </Button>
          <ThankYouPopup isOpen={isModalOpen} onClose={handleModalClose} />
        </div>
      </div>
    </div>
  );
};
export default Checkout;
