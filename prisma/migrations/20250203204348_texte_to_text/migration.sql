/*
  Warnings:

  - You are about to drop the column `texte` on the `Citation` table. All the data in the column will be lost.
  - Added the required column `text` to the `Citation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Citation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Citation" ("author", "createdAt", "id") SELECT "author", "createdAt", "id" FROM "Citation";
DROP TABLE "Citation";
ALTER TABLE "new_Citation" RENAME TO "Citation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
