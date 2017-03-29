import { Sis2Anagular2Page } from './app.po';

describe('sis2-anagular2 App', () => {
  let page: Sis2Anagular2Page;

  beforeEach(() => {
    page = new Sis2Anagular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
