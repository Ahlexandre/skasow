CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');
CREATE TYPE "ProjectType" AS ENUM ('BUY', 'RENT', 'SELL', 'INVEST');
CREATE TYPE "MaturityLevel" AS ENUM ('LOW', 'MEDIUM', 'HIGH');
CREATE TYPE "CommercialPriority" AS ENUM ('LOW', 'MEDIUM', 'HIGH');
CREATE TYPE "AnalysisStatus" AS ENUM ('SENT', 'IN_PROGRESS', 'PRIORITY', 'INCOMPLETE', 'PROCESSED', 'TO_RECONTACT');
CREATE TYPE "Urgency" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

CREATE TABLE "User" (
  "id" TEXT NOT NULL,
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT,
  "passwordHash" TEXT NOT NULL,
  "role" "Role" NOT NULL DEFAULT 'USER',
  "deletedAt" TIMESTAMP(3),
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "RefreshToken" (
  "id" TEXT NOT NULL,
  "tokenHash" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "revokedAt" TIMESTAMP(3),
  "userAgent" TEXT,
  "ipAddress" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "RefreshToken_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Analysis" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "projectType" "ProjectType" NOT NULL,
  "city" TEXT NOT NULL,
  "district" TEXT,
  "budget" DECIMAL(14,2),
  "propertyType" TEXT,
  "surface" DOUBLE PRECISION,
  "urgency" "Urgency" NOT NULL,
  "objective" TEXT,
  "message" TEXT,
  "consentAccepted" BOOLEAN NOT NULL,
  "score" INTEGER NOT NULL,
  "maturityLevel" "MaturityLevel" NOT NULL,
  "commercialPriority" "CommercialPriority" NOT NULL,
  "profileType" TEXT NOT NULL,
  "recommendedService" TEXT NOT NULL,
  "strengths" TEXT[],
  "missingInfo" TEXT[],
  "recommendations" TEXT[],
  "nextAction" TEXT NOT NULL,
  "status" "AnalysisStatus" NOT NULL DEFAULT 'SENT',
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "Analysis_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "AuditLog" (
  "id" TEXT NOT NULL,
  "userId" TEXT,
  "action" TEXT NOT NULL,
  "entity" TEXT NOT NULL,
  "entityId" TEXT,
  "metadata" JSONB,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "User_role_idx" ON "User"("role");
CREATE INDEX "User_deletedAt_idx" ON "User"("deletedAt");
CREATE INDEX "RefreshToken_userId_idx" ON "RefreshToken"("userId");
CREATE INDEX "RefreshToken_expiresAt_idx" ON "RefreshToken"("expiresAt");
CREATE INDEX "Analysis_userId_idx" ON "Analysis"("userId");
CREATE INDEX "Analysis_projectType_idx" ON "Analysis"("projectType");
CREATE INDEX "Analysis_maturityLevel_idx" ON "Analysis"("maturityLevel");
CREATE INDEX "Analysis_commercialPriority_idx" ON "Analysis"("commercialPriority");
CREATE INDEX "Analysis_status_idx" ON "Analysis"("status");
CREATE INDEX "Analysis_score_idx" ON "Analysis"("score");
CREATE INDEX "Analysis_createdAt_idx" ON "Analysis"("createdAt");
CREATE INDEX "AuditLog_userId_idx" ON "AuditLog"("userId");
CREATE INDEX "AuditLog_entity_entityId_idx" ON "AuditLog"("entity", "entityId");

ALTER TABLE "RefreshToken" ADD CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Analysis" ADD CONSTRAINT "Analysis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
