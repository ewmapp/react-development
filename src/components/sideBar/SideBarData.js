import {
  HomeIcon,
  TriangleDowIcon,
  PersonIcon,
  CircleIcon,
} from '@radix-ui/react-icons'

export const SideBarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Participantes',
    path: '/participantes',
    icon: <PersonIcon />,
  },
  {
    title: 'Vendas',
    path: '/vendas',
    icon: <CircleIcon />,
    iconToggle: <TriangleDowIcon />,
    subNav: [
      {
        title: 'Extrado',
        path: '/vendas/extrato',
        icon: <PersonIcon />,
      },
      {
        title: 'Lancamentos',
        path: '/vendas/lancamentos',
        icon: <PersonIcon />,
      },
    ],
  },
]
