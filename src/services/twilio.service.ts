import { Injectable } from '@nestjs/common';

import { Twilio, twiml, TwimlInterface } from 'twilio';

import EnvironmentEnum from 'enums/environment.enum';

@Injectable()
export default class TwilioService {
    private readonly client: Twilio;

    private readonly twiml: TwimlInterface;

    constructor() {
        this.client = new Twilio(process.env[EnvironmentEnum.TWILIO_SID], process.env[EnvironmentEnum.TWILIO_AUTH_TOKEN]);
        this.twiml = twiml;
    }

    public getClient = (): Twilio => this.client;

    public getTwiml = (): TwimlInterface => this.twiml;
}
