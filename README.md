# Adonisjs + Vue CLI 3

This demo assumes you are serving this Adonisjs app via Valet at `http://127.0.0.1:3333`. If you are serving the adonisjs app at a different local URL, modify it accordingly in `frontend/vue.config.js`.

### To Run the Frontend

``` sh
cd frontend
yarn # OR npm install
yarn serve # OR npm run serve

# build for production:
yarn build # OR npm run build
```

### Steps for Scaffolding From Scratch

1. Create Adonisjs Project

    ``` sh
    adonis new my-project
    cd my-project
    ```

2. Create a Vue CLI 3 project in the Adonisjs app

    ``` sh
    vue create frontend
    # pick router
    ```

3. Configure Vue project

    Create `frontend/vue.config.js`:

    ``` js
    module.exports = {
      // proxy API requests to Valet during development
      devServer: {
        proxy: 'http://127.0.0.1:3333'
      },

      // output built static files to Laravel's public dir.
      // note the "build" script in package.json needs to be modified as well.
      outputDir: '../public',

      // modify the location of the generated HTML file.
      // make sure to do this only in production.
      indexPath: process.env.NODE_ENV === 'production'
        ? '../resources/views/index.edge'
        : 'index.html'
    }
    ```

    Edit `frontend/package.json`:

    ``` diff
    "scripts": {
      "serve": "vue-cli-service serve",
    - "build": "vue-cli-service build",
    + "build": "rm -rf ../public/{js,css,img} && vue-cli-service build --no-clean",
      "lint": "vue-cli-service lint"
    },
    ```

4. Configure Laravel for single-page app.

    **start/routes.js**

    ``` js
   'use strict'

    /*
    |--------------------------------------------------------------------------
    | Routes
    |--------------------------------------------------------------------------
    |
    | Http routes are entry points to your web application. You can create
    | routes for different URL's and bind Controller actions to them.
    |
    | A complete guide on routing is available here.
    | http://adonisjs.com/docs/4.1/routing
    |
    */

    /** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
    const Route = use('Route')

    Route.any('*', 'SpaController.index')
    ```

    **app/Controllers/Http/SpaController.js**

    ``` js
    'use strict'

    class SpaController {
      index ({ view }) {
        return view.render('index')
      }
    }

    module.exports = SpaController
    ```
