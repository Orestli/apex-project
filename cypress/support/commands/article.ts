import type { Article } from '../../../src/entities/Article';

const defaultArticle = {
  title: 'Testing Article',
  subtitle: 'Economic',
  img:
    'https://media.istockphoto.com/id/1345912457/photo/financial-stock-market-graph-selective-focus.' +
    'jpg?s=612x612&w=0&k=20&c=I-XKq4_2c3rOJPezkG5J6DNbl65OVgmGbX4yrp5T7qQ=',
  views: 26,
  createdAt: '03.01.2023',
  userId: '1',
  type: ['ECONOMICS'],
  blocks: [],
};

export const createArticle = (article?: Article) => {
  return cy
    .request({
      method: 'POST',
      url: 'http://localhost:8000/articles',
      headers: {
        Authorization: 'token',
      },
      body: article ?? defaultArticle,
    })
    .then(({ body }) => body);
};

export const removeArticle = (articleId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${articleId}`,
    headers: {
      Authorization: 'token',
    },
  });
};

declare global {
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(articleId: string): Chainable<void>;
    }
  }
}
