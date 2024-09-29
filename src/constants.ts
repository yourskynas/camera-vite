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

export { SOCIAL_MEDIA, ResourceLink, SupportLink, NavLink, FooterTitle };
