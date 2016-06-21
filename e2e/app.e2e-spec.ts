import { Xap5xapPortfolioPage } from './app.po';

describe('xap5xap-portfolio App', function() {
  let page: Xap5xapPortfolioPage;

  beforeEach(() => {
    page = new Xap5xapPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
