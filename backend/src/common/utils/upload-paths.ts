import { join } from 'node:path';

export function getUploadRoot() {
  const configuredUploadDir = process.env.UPLOAD_DIR?.trim();

  if (configuredUploadDir) {
    return configuredUploadDir;
  }

  if (process.env.VERCEL) {
    return join('/tmp', 'uploads');
  }

  return join(process.cwd(), 'uploads');
}

export function getListingUploadDir() {
  return join(getUploadRoot(), 'listings');
}
