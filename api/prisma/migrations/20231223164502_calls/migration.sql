-- CreateTable
CREATE TABLE "Calls" (
    "id" TEXT NOT NULL,
    "agentId" TEXT NOT NULL,
    "linkedId" TEXT NOT NULL,
    "source" TEXT,
    "status" TEXT,
    "destination" TEXT,
    "extension_answered" TEXT,
    "recording" TEXT,
    "start_date" TIMESTAMP(3),
    "answered_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "real_direction" TEXT,
    "direction" TEXT,
    "queue" TEXT,
    "hangup_num" TEXT,
    "hangup_cause" TEXT,
    "feedback" BOOLEAN NOT NULL DEFAULT false,
    "tratativa" TEXT,

    CONSTRAINT "Calls_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Calls" ADD CONSTRAINT "Calls_agentId_fkey" FOREIGN KEY ("agentId") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
