FROM node:8.16.1-alpine AS transpiler
WORKDIR /usr/src/app/tronglu-auth-service
COPY . .
RUN yarn && yarn build

FROM node:8.16.1-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app/tronglu-auth-service
COPY ["package.json", "yarn.lock", ".env", ".env.production", "./"]
RUN yarn --prod
COPY --from=transpiler /usr/src/app/tronglu-auth-service/lib ./lib
COPY --from=transpiler /usr/src/app/tronglu-auth-service/docs ./docs
EXPOSE 3000
CMD yarn prod
