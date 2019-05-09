# Sample API Service Lambda
Stop writing code that only runs on AWS Lambda!

This is a sample repo that demonstrates ideas in this [presentation](presentation.pdf).

This project uses runtime environment variable `LAMBDA_TASK_ROOT` to differentiate how we start the server. If the environment variable exists we map to a lambda specific handler. If the environment variable doesn't exist we start the http server.

## Standalone
```
npm install
node server.js
```

Test it
```
curl http://localhost:8080/hello
```

## AWS Lambda
Deploy to AWS Lambda (uses serverless but is not required)
```
serverless deploy
```

Test it
```
curl ENDPOINT_RETURNED_FROM_SERVERLESS/hello
```

## Related Projects
https://github.com/apt304/sample-service-lambda-go
