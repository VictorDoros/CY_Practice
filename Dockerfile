FROM cypress/included:12.7.0


WORKDIR /app
COPY . .


RUN npm install

CMD ["npm", "run", "npx cypres run"]