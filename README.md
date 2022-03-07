## Description

Hook your Twilio phone number call Webhook to APP_DOMAIN/call/incoming

All calls will be answered by the call controller located under src/controllers

1. Call comes in
2. Caller is placed on a conference call named [CONFERENCE_ROOM_NAME]
3. Outbound call is made to SIP endpoint [process.env[EnvironmentEnum.DIAL_SIP_INTERFACE]]
4. SIP User answers call
5. [APP_DOMAIN/call/sip-answered] is called
6. [APP_DOMAIN/call/sip-answered] will join the SIP user into the conference named [CONFERENCE_ROOM_NAME]

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```