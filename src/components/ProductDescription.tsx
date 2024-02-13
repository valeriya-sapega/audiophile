import TextWrapper from './TextWrapper';

interface ProductDescriptionProps {
  isNew?: boolean;
  title: string;
  text: string;
  color?: 'white' | 'black';
  reverse?: boolean;
  image?: string;
  id?: number;
  price?: number;
  addToCart?: boolean;
  handleAddToCartClick?: () => void;
}

const ProductDescription = ({
  isNew,
  title,
  text,
  color,
  reverse,
  image,
  id,
  price,
  addToCart,
  handleAddToCartClick,
}: ProductDescriptionProps) => {
  const flexRow = reverse ? 'flex-row-reverse' : 'flex-row';

  return (
    <section className={`container mx-auto w-full`}>
      <div
        className={`px-4 py-6 flex flex-col-reverse items-center md:flex md:${flexRow} md:justify-between md:gap-12 h-max md:px-10 md:py-20`}
      >
        <TextWrapper
          isNew={isNew}
          title={title}
          text={text}
          color={color}
          image={image}
          id={id}
          price={price}
          addToCart={addToCart}
          handleAddToCartClick={handleAddToCartClick}
        />
        {image && (
          <div className='md:w-1/2'>
            <img
              src={image}
              alt={title}
              className='rounded-lg object-contain h-96 w-full mx-auto'
            />
          </div>
        )}
      </div>
    </section>
  );
};
export default ProductDescription;
