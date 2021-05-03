# Strapi application

A quick description of your strapi application

## Deploy

The necessary environment variables are:

| VAR_NAME                     | Value                     |
|------------------------------|---------------------------|
| AWS_ACCESS_KEY_ID            | value_here                |
| AWS_ACCESS_SECRET            | value_here                |
| AWS_BUCKET                   | value_here                |
| AWS_REGION                   | value_here                |
| BUILD_SCRIPT                 | nx run strapi:install     |
| START_SCRIPT                 | nx run strapi:prod        |
| DATABASE_URL                 | \*url for DB connection\* |
| DB_SSL                       | true                      |
| NODE_TLS_REJECT_UNAUTHORIZED | 0                         |

The following addons are needed for a heroku deploy:

```
heroku addons:create heroku-postgresql:hobby-dev
```
