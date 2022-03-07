import { plainToClass } from 'class-transformer';
import { validateSync } from 'class-validator';

import { EnvironmentVariables } from 'models/environment';

const ValidateEnvironment = (environmentVariables: typeof EnvironmentVariables) => (config: Record<string, unknown>): EnvironmentVariables => {
    const validatedConfig = plainToClass(
        environmentVariables,
        config,
        {
            enableImplicitConversion: true,
        },
    );

    const errors = validateSync(validatedConfig, { skipMissingProperties: false });

    if (errors.length) {
        throw new Error(errors.toString());
    }

    return validatedConfig;
};

export default ValidateEnvironment;
