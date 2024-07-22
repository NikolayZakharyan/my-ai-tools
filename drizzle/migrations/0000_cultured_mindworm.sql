CREATE TABLE IF NOT EXISTS "aiOutput" (
	"id" serial PRIMARY KEY NOT NULL,
	"formData" varchar NOT NULL,
	"aiResponse" text,
	"templateSlag" varchar NOT NULL,
	"createdBy" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "emailAddresses" (
	"id" serial PRIMARY KEY NOT NULL,
	"email_address" varchar NOT NULL,
	"email_id" varchar NOT NULL,
	"object" text,
	"user_id" integer,
	CONSTRAINT "emailAddresses_email_id_unique" UNIQUE("email_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"clerk_id" varchar NOT NULL,
	"primary_email_address_id" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"last_name" text DEFAULT 'test',
	"first_name" text DEFAULT 'test'
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiOutput" ADD CONSTRAINT "aiOutput_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "emailAddresses" ADD CONSTRAINT "emailAddresses_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
