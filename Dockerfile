# specify the base image
FROM node:alpine

# use a /app as a work/current directory
WORKDIR /app

# copy the sever file to /app
# express application requires the node_module directory
# . in source location will copy everything incluing node_modules
COPY . .

# expose 9898 for outesiders
EXPOSE 9898

# run the server
CMD node server.js