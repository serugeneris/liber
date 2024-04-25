-- RedefineTables
PRAGMA foreign_keys=OFF;
ALTER TABLE "Book"
ADD COLUMN "featured" BOOLEAN NOT NULL DEFAULT false;
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
