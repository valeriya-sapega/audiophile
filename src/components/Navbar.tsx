import PathConstants from '../routes/pathConstants';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartModal from './CartModal';
import { useClickOutside } from '../utils/hooks/useClickOutside';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState, getTotalPrice } from '../store/store';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const { totalAmount } = useSelector((state: IRootState) => state.cart);

  const elRef = useRef<HTMLDivElement>(null);
  useClickOutside(elRef, () => setIsModalOpen(false));

  dispatch(getTotalPrice());

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCartClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='bg-primary w-full'>
      <div className='container mx-auto px-10 py-8 flex flex-row justify-between items-center border-b border-white border-opacity-50 md:relative'>
        <button onClick={handleClick} className='lg:hidden'>
          <img src='./assets/shared/tablet/icon-hamburger.svg' />
        </button>
        <span className='sr-only lg:hidden'>Open main menu</span>
        <NavLink to={PathConstants.HOME}>
          <img src='./assets/shared/desktop/logo.svg' alt='logo' />
        </NavLink>
        <div className='hidden lg:flex flex-row gap-16 text-white uppercase text-sm font-bold tracking-wider'>
          <NavLink to={PathConstants.HOME}>
            <span className='hover:text-accentOrange'>Home</span>
          </NavLink>
          <NavLink to={PathConstants.HEADPHONES}>
            <span className='hover:text-accentOrange'>Headphones</span>
          </NavLink>
          <NavLink to={PathConstants.SPEAKERS}>
            <span className='hover:text-accentOrange'>Speakers</span>
          </NavLink>
          <NavLink to={PathConstants.EARPHONES}>
            <span className='hover:text-accentOrange'>Earphones</span>
          </NavLink>
        </div>
        <div ref={elRef} className='relative'>
          <button onClick={handleCartClick}>
            <img src='./assets/shared/desktop/icon-cart.svg' alt='cart' />
          </button>
          {totalAmount > 0 && (
            <div className='absolute z-1 -right-5 -top-4 px-2 py-1 text-[10px] rounded-full bg-accentOrange text-white'>
              {totalAmount}
            </div>
          )}
          {isModalOpen && (
            <CartModal
              isOpen={isModalOpen}
              closeModal={() => setIsModalOpen(false)}
            />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className='w-full container mx-auto px-8 py-8 items-center bottom-0 flex flex-col gap-8 bg-primary border-b border-white border-opacity-50 text-white uppercase text-sm font-bold tracking-wider '>
          <NavLink onClick={handleLinkClick} to={PathConstants.HOME}>
            <span className='hover:text-accentOrange'>Home</span>
          </NavLink>
          <NavLink onClick={handleLinkClick} to={PathConstants.HEADPHONES}>
            <span className='hover:text-accentOrange'>Headphones</span>
          </NavLink>
          <NavLink onClick={handleLinkClick} to={PathConstants.SPEAKERS}>
            <span className='hover:text-accentOrange'>Speakers</span>
          </NavLink>
          <NavLink onClick={handleLinkClick} to={PathConstants.EARPHONES}>
            <span className='hover:text-accentOrange'>Earphones</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
