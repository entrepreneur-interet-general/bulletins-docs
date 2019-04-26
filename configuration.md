# Configuration
Configuration files are located in `.env` and `config/app.php`.

## Database
First, specify which database you want to use. Laravel supports various engines (SQLite, MySQL, PostgreSQL, SQL Server). You can specify which database you want to use with `config/database.php` and the related environment variables. To learn more, refer to the [Laravel documentation](https://laravel.com/docs/5.8/database#configuration).

When you've set the database engine, create the application tables with the following command:
```
php artisan migrate
```

You can create the schema and generate dummy data with the following command:
```
php artisan migrate:fresh --seed
```

## App settings
Regarding `.env` specific to the app, you should file the following variables:

- `REPORT_TIMEZONE`: The timezone to use for reports. Use a time zone name from the IANA database like Europe/Paris.
- `REPORT_EMAIL`: To which email address should weekly reports be sent to. Example: `team@company.com`
- `REPORT_SECRET`: The password to see previous reports in the web interface.
- `REPORTS_PASSWORD_HINT`: An hint to guess the password of the web interface. If you don't want to provide an hint, leave it null.
- `SLACK_GENERAL_CHANNEL`: A Slack channel name where a reminder to fill the reports will be posted on Fridays at 10 AM. Example: #general

## Defining teams
You can define your various teams / projects in `config/app.php` under the key `projects`.

```php
<?php
return [
    // More configuration

    'projects' => new App\Projects([
      // Define a project named "Project name 1" with reminders on Slack
      // and 2 members in this project. The array are Slack user IDs.
      // The project logo is stored in `public/images/logo/project-logo.png`
      new App\Project('Project name 1', 'slack', ['UEMA8DE8Y', 'UEN897F5K'], 'images/logo/project-logo.png'),
      // A project with no Slack reminders and the same logo
      new App\Project('Project name 2', null, [], 'images/logo/project-logo.png'),
    ]),

    // More configuration
];
```
