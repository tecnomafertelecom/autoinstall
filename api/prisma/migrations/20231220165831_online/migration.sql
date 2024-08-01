-- CreateTable
CREATE TABLE "Online" (
    "id" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,
    "agent_id" TEXT NOT NULL,

    CONSTRAINT "Online_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Online" ADD CONSTRAINT "Online_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "Agent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
