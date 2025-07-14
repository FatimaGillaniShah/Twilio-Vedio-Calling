# Twilio Video App With WhatsApp Integration


## Prerequisites

You must have the following installed:

- [Node.js v14+](https://nodejs.org/en/download/)
- NPM v6+ (comes installed with newer Node versions)

You can check which versions of Node.js and NPM you currently have installed with the following commands:

    node --version
    npm --version


## Install Dependencies

Run `npm install` inside the main project folder to install all dependencies from NPM.



### Install the Twilio CLI


To install twilio-cli using npm, run the following command:

    npm install -g twilio-cli


### Login to the Twilio CLI

Login to the Twilio CLI. You will be prompted for your Account SID and Auth Token, both of which you can find on the dashboard of your [Twilio console](https://twilio.com/console).



### Install the RTC Plugin

This app requires an additional plugin. Install the CLI plugin with:

    twilio plugins:install @twilio-labs/plugin-rtc

## Deploy the app to Twilio

The app is deployed to Twilio with a single command:

    npm run deploy:twilio-cli


### Running a local token server


- Create an account in the [Twilio Console](https://www.twilio.com/console).
- Click on 'Settings' and take note of your Account SID.
- Create a new API Key in the [API Keys Section](https://www.twilio.com/console/video/project/api-keys) under Programmable Video Tools in the Twilio Console. Take note of the SID and Secret of the new API key.
- Create a new Conversations service in the [Services section](https://www.twilio.com/console/conversations/services) under the Conversations tab in the Twilio Console. Take note of the SID generated.
- Store your Account SID, API Key SID, API Key Secret, and Conversations Service SID in a new file called `.env` in the root level of the application (example below).

```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=00000000000000000000000000000000
TWILIO_API_KEY_SID=SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_API_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_CONVERSATIONS_SERVICE_SID=ISxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886  
TWILIO_WHATSAPP_TO=whatsapp:+00000000000

```


### Running the App locally

Run the app locally with

    npm start



### Building

Build the React app with

    npm run build



#### Unit Tests

Run unit tests with

    npm test



#### E2E Tests


npm run cypress:open



