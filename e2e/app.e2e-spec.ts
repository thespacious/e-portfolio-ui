import { EPortfolioPage } from './app.po';

describe('e-portfolio App', () => {
  let page: EPortfolioPage;

  beforeEach(() => {
    page = new EPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
