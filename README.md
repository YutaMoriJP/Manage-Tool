# Management App:

## Project Structure

- Project Structure is inspired by this [post](https://www.robinwieruch.de/react-folder-structure/). Also follows the redux toolkit guideline for redux related code.

* `./pages/*`: Contains the pages of the Next App managed by the next router.

* `./pages/api/*`: Contains the server side of the app that communicates with APIs and the Database

* `./src/components/*`: Contains generic utility components like Button, Card, etc. They are meant to be re-used in other components and abstract common tasks.

* `./src/features/*`: Contains components that have more complex logic and are features. Such components will use generic components from `./components/*`

* `./server/*`: Contains server side code used in the `pages/api/*` files.

* `./utils/*`: Contains helper functions.

* `./data/*`: Contains data that is used across different files. Coule be named constants as well.

* `./styled/*`: Contains styled components that can be re-used in the app.

* `./typings/*`: Contains general typings that used across different files.

* `./app/*`: Contains the Redux Store and typed `useDispatch` and `useSelector` hooks.

* `./features/*`: Contains the redux reducers named `{{name}}.slice.ts`.

## Note:

> Furthermore, if a service/utils from the previous section is tightly coupled to a feature component, then move the service to the specific feature folder. The same may apply to other folders which were previously separated by technical concern:

```jsx
- src/
--- feature/
----- Payment/
------- PaymentForm/
------- PaymentWizard/
------- services/
--------- Currency/
----------- index.js
----------- service.js
----------- test.js

```
