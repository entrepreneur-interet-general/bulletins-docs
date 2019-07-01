# Configuration
Configuration files are located in `.env` and `config/app.php`.

## Database
First, specify which database you want to use. Laravel supports various engines (SQLite, MySQL, PostgreSQL, SQL Server). You can specify which database you want to use with `config/database.php` and the related environment variables. To learn more, refer to the [Laravel documentation](https://laravel.com/docs/5.8/database#configuration).

When you've set the database engine, create the application tables with the following command:
```bash
php artisan migrate
```

You can create the schema and generate dummy data with the following command:
```bash
php artisan migrate:fresh --seed
```

## Application settings
Regarding `.env` specific to the app, you should file the following variables:

- `APP_NAME`: The name of the application. By default this is `Bulletins`.
- `APP_ENV`: The application environment. You can set values like `local`, `staging`, `production`.
- `APP_DEBUG`: Enable (`true`) or disable (`false`) stacktraces.
- `APP_URL`: The base URL of the web application.
- `APP_LOCALE`: The locale to use for the application. Use `en` for English or `fr` for French.
- `PROJECTS_CONFIG_FILENAME`: the filename used to define your projects in the `config` folder. Will likely be set to `projects.yml`
- `REPORT_TIMEZONE`: The timezone to use for reports. Use a timezone name from the IANA database like Europe/Paris.
- `REPORT_EMAIL`: To which email address should weekly reports be sent to. Example: `team@company.com`
- `REPORT_SECRET`: The password to see previous reports in the web interface.
- `REPORTS_PASSWORD_HINT`: An hint to guess the password of the web interface. If you don't want to provide an hint, leave it null.
- `SLACK_TOKEN`: The Slack token to use when calling the API.
- `SLACK_GENERAL_CHANNEL`: A Slack channel name where a reminder to fill the reports will be posted on Fridays at 10 AM. Example: #general

## Sending emails
In order to send the weekly bulletins by email, you'll need to specify which SMTP server to use.

To do so, fill all the environment variables starting with `MAIL_` in the `.env` file.

## Defining teams
You can define your various teams / projects in the `config` folder in a YAML file. We provide a sample file in `config/projects.example.yml` that you can copy at `config/projects.yml` for instance. Update the environment variable `PROJECTS_CONFIG_FILENAME` according to the filename you choose.

Here is what it looks like:
```yaml
-
  name: "Example project"
  notification: null
  logo: images/logos/example.png
  members:
    - UEMA8DE9Y
    - UEN897F5U
-
  name: Bar
  notification: slack
  logo: images/logos/bar.png
  members:
    - UEMA8AA8Y
```
