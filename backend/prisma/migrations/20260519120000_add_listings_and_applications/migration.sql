CREATE TYPE "ListingStatus" AS ENUM ('DRAFT', 'PUBLISHED', 'ARCHIVED');
CREATE TYPE "ListingApplicationStatus" AS ENUM ('INTERESTED', 'CONTACTED', 'VISIT_SCHEDULED', 'RESERVED', 'REJECTED', 'CANCELLED');

CREATE TABLE "Listing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "propertyType" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "district" TEXT,
    "address" TEXT,
    "surface" DOUBLE PRECISION,
    "price" DECIMAL(14,2),
    "priceLabel" TEXT,
    "rooms" INTEGER,
    "status" "ListingStatus" NOT NULL DEFAULT 'DRAFT',
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ListingApplication" (
    "id" TEXT NOT NULL,
    "listingId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "budget" TEXT NOT NULL,
    "profession" TEXT,
    "maritalStatus" "MaritalStatus",
    "hasChildren" BOOLEAN,
    "childrenCount" INTEGER,
    "message" TEXT,
    "status" "ListingApplicationStatus" NOT NULL DEFAULT 'INTERESTED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ListingApplication_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Listing_status_idx" ON "Listing"("status");
CREATE INDEX "Listing_city_idx" ON "Listing"("city");
CREATE INDEX "Listing_propertyType_idx" ON "Listing"("propertyType");
CREATE INDEX "Listing_createdAt_idx" ON "Listing"("createdAt");

CREATE UNIQUE INDEX "ListingApplication_listingId_userId_key" ON "ListingApplication"("listingId", "userId");
CREATE INDEX "ListingApplication_listingId_idx" ON "ListingApplication"("listingId");
CREATE INDEX "ListingApplication_userId_idx" ON "ListingApplication"("userId");
CREATE INDEX "ListingApplication_status_idx" ON "ListingApplication"("status");
CREATE INDEX "ListingApplication_createdAt_idx" ON "ListingApplication"("createdAt");

ALTER TABLE "Listing" ADD CONSTRAINT "Listing_createdById_fkey"
FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "ListingApplication" ADD CONSTRAINT "ListingApplication_listingId_fkey"
FOREIGN KEY ("listingId") REFERENCES "Listing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "ListingApplication" ADD CONSTRAINT "ListingApplication_userId_fkey"
FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
