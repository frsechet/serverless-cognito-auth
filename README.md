# serverless-cognito-auth

AWS Cognito serverless authentication service backend based on AWS Lambda, API Gateway and the Serverless framework.

Cost-efficient (pay only for active users and actual API calls, no server to setup and manage), reliable, resilient.

Adaptation for the Serverless framework of the excellent cognito-helper package: https://github.com/olegabu/cognito-helper
Hence, read the documentation there about what it does :-)

## getting started

To get started, you require a AWS account, node and npm installed, as well as serverless (v0.5.x only).

```
git clone https://github.com/frsechet/serverless-cognito-auth
cd serverless-cognito-auth
npm install && npm install -g serverless@^0.5
sls project init
```

Setup your Cognito Identity Pool and the external providers (facebook, google etc.), setup your stage variables in `_meta/variables/stage.json` using the `s-variables-sample.json` provided, then run:

```
sls dash deploy
```

For more information about the Serverless framework: http://docs.serverless.com/

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
