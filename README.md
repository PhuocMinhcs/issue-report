# Initial setup
    yarn run-install

# Start server
    yarn start

***Note: Please make sure port 3000 is ready to use***

## Import DB
Currently I'm using mysql to develop this app, so you have to import the sql file before run the app.
Database file name is `database.sql`

## Update the configs in .env file
DATABASE_HOST = <your_db_host>
DATABASE_PORT = <your_db_port>
DATABASE_NAME = <your_db_name>
DATABASE_USERNAME = <your_db_username>
DATABASE_PASSWORD = <your_db_pass>

## Completed tasks
### Apis
    1. Get issues with pagination:
        - Endpoint: `issues?page=0&per_page=10`
        - Query params: { page: int }(optional), { per_page: int }(optional)
    2. Count the issues
        - Endpoint: `issues/count`
    3. Count the workplace issues by year
        - Endpoint: `issues/:year?workplace=HOT_HOT_DESK`
        - Params: { year: int }(required)
        - Query params: { workplace: string }(required)
### UI
    1. Application listing page
    2. Application details page
    3. Get list of applications via api
    4. Get application details via api

## Not Complete tasks
    1. Missing some Apis
    2. Dont have test script yet
    3. Missing UI to create application
