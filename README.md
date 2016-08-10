# serverless-cognito-auth

AWS Cognito serverless authentication service backend based on AWS Lambda, API Gateway and the Serverless framework.
Adaptation for Serverless of the excellent cognito-helper package: https://github.com/olegabu/cognito-helper

## getting started

```
npm install
sls init
sls dash deploy
```

## REST interface

http method | url | description
------------|-----|------------
POST | /auth/login | login with email and password
POST | /auth/signup | sign up with name, email and password
POST | /auth/me | retrieve user profile
POST | /auth/update | update user password
POST | /auth/credentials | get AWS Credentials to call other AWS services
POST | /auth/forgot | send email with password reset link
POST | /auth/:provider | login with OAuth provider or link an account
POST | /auth/unlink | unlink an OAuth account
