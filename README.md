## Step 0: Add SSL Authority to your browser

If you would like to use secured (with the self-signed certificate) version of the app on localhost, add `dockers/ui/ssl/myCA.pem` as an authority to your preferred browser

## Step 1: Install dependencies

```console
yarn install --frozen-lockfile --check-files
```

## Step 2: Build apps

```console
yarn build
```

## Step 3: Prepare dockers

```console
yarn dockers:prepare
```

## Step 4: Build and run dockers with compose:

In the `dockers` directory:

```console
docker compose up --build
```

## Step 5: Visit [localhost](http://localhost)

You should be redirected to secured [localhost](https://localhost)
