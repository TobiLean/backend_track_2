-- CreateTable
CREATE TABLE "OrganisationsAndUsers" (
    "user_id" TEXT NOT NULL,
    "org_id" TEXT NOT NULL,

    CONSTRAINT "OrganisationsAndUsers_pkey" PRIMARY KEY ("user_id","org_id")
);

-- AddForeignKey
ALTER TABLE "OrganisationsAndUsers" ADD CONSTRAINT "OrganisationsAndUsers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganisationsAndUsers" ADD CONSTRAINT "OrganisationsAndUsers_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organisation"("orgId") ON DELETE RESTRICT ON UPDATE CASCADE;
