# Gatsby Starter

A boilerplate for static sites built with Gatsby.\
Built on [Gatsby.js](https://www.gatsbyjs.org/), a static site generator built with React.js.

- production environment - PROD URL GOES HERE
- staging environment - STAGE URL GOES HERE

## Prerequisites

1.  **Install the Gatsby CLI.**

    Make sure that you have the Gatsby CLI program installed:

    ```sh
    npm install --global gatsby-cli
    ```

2.  **Install dependencies.**

    Install from package.json

    ```sh
    yarn
    ```

3.  **Start developing.**

    Navigate into your the project directory and start it up.

    ```sh
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    \_Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).\_

5.  **Suggested Tools.**

    Prettier

    ```sh
    npm install --global prettier
    ```

    VS Code - Respects `editor.formatOnSave` setting.\
    Sublime Text - https://packagecontrol.io/packages/JsPrettier

## What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.lock

1.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

13. **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm. This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.

## Package Notes

- **ESLint + Prettier:** Prettier manages the stylistic rules around code formatting. ESLint manages the code quality rules. They work together in perfect harmony.

- **Stylelint:** It's like ESLint but for your SASS and CSS files!

- **Husky:** This makes sure you don't commit any code with ESLint errors. It'll check before it evens makes it to your repo.

## Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

## Docker

#### Testing the build

- clone repo
- cd into repo
- `docker build -t dominos-points-for-pies:build . -f Dockerfile-develop`
- `docker run --rm -it dominos-points-for-pies:build bash`
- You will be dropped into the /app directory with all entire repo and all the build assets under /app/public

#### Testing with nginx

- clone repo
- cd into repo
- `docker build -t dominos-points-for-pies:local . -f Dockerfile-develop`
- `docker run --rm -p 8080:80 dominos-points-for-pies:local`
- You should be able to browse the site at http://localhost:8080. Use CTRL-C to exit. This is a near clone of what runs on stage/prod. Only differences is it runs on port 8080 and doesn't have SSL enabled.
- Sample nginx https://raghuvirkasturi.com/gatsby-nginx-config/
