FROM node:12.18.0-alpine

WORKDIR /usr/src/app

RUN apk --update add vim yarn && yarn add redux react-redux

# CMD sh -c "npm start && /bin/bash"
