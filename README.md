<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/bvmf/main/.github/images/favicon512x512-bvmf.png" align="center" alt=":package: bvmf" />
 <h2 align="center">:package: bvmf</h2>
 <p align="center">Promise-based abstraction integrated with statusinvest.com.br for stock quotes

</p>
</p>

<p align="center">Did you like the project? Please, considerate <a href="https://github.com/hebertcisco/hebertcisco/blob/main/.github/patreon.md">being a supporter</a> and receive exclusive gifts!
 </p>

## Installation

> Clone this repository: `git clone https://github.com/hebertcisco/bvmf-apii`

### Open the directory and install the dependencies

```bash
cd bvmf-api
npm install
```

## Running the API

> Remember to create an `.env` file and put your database information.

```sh
npm run dev
```

## Querying via the API Endpoint

> Curl

```sh
curl --location --request GET 'https://bvmf-api.vercel.app/stocks/itsa4'
```

> HTTP

```http
GET /stocks/itsa4 HTTP/1.1
Host: bvmf-api.vercel.app
```

> URL: [https://bvmf-api.vercel.app/stocks/itsa4](https://bvmf-api.vercel.app/stocks/itsa4)

### Endpoint:

`stocks/[itsa4]`


