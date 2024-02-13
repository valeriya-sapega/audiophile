import { Link } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';
import useMediaQueries from '../utils/hooks/useMediaQueries';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartModal from './CartModal';
import { useClickOutside } from '../utils/hooks/useClickOutside';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const elRef = useRef<HTMLDivElement>(null);
  useClickOutside(elRef, () => setIsModalOpen(false));

  const handleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCartClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const { md, lg } = useMediaQueries();
  if (md && lg) {
    return (
      <nav className='bg-primary w-full'>
        <div
          ref={elRef}
          className='relative container mx-auto px-10 py-8 flex flex-row justify-between items-center border-b border-white border-opacity-50'
        >
          <NavLink to={PathConstants.HOME}>
            <img src='./assets/shared/desktop/logo.svg' alt='logo' />
          </NavLink>
          <div className='flex flex-row gap-16 text-white uppercase text-sm font-bold tracking-wider'>
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
          <button onClick={handleCartClick}>
            <img src='./assets/shared/desktop/icon-cart.svg' alt='cart' />
          </button>
          {isModalOpen && (
            <CartModal
              isOpen={isModalOpen}
              closeModal={() => setIsModalOpen(false)}
            />
          )}
        </div>
      </nav>
    );
  }

  return (
    <nav className='bg-primary w-full'>
      <div className='container mx-auto px-10 py-8 flex flex-row justify-between items-center border-b border-white border-opacity-50'>
        <button onClick={handleClick}>
          <img src='./assets/shared/tablet/icon-hamburger.svg' />
        </button>
        <span className='sr-only'>Open main menu</span>
        <Link to={PathConstants.HOME}>
          <img src='./assets/shared/desktop/logo.svg' alt='logo' />
        </Link>
        <button onClick={handleCartClick}>
          <img src='./assets/shared/desktop/icon-cart.svg' alt='cart' />
        </button>
        {isModalOpen && (
          <CartModal
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}
          />
        )}
      </div>
      {isMenuOpen && (
        <div className='w-full px-8 py-8 items-center bottom-0 flex flex-col gap-8 bg-primary border-b border-white border-opacity-50 text-white uppercase text-sm font-bold tracking-wider '>
          <Link onClick={handleLinkClick} to={PathConstants.HOME}>
            <span className='hover:text-accentOrange'>Home</span>
          </Link>
          <Link onClick={handleLinkClick} to={PathConstants.HEADPHONES}>
            <span className='hover:text-accentOrange'>Headphones</span>
          </Link>
          <Link onClick={handleLinkClick} to={PathConstants.SPEAKERS}>
            <span className='hover:text-accentOrange'>Speakers</span>
          </Link>
          <Link onClick={handleLinkClick} to={PathConstants.EARPHONES}>
            <span className='hover:text-accentOrange'>Earphones</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
