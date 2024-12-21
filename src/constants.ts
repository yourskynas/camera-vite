const SOCIAL_MEDIA = ['vk', 'pinterest', 'reddit'];

const FooterTitle = {
  Navigation: 'Навигация',
  Resources: 'Ресурсы',
  Support: 'Поддержка',
} as const;

const ResourceLink = {
  OperatorCourses: 'Курсы операторов',
  Blog: 'Блог',
  Community: 'Сообщество',
} as const;

const SupportLink = {
  FAQ: 'FAQ',
  AskQuestion: 'Задать вопрос',
} as const;

const NavLink = {
  Catalog: 'Каталог',
  Guarantees: 'Гарантии',
  Delivery: 'Доставка',
  AboutCompany: 'О компании',
} as const;

const AppRoute = {
  Catalog: '/catalog',
  Camera: '/camera/:id',
  NotFound: '*',
  Basket: '/card'
} as const;

const APIRoute = {
  Cameras: '/cameras',
  Coupons: '/coupons',
  Reviews: '/reviews',
  Promo: '/promo',
  Similar: '/similar',
  Order: '/orders'
} as const;

const NameSpace = {
  Data: 'DATA',
  Main: 'MAIN'
} as const;

const TitlePlug = {
  NotFound: '404 Not Found',
  IsLoading: 'Loading...'
} as const;

const SortType = {
  ByPrice: 'sortPrice',
  ByPopular: 'sortPopular',
} as const;

const Direction = {
  Up: 'up',
  Down: 'down',
} as const;

export { SOCIAL_MEDIA, ResourceLink, SupportLink, NavLink, FooterTitle, AppRoute, APIRoute, NameSpace, TitlePlug, Direction, SortType };
