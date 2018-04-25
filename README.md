# Arrecadar
> API

## TABLE OF CONTENTS
- [Running and up](#running-and-up)
- [Support](#support)
- [Contributing](#contributing)
- [History](#history)
- [License](#license)

## Running and up
You can running the api follow the steps bellow:

```bash
git clone https://github.com/arrecadar/api.git
cd api
cp .env.example .env
```

in this point you need to configure your database uri, the only requirement setting is
the mongodb uri, in `.env` find the `MONGODB_URI` and change to your connection uri:

``` bash
MONGODB_URI=mongodb://<user>:<password>@<host>:<port>/<database>
```

Now you can continue, still in API folder:

```bash
yarn # or npm install
yarn start # or npm start
```

### Support
Please [open an issue](https://github.com/arrecadar/api/issues/new) for support.

### Contributing
Please contribute using [github flow](https://guides.github.com/introduction/flow/). Create a branch, add commits and [open a pull request](https://github.com/arrecadar/api/compare?expand=1). For more details see [Contributing](CONTRIBUTING.md)

### History
See the [changelog](CHANGELOG.md) for detailed history.

### License
Code is [under MIT Licence](LICENSE).
