import { IsNumber, IsString } from 'class-validator';

import EnvironmentEnum from 'enums/environment.enum';

export class EnvironmentVariablesInterface {
    [key: string]: string | number;
}

export class EnvironmentVariables extends EnvironmentVariablesInterface {
    @IsString()
    [EnvironmentEnum.TWILIO_SID]: string;

    @IsString()
    [EnvironmentEnum.TWILIO_AUTH_TOKEN]: string;

    @IsString()
    [EnvironmentEnum.APP_NAME]: string;

    @IsString()
    [EnvironmentEnum.APP_DOMAIN]: string;

    @IsString()
    [EnvironmentEnum.CONFERENCE_ROOM_NAME]: string;

    @IsString()
    [EnvironmentEnum.DIAL_SIP_INTERFACE]: string;

    @IsNumber()
    [EnvironmentEnum.PORT]: number;
}
