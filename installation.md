# Installation
Bulletins is a [Laravel](https://laravel.com) 5.8 project. It requires PHP 7.1+ and [Composer](https://getcomposer.org).

A standard installation may look like this:
```bash
# Install the project using Composer
composer create-project --prefer-dist --stability=dev entrepreneur-interet-general/bulletins
cd bulletins
# Copy the default env file
cp .env.example .env
php artisan key:generate
# Start with a SQLite database and some sample data
touch database/database.sqlite
php artisan migrate:fresh --seed
```

More information can be found on [Laravel's documentation](https://laravel.com/docs/5.8#installation).
