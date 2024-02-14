interface ErrorPageProps {
  type?: 'product' | 'category';
}

const ErrorPage = ({ type }: ErrorPageProps) => {
  let content: string;
  if (type === 'category') {
    content = `:( We couldn't find any products for this category. Please try again later.`;
  } else if (type === 'product') {
    content = `Oops...Something went wrong. We couldn't find this product. Please try again later.`;
  } else {
    content = `Oops...Something went wrong. Please try again later.`;
  }

  return (
    <div className='w-full h-[50dvh] container flex flex-row justify-center items-center'>
      <div className='w-[70%]'>
        <h1 className=' text-primary text-center text-xl sm:text-2xl md:text-3xl'>
          {content}
        </h1>
      </div>
    </div>
  );
};
export default ErrorPage;
