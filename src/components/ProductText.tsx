import { AdditionalInfo } from '../interface/productsInterface';

interface ProductTextProps {
  features: string;
  includes: AdditionalInfo[];
}

const ProductText = ({ features, includes }: ProductTextProps) => {
  return (
    <div className='mx-6 my-20 grid grid-cols-1 md:my-20 md:grid-cols-3 gap-20 '>
      <div className='md:col-start-1 md:col-span-2'>
        <h2 className='font-bold text-3xl uppercase mb-8 text-center md:text-left md:text-2xl'>
          Features
        </h2>
        <p className='text-sm text-primary text-opacity-50 leading-6'>
          {features}
        </p>
      </div>
      <div className='md:col-start-3'>
        <h2 className='font-bold text-3xl uppercase mb-8 text-center md:text-left md:text-2xl'>
          In the box
        </h2>
        <ul className='list-none'>
          {includes.map((item) => (
            <li
              key={item.item}
              className='text-sm mr-21 grid grid-cols-[20px_1fr] gap-2 my-2'
            >
              <span className='text-accentOrange text-bold'>
                {item.quantity}x
              </span>
              <span className='text-primary text-opacity-50 capitalize'>
                {item.item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default ProductText;
