# React Server Side Render Boilerplate

## Getting Started

1. Duplicate .env.example as .env and enter enviroment variables.
2. run `npm install`.
3. for development enviroment run `npm run dev`.
4. for production build run `npm start`.
5. Application will be accessable on localhost:3000

## Notes

This application uses Typescript for static typing and Jest & Enzyme for unit tests.
For styling it relies strictly on the BEM methodology.

## Pushing to Staging and Production environments

Push to prod

1. switch to master branch
2. git add .
3. git commit -m "commit message"
4. git push
5. git push production master

Push to staging

1. switch to develop branch
2. git add .
3. git commit -m "commit message"
4. git push
5. git push staging develop:master`
