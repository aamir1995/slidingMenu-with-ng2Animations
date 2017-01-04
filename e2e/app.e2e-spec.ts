import { Ng2AnimateTutorialPage } from './app.po';

describe('ng2-animate-tutorial App', function() {
  let page: Ng2AnimateTutorialPage;

  beforeEach(() => {
    page = new Ng2AnimateTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
