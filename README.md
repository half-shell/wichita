# Wichita
[Wichita](https://github.com/half-shell/wichita) is a sample nodejs API to mimick the librarize.me API.

## Setup
```bash
git clone https://github.com/half-shell/wichita.git
# Start docker conteneur
npm start

# Sample request
$ curl http://localhost:3000/ping
PONG
```

## Routes
Until we have a real API documentation with [apidoc](https://apidocjs.com), here are the routes to use:

```
/auth/ (POST)
/logout/ (GET)

/users/ (POST, GET, PUT)
/users/<user_id>/ (POST, GET, PUT)
/users/<user_id>/friends/ (POST, GET, PUT, DELETE)
/users/<user_id>/bookcase/ (POST, GET, PUT, DELETE)
/users<user_id>/borrowings/ (POST, GET, PUT, DELETE)

/products/ (POST, GET, PUT, DELETE)
/products/<product_id> (POST, GET, PUT, DELETE)
/products/search/ (GET)
/products/scanner/ (GET)

```

## Guidelines
* 2 branches, `master` and `develop` (no commits on master)
* Docker conteneur for noSQL database (mongoDB)
* RESTful API https://github.com/WhiteHouse/api-standards

## Documentation
API documentation follows the following routes:
```
https://api.librarize.fr/library/
```
