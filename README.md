#  Accessibility Filescan Server
This node.js server accepts PDF files and returns accessibilty information
about the file.  It is intended to interface with external systems such as
Drupal, Moodle, and WordPress to provide information about the accessibility of
the files contained in the system.

# Requirements
Node.js: [https://nodejs.org/]

# Installation
Download this repository
Enter the directory and type `npm install`

# Running the server
To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```


# Notes
This is a modification of the original swathmore server, adding logging and
daemonization.

It should be run by pm2 which can be installed by running this command as root:

&#35; npm install -g pm2

also, if root is needed to run npm install in the filescan-server directory,
then permissions can be sent back to distid with these commands:

&#35; chown distid:distid \`find node_modules -type d\`

&#35; chown distid:distid \`find node_modules -type f\`



This server was generated by the
[swagger-codegen](https://github.com/swagger-api/swagger-codegen) project.  By
using the [OpenAPI-Spec](https://github.com/OAI/OpenAPI-Specification) from a
remote server, you can easily generate a server stub.

This project leverages the mega-awesome
[swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which
does most all the work.

