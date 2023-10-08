// nav.js

import Link from 'next/link';
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'Login', path: '/about', icon: <HiUser /> },
  { name: 'Dashboard', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'Produtos', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'contato',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const NavItem = ({ link, pathname }) => (
  <Link
    href={link.path}
    className={`${
      link.path === pathname && 'text-accent'
    } relative flex items-center group hover:text-accent transition-all duration-300`}
  >
    <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
      <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
        <div className='text-[12px] leading-nome font-semibold capitalize'>
          {link.name}
        </div>
      </div>
    </div>
    <div>{link.icon}</div>
  </Link>
);

const Nav = ({ pathname }) => (
  <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
    <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-80px xl:h-max py-8 bg-zinc-400/[0.50] backdrop-blur-sm text-3x1 xl:text-xl xl:rounded-full'>
      {navData.map((link, index) => (
        <NavItem key={index} link={link} pathname={pathname} />
      ))}
    </div>
  </nav>
);




export default Nav;
