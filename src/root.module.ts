import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import * as dotenv from 'dotenv';

import { EnvironmentVariables } from 'models/environment';

import TwilioService from 'services/twilio.service';
import ValidateEnvironment from 'validators/environment.validator';

import CallController from './controllers/call.controller';

dotenv.config();

@Module({
    imports: [
        ConfigModule.forRoot({
            validate: ValidateEnvironment(EnvironmentVariables),
        }),
    ],
    controllers: [CallController],
    providers: [TwilioService],
})
export default class AppModule { }
