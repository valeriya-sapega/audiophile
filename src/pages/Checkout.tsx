import { useDispatch, useSelector } from 'react-redux';
import { IRootState, getTotalPrice, removeAllFromCart } from '../store/store';
import Input from '../components/Input';
import RadioButton from '../components/RadioButton';
import Button from '../components/Button';
import { useState } from 'react';
import ThankYouPopup from '../components/ThankYouPopup';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormData, schema } from '../utils/schema';

const Checkout = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<string>();

  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const dispatch = useDispatch();

  const { cartItems, totalPrice } = useSelector(
    (state: IRootState) => state.cart
  );

  dispatch(getTotalPrice());

  const disablePaymentMethods = paymentMethod === 'cash' ? true : false;

  const handleRadioChange = (value: string) => {
    setPaymentMethod(value);
  };

  console.log(isComplete);

  const onOrderCompleteClick = (data: FormData) => {
    setIsComplete(true);
    console.log(data);
  };

  const handleModalClose = () => {
    setIsComplete(false);
    dispatch(removeAllFromCart());
  };

  const renderedCartItems = cartItems.map((product) => {
    return (
      <div
        key={product.id}
        className='my-8 flex flex-row justify-between items-center gap-6'
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
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onOrderCompleteClick)}
          className='mx-4 my-12 grid grid-cols-1 md:my-32 md:mx-12 lg:grid-cols-3 gap-4 '
        >
          <div className='bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded px-6 py-8 md:px-14 md:py-12 lg:cols-start-1 lg:col-span-2'>
            <h1 className='text-3xl uppercase font-bold tracking-wide mb-10'>
              Checkout
            </h1>
            <div>
              <h3 className='mb-4 text-lg text-accentOrange font-bold uppercase'>
                Billing details
              </h3>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6'>
                <div>
                  <Input
                    id='fullName'
                    label='full name'
                    type='text'
                    placeholder='Jane Doe'
                    required={true}
                  />
                  {errors.fullName && (
                    <p className='text-[10px] text-accentOrange'>
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <Input
                    id='email'
                    label='Email Address'
                    type='email'
                    placeholder='jane@doe.com'
                    required={true}
                  />
                  {errors.email && (
                    <p className='text-[10px] text-accentOrange'>
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    id='phone'
                    label='phone number'
                    type='tel'
                    placeholder='+12345006789'
                    required={true}
                  />
                  {errors.phone && (
                    <p className='text-[10px] text-accentOrange'>
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className='mt-12'>
              <h3 className='mb-4 text-lg text-accentOrange font-bold uppercase'>
                Shipping Info
              </h3>
              <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-x-4 gap-y-6'>
                <div className='lg:col-span-2'>
                  <Input
                    id='address'
                    label='address'
                    type='text'
                    placeholder='44 Khreschatyk street'
                    required={true}
                  />
                  {errors.address && (
                    <p className='text-[10px] text-accentOrange'>
                      {errors.address.message}
                    </p>
                  )}
                </div>
                <div className='lg:row-start-2'>
                  <Input
                    id='zipcode'
                    label='ZIP code'
                    type='text'
                    placeholder='01001'
                    required={true}
                  />
                  {errors.zipcode && (
                    <p className='text-[10px] text-accentOrange'>
                      {errors.zipcode.message}
                    </p>
                  )}
                </div>
                <div className='lg:row-start-2'>
                  <Input
                    id='city'
                    label='City'
                    type='text'
                    placeholder='Kyiv'
                    required={true}
                  />
                  {errors.city && (
                    <p className='text-[10px] text-accentOrange'>
                      {errors.city.message}
                    </p>
                  )}
                </div>
                <div>
                  <Input
                    id='country'
                    label='country'
                    type='text'
                    placeholder='Ukraine'
                    required={true}
                  />
                  {errors.country && (
                    <p className='text-[10px] text-accentOrange'>
                      {errors.country.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className='mt-12'>
              <h3 className='mb-4 text-lg text-accentOrange font-bold uppercase'>
                payment details
              </h3>
              <div
                className={`grid grid-cols-1 gap-4 lg:grid-cols-2 ${
                  paymentMethod === 'emoney' && 'grid-rows-3 gap-y-6'
                } gap-x-4`}
              >
                <div className='h-14 self-center lg:self-start'>
                  <h3 className='font-bold capitalize '>Payment Method</h3>
                </div>

                <RadioButton
                  className='h-14'
                  id='emoney'
                  label='e-Money'
                  value='emoney'
                  checked={paymentMethod === 'emoney'}
                  handleChange={() => handleRadioChange('emoney')}
                />
                <div className='lg:col-start-2'>
                  <RadioButton
                    className='h-14'
                    id='cash'
                    label='Cash on Delivery'
                    value='cash'
                    checked={paymentMethod === 'cash'}
                    handleChange={() => handleRadioChange('cash')}
                  />
                  {errors.paymentMethod && (
                    <p className='text-[10px] text-accentOrange'>
                      {errors.paymentMethod.message}
                    </p>
                  )}
                </div>

                {paymentMethod === 'emoney' && (
                  <>
                    <div className='lg:row-start-3'>
                      <Input
                        id='eNumber'
                        label='e-Money Number'
                        type='text'
                        placeholder='238521993'
                        className=''
                        disabled={disablePaymentMethods}
                      />
                      {errors.eNumber && (
                        <p className='text-[10px] text-accentOrange'>
                          {errors.eNumber.message}
                        </p>
                      )}
                    </div>
                    <div className='lg:row-start-3'>
                      <Input
                        id='ePin'
                        label='e-Money PIN'
                        type='text'
                        placeholder='6891'
                        className=''
                        disabled={disablePaymentMethods}
                      />
                      {errors.ePin && (
                        <p className='text-[10px] text-accentOrange'>
                          {errors.ePin.message}
                        </p>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className='bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] rounded h-fit px-6 py-8 md:px-14 md:py-12 '>
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

            <Button
              onSubmit={handleSubmit(onOrderCompleteClick)}
              className='w-full'
            >
              Complete order
            </Button>

            <ThankYouPopup isOpen={isComplete} onClose={handleModalClose} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
export default Checkout;
