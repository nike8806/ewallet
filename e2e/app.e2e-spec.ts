import { EWalletPage } from './app.po';

describe('e-wallet App', () => {
  let page: EWalletPage;

  beforeEach(() => {
    page = new EWalletPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
