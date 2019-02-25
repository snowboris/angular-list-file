import { AngularListFilesPage } from './app.po';

describe('angular-list-files App', () => {
  let page: AngularListFilesPage;

  beforeEach(() => {
    page = new AngularListFilesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
