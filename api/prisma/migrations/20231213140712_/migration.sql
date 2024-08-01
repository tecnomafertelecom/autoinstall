/*
  Warnings:

  - A unique constraint covering the columns `[extension]` on the table `Agent` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[login]` on the table `Agent` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `extension` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Made the column `login` on table `Agent` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Agent" ADD COLUMN     "status" TEXT,
DROP COLUMN "extension",
ADD COLUMN     "extension" INTEGER NOT NULL,
ALTER COLUMN "login" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Agent_extension_key" ON "Agent"("extension");

-- CreateIndex
CREATE UNIQUE INDEX "Agent_login_key" ON "Agent"("login");
