/*
  Warnings:

  - You are about to drop the column `agent` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `reason` on the `Agent` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Agent` table. All the data in the column will be lost.
  - Added the required column `email` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `extension` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `login` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refresh_token` to the `Agent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `Agent` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agent" DROP COLUMN "agent",
DROP COLUMN "reason",
DROP COLUMN "status",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "extension" TEXT NOT NULL,
ADD COLUMN     "login" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "photo" TEXT NOT NULL,
ADD COLUMN     "refresh_token" TEXT NOT NULL,
ADD COLUMN     "token" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Pauses" (
    "id" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) NOT NULL,
    "duration" TIMESTAMP(3) NOT NULL,
    "agent_id" TEXT NOT NULL,

    CONSTRAINT "Pauses_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pauses" ADD CONSTRAINT "Pauses_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
