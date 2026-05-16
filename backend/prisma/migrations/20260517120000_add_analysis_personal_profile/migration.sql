-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'PARTNERED', 'DIVORCED', 'WIDOWED', 'PREFER_NOT_TO_SAY');

-- AlterTable
ALTER TABLE "Analysis"
ADD COLUMN "profession" TEXT,
ADD COLUMN "maritalStatus" "MaritalStatus",
ADD COLUMN "hasChildren" BOOLEAN,
ADD COLUMN "childrenCount" INTEGER,
ADD COLUMN "personalNotes" TEXT;
