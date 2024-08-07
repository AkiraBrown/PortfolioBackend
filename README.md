# Portfolio Site Backend

This is the backend for the my [portfolio site](https://github.com/AkiraBrown/PortfolioSite) that will serve as a store for my blog posts and information regarding my other projects. Fork and clone the repository

## Commands to get started!

- npm run test => starts jest test suite
- npm run build => creates a build variant of the backend
- npm run pg:init => initializes the postgres database
- npm run restart => re-initializes the postgres database, populates the database and starts up the server (NOTE: Use with caution as it will get rid of any stored data on the database. I haven't implemented a backup command yet, so stay tuned)

## Organizing Commits

At the start of any commit you must specify a prefix topic to what type of commit this is followed by a small summary of what was changed. Here's a list of the types of commit prefix and their appropriate uses:

- feat: Used when the commit is adding a new feature.
- fix: The commit fixes a bug.
- docs: Changes made to documentation e.g (README)
- refactor: Refactoring code either for better performance, readability or scalability
- chore: Changes made that do not affect the code e.g taking out comments or console commands
- revert: This commit is to undo a previous commit
- ci: Changes made to the continuous integration files or scripts
- style: Changes to the style.
- ticket: A commit to resolve a ticket on github

[Source for linting prefixes](https://www.linkedin.com/pulse/conventional-commit-message-linting-ahmad-joya/)
