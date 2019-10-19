# Deployment
Deploying a Laravel application is straightforward from a Ubuntu release. You can find tutorials online, for example [written by DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-deploy-a-laravel-application-with-nginx-on-ubuntu-16-04).

The usual dependencies are:
- PHP 7
- PHP-FPM
- Composer
- PHP XML
- PHP Mbstring

You will need to choose a database (SQLite, PostgreSQL, MySQL etc.) and a webserver (Nginx, Apache).

Here is a minimal Nginx configuration:
```sh
server {
  listen 80;

  root /var/www/bulletins/public;

  index index.php;

  server_name bulletins.eig-forever.org;

  location / {
    try_files $uri $uri/ /index.php?$query_string;
  }

  location ~ \.php$ {
    include fastcgi_params;                
    fastcgi_intercept_errors on;
    fastcgi_pass unix:/run/php/php7.2-fpm.sock;
    fastcgi_param SCRIPT_FILENAME $document_root/$fastcgi_script_name;
  }
}
```

Finally, you can get free SSL certificates using [Certbot](https://certbot.eff.org/).

## With Docker

```sh
# Clone the project
git clone https://github.com/entrepreneur-interet-general/bulletins.git
cd bulletins
# Customize docker-compose.yml and config/projects.yml then
# start services
docker-compose up -d
# Initiate datababse
docker-compose exec php php artisan key:generate
docker-compose exec php touch database/database.sqlite
docker-compose exec php php artisan migrate:fresh --seed
```
