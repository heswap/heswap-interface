import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://101.36.111.81:3001/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://101.36.111.81:3002/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'http://101.36.111.81:3002/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://101.36.111.81:3001/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://101.36.111.81:3001/pools',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/heswap',
      },
    ],
  },
]

export default config
