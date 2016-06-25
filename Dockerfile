FROM node:latest
COPY . /dezik
RUN npm install -g ember-cli bower
WORKDIR /dezik
RUN cd /dezik && bower install --allow-root
RUN cd /dezik && npm install
EXPOSE 4200
CMD ember serve
