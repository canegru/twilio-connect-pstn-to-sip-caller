import { Body, Controller, Post } from '@nestjs/common';

import EnvironmentEnum from 'enums/environment.enum';
import TwilioService from 'services/twilio.service';

const controllerName = 'call';

@Controller(controllerName)
class AppController {
    constructor(private readonly twilioService: TwilioService) { }

    @Post('incoming')
    async handleIncomingCall(): Promise<string> {
        const twiml = this.twilioService.getTwiml();
        const response = new twiml.VoiceResponse();
        const dial = response.dial();
        dial.conference({
            endConferenceOnExit: true,
            waitUrl: 'http://twimlets.com/holdmusic?Bucket=com.twilio.music.classical&amp;Message=please%20wait',
        }, process.env[EnvironmentEnum.CONFERENCE_ROOM_NAME]);

        const client = this.twilioService.getClient();
        await client.calls.create({
            to: `sip:${process.env[EnvironmentEnum.DIAL_SIP_INTERFACE]}`,
            from: 'internal',
            url: `${process.env[EnvironmentEnum.APP_DOMAIN]}/${controllerName}/sip-answered`,
        });

        return response.toString();
    }

    @Post('sip-answered')
    async handleIncomingSipCall(): Promise<string> {
        const twiml = this.twilioService.getTwiml();
        const response = new twiml.VoiceResponse();
        const dial = response.dial();
        dial.conference({
            endConferenceOnExit: true,
        }, process.env[EnvironmentEnum.CONFERENCE_ROOM_NAME]);

        return response.toString();
    }
}

export default AppController;
