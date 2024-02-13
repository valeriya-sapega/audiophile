// import { useSelector } from 'react-redux';
// import { IRootState } from '../store/store';

import Input from '../components/Input';
import RadioButton from '../components/RadioButton';

const Checkout = () => {
  // const { cartItems, totalAmount, totalPrice } = useSelector(
  //   (state: IRootState) => state.cart
  // );

  return (
    <div className='mx-auto  container'>
      <div className='bg-white shadow-xl rounded px-14 py-12 my-32'>
        <h1 className='text-3xl uppercase font-bold tracking-wide mb-10'>
          Checkout
        </h1>
        <div>
          <h3 className='mb-4 text-lg text-accentOrange font-bold uppercase'>
            Billing details
          </h3>
          <div className='grid grid-cols-2 gap-x-4 gap-y-6'>
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
          <div className='grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-6'>
            <Input
              id='address'
              label='address'
              type='text'
              placeholder='44 Khreschatyk street'
              className='col-span-2'
            />
            <Input
              id='zipcode'
              label='ZIP code'
              type='text'
              placeholder='01001'
              className='row-start-2'
            />
            <Input
              id='city'
              label='City'
              type='text'
              placeholder='Kyiv'
              className='row-start-2'
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
          <div className='grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-6'>
            <h3 className='font-bold capitalize'>Payment Method</h3>
            <RadioButton id='emoney' label='e-Money' />
            <RadioButton
              className='col-start-2'
              id='cash'
              label='Cash on Delivery'
            />
            <Input
              id='eNumber'
              label='e-Money Number'
              type='number'
              placeholder='238521993'
              className='row-start-3'
            />
            <Input
              id='ePin'
              label='e-Money PIN'
              type='number'
              placeholder='6891'
              className='row-start-3'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
