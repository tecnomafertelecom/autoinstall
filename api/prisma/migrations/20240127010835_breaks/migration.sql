/*
  Warnings:

  - The primary key for the `Breaks` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Breaks" DROP CONSTRAINT "Breaks_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Breaks_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Breaks_id_seq";
