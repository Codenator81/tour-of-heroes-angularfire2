import { PlayngPage } from './app.po';

describe('playng App', function() {
  let page: PlayngPage;

  beforeEach(() => {
    page = new PlayngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
