# WePool App
Mobile application to organize carpool rides within an organization.

## WePool Mobile App 
This is a [React Native](https://reactnative.dev/) app built with [Expo](https://expo.dev/). 
### Local development setup
#### Prerequisites
- [Node.JS v18.15.0](https://nodejs.org/en/). For MacOS users, we recommend using [`nvm`](https://formulae.brew.sh/formula/nvm) and installing with Homebrew.

#### Getting started
Clone this repo by running
```
git clone https://github.com/Sebas1245/wepool.git
```
Move into the React Native project directory and install all dependencies with
```
cd wepool-app && npm install
```

To start the application, run 
```
npm start
```

## WePool SLS Backend
A Serverless GraphQL Server to expose a GraphQL API to be consumed by the React Native client. Visit the [serverless framwework documentation](https://www.serverless.com/) or [Apollo Server documentation](https://www.apollographql.com/docs/) for more information on these techonologies.
### Local development setup
#### Prerequisites
- [Node.JS v18.15.0](https://nodejs.org/en/). For MacOS users, we recommend using [`nvm`](https://formulae.brew.sh/formula/nvm) and installing with Homebrew.
- Serverless framework installed on your Node.JS version. If you don't have it installed, run `npm install -g serverless`.

#### Getting started
Clone this repo by running
```
git clone https://github.com/Sebas1245/wepool.git
```
Move into the Serverless Apollo Server project directory and install all dependencies with
```
cd sls-backend && npm install
```

To start the application, run 
```
npm start
```



