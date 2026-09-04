Week 02 Reflection

1. Include a link to one of your merged and closed GitHub pull requests.
GitHub Pull Request Link: https://github.com/hengage/cse341-books/pull/13

2. Include a link to one of your closed GitHub issues.
GitHub Issue Link: https://github.com/hengage/cse341-books/issues/8

3. Which issue took more or less time than expected? Why?
Answer: Issue #10 (Implement Swagger Documentation) took longer than expected because I ran into unexpected issues with dependency installation and needed to configure the swagger-autogen script properly to reflect the routes in my API.

4. Include a link to your walk-through video. The video must include your name, show the hosted web service working, explain the get-single-book controller, and discuss status codes.
Video Link: [PENDING: Record and add link]

5.a. Include a GitHub link to a file that shows how your app uses sensitive data, such as the MongoDB connection string. Do not put the actual secret in GitHub.
GitHub Link: https://github.com/hengage/cse341-books/blob/main/src/db/connect.js

5.b. How did you store sensitive data? Why is that approach important?
Answer: Sensitive data is stored in a local .env file which is excluded from version control via .gitignore. This is critical to prevent accidental exposure of database credentials in the public repository, maintaining security.

6.a. Include a GitHub link to a file that shows one other implementation decision you made.
GitHub Link: https://github.com/hengage/cse341-books/blob/main/src/constants.js

6.b. What decision does this file show, and why did you make that choice?
Answer: I decided to centralize HTTP status codes in a constants.js file. This improves code maintainability and ensures consistency across all controller handlers when returning status codes.

7. What is one specific habit or process you will work on next week?
Answer: I will work on testing my endpoints locally with curl (or similar tools) more rigorously before creating a Pull Request to catch edge cases earlier in the development process.
