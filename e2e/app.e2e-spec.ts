import { MediaQueryPage } from './app.po';

describe('media-query App', () => {
  let page: MediaQueryPage;

  beforeEach(() => {
    page = new MediaQueryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
