## Add SSL Authority to your browser

If you would like to use secured (with the self-signed certificate) version of the app on localhost, add `dockers/ui/ssl/myCA.pem` as an authority to your preferred browser

## Prepare Docker files & push to remote via SSH:

```console
yarn dockers:prepare-and-push
```

## Start docker compose on remote:

```console
yarn dockers:remote:start
```

## Stop docker compose on remote:

```console
yarn dockers:remote:stop
```
