-- CreateTable
CREATE TABLE "Breaks" (
    "id" SERIAL NOT NULL,
    "reason" TEXT NOT NULL,
    "time" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Breaks_pkey" PRIMARY KEY ("id")
);
