interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return <div className='md:mx-12 lg:mx-24'>{children}</div>;
};
export default MainContainer;
