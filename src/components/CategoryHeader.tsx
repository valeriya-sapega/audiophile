interface CategoryHeaderProps {
  category: string;
}

const CategoryHeader = ({ category }: CategoryHeaderProps) => {
  return (
    <div className='w-full  bg-primary'>
      <h2 className='text-center text-white tracking-wide uppercase font-bold text-4xl py-20'>
        {category}
      </h2>
    </div>
  );
};
export default CategoryHeader;
