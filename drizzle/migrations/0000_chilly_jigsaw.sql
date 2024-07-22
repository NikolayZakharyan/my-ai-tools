DO $$ BEGIN
 CREATE TYPE "public"."aiFormField" AS ENUM('input', 'textarea');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."aiTemplateCategory" AS ENUM('development', 'content', 'blog', 'marketing');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aiForms" (
	"id" serial PRIMARY KEY NOT NULL,
	"aiFormField" "aiFormField" DEFAULT 'input',
	"require" boolean DEFAULT false,
	"template_td" integer
);
--> statement-breakpoint
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
CREATE TABLE IF NOT EXISTS "aiTamplates" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(80) DEFAULT 'My ai template name' NOT NULL,
	"description" varchar(255) DEFAULT 'Ai description for intraduce specifictions',
	"ai_prompt" text DEFAULT 'Set yours ai specific promps...' NOT NULL,
	"aiTemplateCategory" "aiTemplateCategory" DEFAULT 'development' NOT NULL
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
	"last_name" varchar,
	"first_name" varchar
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiForms" ADD CONSTRAINT "aiForms_template_td_aiTamplates_id_fk" FOREIGN KEY ("template_td") REFERENCES "public"."aiTamplates"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
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
