import { usePathname } from 'next/navigation';

import { Bell, Briefcase, ExternalLink, Home, Settings, User, UserCircle, WavesIcon } from 'lucide-react';

export const NavItems = () => {
  const pathname = usePathname();

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: 'Dashboard',
      href: '/dashboard',
      icon: <Home size={20} />,
      active: pathname === '/',
      position: 'top',
    },
    {
      name: 'Create User',
      href: '/createUser',
      icon: <User size={20} />,
      active: isNavItemActive(pathname, '/createUser'),
      position: 'top',
    },
    {
      name: 'Manage Users',
      href: '/updateUser',
      icon: <UserCircle size={20} />,
      active: isNavItemActive(pathname, '/updateUser'),
      position: 'top',
    },
    {
      name: 'View Logs',
      href: '/logs',
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, '/logs'),
      position: 'top',
    },
    {
      name: 'Log Out',
      href: '/settings',
      icon: <ExternalLink size={20} />,
      active: isNavItemActive(pathname, '/settings'),
      position: 'bottom',
    },
  ];
};