# auth-server

Standalone server for client authentication.

## Features

- Supports basic id + secret authentication
- Returns access tokens
- Provides token validation through independent api
- Password bcrypt hashing

## Use

Requirements: node and mongo (auth db created)

Running `npm i && npm start` will get the system running, client api in 3030 and manager api in 4040. Use client api for generating access tokens directly from a client and manager api for checking them from your server.

`npm run init-db` for populating the db with a test account.

```js
{
    "_id" : ObjectId("5ec6b740409c628ce7091056"),
    "accountId" : "12345",
    // Unhashed secret "Testing!"
    "accountSecret" : "$2b$10$.sF726/S1sqOAO5GCTGJKOkw/LfUxS9YCJfdNc.arL9ZUWTKAzvQa",
    "__v" : 0
}
```

#### Generate tokens

Call `localhost:3030/auth/token` with your id and secret

#### Validate tokens

Call `localhost:4040/auth/token` with the id and token

TODO:
- envs
- docker
- token revocability
- account creation
- hashing algorithm selection
- manager data model
- add profiles
- CRUD profiles
- secret change
- credentials for manager connection
...