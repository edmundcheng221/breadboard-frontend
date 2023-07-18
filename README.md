# Inspiration

Implement a REST endpoint and simple client that will accept a query parameter for an electronic part, and return data aggregated from various supplier APIs. For the purpose of this assignment, the supplier APIs have been simplified to two publicly accessible JSON files, and the only data we should expect to see aggregated would come from part number `0510210200`. It is okay to return the data as JSON rendered in your simple client. Imagine, that this system is going to be running in production and is going to be accessed by the public. 

# About this application

This application is running on React 18

This application doesn't do much, it just injects the endpoint

`http://localhost:3080/v1/parts?partNumber=0510210200`

The part number in this case is `0510210200`

And displays the result to the user

# Installation

Run this command in the root directory

```
$ npm install
```

# Serving Application

```
$ npm run start
```

