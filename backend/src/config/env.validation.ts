type EnvConfig = Record<string, string | undefined>;

const requiredKeys = ['DATABASE_URL', 'JWT_ACCESS_SECRET'] as const;

export function validateEnv(config: EnvConfig) {
  for (const key of requiredKeys) {
    if (!config[key]?.trim()) {
      throw new Error(`Missing required environment variable: ${key}`);
    }
  }

  const port = parseInteger(config.PORT, 'PORT', 1, 65535);
  const refreshExpiresInDays = parseInteger(
    config.JWT_REFRESH_EXPIRES_IN_DAYS,
    'JWT_REFRESH_EXPIRES_IN_DAYS',
    1,
    365,
  );
  const rateLimitTtl = parseInteger(
    config.RATE_LIMIT_TTL,
    'RATE_LIMIT_TTL',
    1,
    3600,
  );
  const rateLimitLimit = parseInteger(
    config.RATE_LIMIT_LIMIT,
    'RATE_LIMIT_LIMIT',
    1,
    10000,
  );

  const jwtAccessSecret = config.JWT_ACCESS_SECRET;

  if (!jwtAccessSecret || jwtAccessSecret.length < 32) {
    throw new Error('JWT_ACCESS_SECRET must contain at least 32 characters');
  }

  return {
    ...config,
    PORT: port,
    JWT_REFRESH_EXPIRES_IN_DAYS: refreshExpiresInDays,
    RATE_LIMIT_TTL: rateLimitTtl,
    RATE_LIMIT_LIMIT: rateLimitLimit,
  };
}

function parseInteger(
  value: string | undefined,
  key: string,
  min: number,
  max: number,
) {
  if (value === undefined || value === '') {
    return undefined;
  }

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < min || parsed > max) {
    throw new Error(`${key} must be an integer between ${min} and ${max}`);
  }

  return parsed;
}
