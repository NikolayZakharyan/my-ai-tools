ALTER TABLE "aiTamplates" ADD COLUMN "userId" integer;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiTamplates" ADD CONSTRAINT "aiTamplates_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
