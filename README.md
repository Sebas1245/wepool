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

## WePool SLS Apollo Server
A Serverless GraphQL Server to expose a GraphQL API to be consumed by the React Native client. Visit the [serverless framwework documentation](https://www.serverless.com/) or [Apollo Server documentation](https://www.apollographql.com/docs/) for more information on these techonologies.
### Local development setup
#### Prerequisites
- [Node.JS v18.15.0](https://nodejs.org/en/). For MacOS users, we recommend using [`nvm`](https://formulae.brew.sh/formula/nvm) and installing with Homebrew.
- Serverless framework installed on your Node.JS version. If you don't have it installed, run `npm install -g serverless`.

#### First steps
Clone this repo by running
```
git clone https://github.com/Sebas1245/wepool.git
```
To start using the correct Node.JS version, run 
```
nvm use
```
Move into the Serverless Apollo Server project directory and install all dependencies with
```
cd sls-backend && npm install
```



##### Running MySQL on MacOS
For MacOS, we recommend instaling MySQL through [Homebrew](https://brew.sh/). First run
```
brew doctor && brew upgrade
```
Then, run 
```
brew install mysql
```

Verify the installation by logging into your root user, using your profile's user password.
```
mysql -u root -p
```
##### Prisma Usage
Create a `.env` file in `sls-backend/` directory, and add the following variable to enable Prisma client to connect to your local database
```.env
DATABASE_URL="mysql://root:Mac.2022@localhost:3306/wepool"
```
Verify [Prisma CLI](https://www.prisma.io/docs/concepts/components/prisma-cli/installation) was installed correctly by running
```
npx prisma
```
You should see a help output from Prisma CLI. Next, generate the database from the seed data with
```
npm run prisma:generate
```

If you modify the [Prisma schema](sls-backend/prisma/schema.prisma) you must rerun the generate command to autogenerate the Prisma client and the GraphQL types.

##### Backend is ready to run!

To start the application, run 
```
npm start
```