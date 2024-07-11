# Portfolio Site Backend

This is the backend for the my [portfolio site](https://github.com/AkiraBrown/PortfolioSite) that will serve as store for my blog posts and information regarding my other projects.

## Commands to get started!

- npm run test => starts jest test suite
- npm run build => creates a build variant of the backend
- npm run pg:init => initialises the postgres database
- npm run restart => re-initialises the postgres database and starts up the server (NOTE: Use with caution as it will get rid of any stored data on the database. I haven't implimented a backup command yet, so stay tuned)

## Organising Commits

At the start of any commit you must specifiy a prefix topic to what type of commit this is followed by a small summary of what was changed. Here's a list of the types of commit prefix and their appropriate uses:

- Feat: Used when the commit is adding a new feature.
- Fix: The commit fixes a bug.
- Docs: Changes made to documentation e.g (README)
- Refactor: Refactoring code either for better performance, readability or scalability
- Chore: Changes made that do not affect the code e.g taking out comments or console commands
- Revert: This commit is to undo a previous commit
- Ci: Changes made to the continuous integration files or scripts

[Source for linting prefixes](https://www.linkedin.com/pulse/conventional-commit-message-linting-ahmad-joya/)
