export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article-details',
  ARTICLE_CREATE = 'article-create',
  ARTICLE_EDIT = 'article-edit',
  ADMIN_PANEL = 'admin-panel',
  FORBIDDEN = 'forbidden',
  NOT_FOUND = 'not-found',
}

export const routes = {
  index: '/',
  about: '/about',
  profile: {
    router: '/profile/:id',
    index: (id: string | number) => `/profile/${id}`,
  },
  articles: {
    index: '/articles',
    create: '/articles/new',
    article: {
      indexRouter: '/articles/:id',
      editRouter: '/articles/:id/edit',
      index: (id: string | number) => ({
        index: `/articles/${id}`,
        edit: `/articles/${id}/edit`,
      }),
    },
  },
  admin: '/admin',
  forbidden: '/forbidden',
  notFound: '*',
};
