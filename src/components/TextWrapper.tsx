import { useNavigate } from 'react-router';
import Button from './Button';
import { useCallback } from 'react';

interface TextWrapperProps {
  isNew?: boolean;
  title: string;
  text: string;
  color?: 'white' | 'black';
  image?: string;
  id?: number;
  addToCart?: boolean;
  price?: number;
  handleAddToCartClick?: () => void;
}

const TextWrapper = ({
  isNew,
  title,
  text,
  color,
  image,
  id,
  addToCart,
  price,
  handleAddToCartClick,
}: TextWrapperProps) => {
  const navigate = useNavigate();

  const textColor = color === 'white' ? 'text-white' : 'text-black';
  const textCenter = image ? 'text-left' : 'text-center';
  const buttonText = addToCart ? 'Add to Cart' : 'See product';
  const tag = isNew ? 'New Product' : null;

  const handleProductNavigate = useCallback(() => {
    navigate(`/products/${id}`);
  }, [navigate, id]);

  const handleClick = handleAddToCartClick
    ? handleAddToCartClick
    : handleProductNavigate;

  return (
    <article
      className={`mx-auto text-center md:text-left md:w-1/2  lg:${textCenter}`}
    >
      <div className='mx-auto w-[80%]'>
        <div className={`${textColor}`}>
          <h3
            className={`text-sm ${textColor} text-opacity-40 uppercase tracking-[10px]`}
          >
            {tag}
          </h3>
          <h1 className='font-bold tracking-wide uppercase my-6 text-3xl md:text-4xl lg:text-4xl '>
            {title}
          </h1>
          <p className={`text-sm ${textColor} text-opacity-40 leading-6 mb-10`}>
            {text}
          </p>
          {price && (
            <h3 className='font-bold text-lg tracking-wider mb-10'>
              <span>$ </span>
              <span>{price.toLocaleString()}</span>
            </h3>
          )}

          <Button onClick={handleClick}>{buttonText}</Button>
        </div>
      </div>
    </article>
  );
};
export default TextWrapper;
