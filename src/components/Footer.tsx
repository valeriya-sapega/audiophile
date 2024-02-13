import { Link } from 'react-router-dom';
import PathConstants from '../routes/pathConstants';
import { NavLink } from 'react-router-dom';
import MainContainer from './MainContainer';

const Footer = () => {
  return (
    <footer>
      <div className='container mx-auto my-20 md:my-30 lg:my-40'>
        <MainContainer>
          <div className='mx-4 my-10 flex flex-col gap-10 md:flex-row-reverse md:gap-[10%] items-center '>
            <div className='md:w-[45%]'>
              <img
                src='./assets/shared/desktop/image-best-gear.jpg'
                alt='Best Gear'
                className='rounded-lg w-full md:h-[80%] lg:h-[66%]'
              />
            </div>
            <div className='px-8 md:w-[45%] md:px-0 text-center md:text-left'>
              <h1 className='text-4xl font-bold tracking-wide uppercase mb-8'>
                Bringing you the <span className='text-accentOrange'>best</span>{' '}
                audio gear
              </h1>
              <p className='text-sm leading-6'>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </div>
        </MainContainer>
      </div>
      <div className='w-full bg-primary'>
        <div className='mx-24'>
          <div className='container mx-auto '>
            <div className='mx-2 py-12 grid gap-10 grid-cols-1 md:grid-cols-4 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 '>
              <div className='justify-self-center md:justify-self-start md:col-span-4 lg:col-span-2'>
                <NavLink to={PathConstants.HOME}>
                  <img src='./assets/shared/desktop/logo.svg' alt='logo' />
                </NavLink>
              </div>
              <div className='text-white uppercase text-sm font-bold tracking-wider md:col-span-4 md:row-start-2  lg:row-start-1 lg:col-span-2 lg:col-start-3'>
                <div className='flex flex-col items-center gap-8 md:flex-row justify-between'>
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
              </div>

              <div className='md:col-span-4 md:row-start-3 lg:col-span-2 lg:row-start-2'>
                <p className='font-light text-sm  text-white text-opacity-50 leading-6 text-center md:text-justify'>
                  Audiophile is an all in one stop to fulfill your audio needs.
                  We're a small team of music lovers and sound specialists who
                  are devoted to helping you get the most out of personal audio.
                  Come and visit our demo facility - we’re open 7 days a week.
                </p>
              </div>

              <div className='justify-self-center md:col-span-2 md:row-start-4 md:justify-self-start md:self-center lg:col-start-4 lg:row-start-2 lg:col-span-1 lg:self-end lg:justify-self-end'>
                <div className='flex flex-row gap-8 text-white text-opacity-50'>
                  <Link to='/'>
                    <img
                      src='./assets/shared/desktop/icon-facebook.svg'
                      alt='facebook logo'
                    />
                  </Link>
                  <Link to='/'>
                    <img
                      src='./assets/shared/desktop/icon-instagram.svg'
                      alt='instagram logo'
                    />
                  </Link>
                  <Link to='/'>
                    <img
                      src='./assets/shared/desktop/icon-twitter.svg'
                      alt='twitter logo'
                    />
                  </Link>
                </div>
              </div>

              <div className='justify-self-center md:col-span-2 md:col-start-3 md:row-start-4 md:self-center md:justify-self-end lg:col-span-2 lg:row-start-3 lg:justify-self-start'>
                <p className='text-white text-opacity-50 text-sm font-light'>
                  Copyright 2024. All Rights Reserved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
