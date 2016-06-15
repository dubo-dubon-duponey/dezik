FROM node:6.2
COPY . /dezik
RUN npm install -g ember-cli
WORKDIR /dezik
EXPOSE 4200
CMD ember serve
