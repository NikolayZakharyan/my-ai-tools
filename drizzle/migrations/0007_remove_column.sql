DO $$ BEGIN
 CREATE TYPE "public"."aiFormFields" AS ENUM('input', 'textarea');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."aiTemplateCategoryEnum" AS ENUM('development', 'content', 'blog');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aiForms" (
	"id" serial PRIMARY KEY NOT NULL,
	"aiFormFields" "aiFormFields" DEFAULT 'input',
	"require" boolean DEFAULT false,
	"template_td" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "aiTamplates" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(80) DEFAULT 'My ai template name' NOT NULL,
	"description" varchar(255) DEFAULT 'Ai description for intraduce specifictions',
	"ai_prompt" text DEFAULT 'Set yours ai specific promps...' NOT NULL,
	"category" "aiTemplateCategoryEnum" DEFAULT 'development' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "last_name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "last_name" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "first_name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "first_name" DROP DEFAULT;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "aiForms" ADD CONSTRAINT "aiForms_template_td_aiTamplates_id_fk" FOREIGN KEY ("template_td") REFERENCES "public"."aiTamplates"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
