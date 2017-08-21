import { GitBlogPage } from './app.po';

describe('git-blog App', () => {
  let page: GitBlogPage;

  beforeEach(() => {
    page = new GitBlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
