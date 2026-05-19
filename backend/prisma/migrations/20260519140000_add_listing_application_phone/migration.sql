ALTER TABLE "ListingApplication" ADD COLUMN "phone" TEXT NOT NULL DEFAULT '';
ALTER TABLE "ListingApplication" ALTER COLUMN "phone" DROP DEFAULT;
