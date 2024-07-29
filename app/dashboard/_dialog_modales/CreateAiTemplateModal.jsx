"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  aiTemplateCategoryEnum,
  defaultAiTemplateCategory,
} from "@/drizzle/db/schemas/ai-templates/enums";
import {
  aiFormFieldsEnums,
  defaultAiFormField,
} from "@/drizzle/db/schemas/ai-forms/enums";
import { _createAiTemplate } from "@/drizzle/db/schemas/ai-templates/handler";
import { useUser } from "@clerk/nextjs";

const CreateAiTemplateModal = ({ resultCallback }) => {
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const [templateData, settemplateData] = useState({
    name: "Ai template default name",
    description: "Ai template default description",
    aiPrompt: "Ai template default aiPrompt",
    category: defaultAiTemplateCategory,
    form: [
      {
        field: defaultAiFormField,
        require: false,
      },
      {
        field: defaultAiFormField,
        require: true,
      },
    ],
  });

  const onChangeTemplateData = (name, value, i) => {
    if (name === "form.filed") {
      settemplateData((old) => {
        return {
          ...old,
          form: old.form.map((item, idx) => {
            if (idx === i) {
              return {
                filed: value,
                require: item.require,
              };
            }

            return item;
          }),
        };
      });
      return;
    }
    if (name === "form.require") {
      settemplateData((old) => {
        return {
          ...old,
          form: old.form.map((item, idx) => {
            if (idx === i) {
              return {
                filed: item.field,
                require: value,
              };
            }

            return item;
          }),
        };
      });
      return;
    }

    settemplateData((old) => {
      return {
        ...old,
        [name]: value,
      };
    });
  };

  const onSubmitTemplateData = async () => {
    const response = await _createAiTemplate({
      ...templateData,
      currectUserClarkId: user.id,
    });

    setOpen(false);
    resultCallback(response, "CREATE");
    console.log(response);
  };

  const onAddNewForm = () => {
    settemplateData((old) => {
      return {
        ...old,
        form: [
          ...old.form,
          {
            field: defaultAiFormField,
            require: false,
          },
        ],
      };
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create new tempalte</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px]">
        <DialogHeader>
          <DialogTitle>Create new tempalte</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 pb-16">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
              value={templateData.name}
              onChange={(e) => onChangeTemplateData("name", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              placeholder="Type your message here."
              name={"description"}
              className="col-span-3"
              value={templateData.description}
              onChange={(e) =>
                onChangeTemplateData("description", e.target.value)
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              AI prompts
            </Label>
            <Textarea
              placeholder="Type your message here."
              name={"aiPromt"}
              className="col-span-3"
              value={templateData.aiPrompt}
              onChange={(e) => onChangeTemplateData("aiPromt", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Category
            </Label>
            <Select
              onValueChange={(val) => onChangeTemplateData("category", val)}
              defaultValue={templateData.category}
              className="col-span-3"
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                {aiTemplateCategoryEnum.enumValues.map((category, i) => {
                  return (
                    <SelectItem value={category} key={i}>
                      {category.toUpperCase()}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="description" className="text-right">
              Select forms
            </Label>

            <div className="col-span-3 flex flex-col gap-2">
              {templateData.form.map(({ field, require }, i) => {
                return (
                  <div
                    className="flex gap-4 items-center justify-between"
                    key={i}
                  >
                    <div className="w-[721px]">
                      <Select
                        onValueChange={(val) =>
                          onChangeTemplateData("form.filed", val, i)
                        }
                        defaultValue={field}
                      >
                        <SelectTrigger className="flex-1">
                          <SelectValue placeholder="Theme" />
                        </SelectTrigger>
                        <SelectContent>
                          {aiFormFieldsEnums.enumValues.map((form, i) => {
                            return (
                              <SelectItem value={form} key={i}>
                                {form.toUpperCase()}
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center space-x-2 min-w-fit">
                      <Checkbox
                        id="terms"
                        checked={require}
                        onClick={() => {
                          onChangeTemplateData("form.require", !require, i);
                        }}
                      />
                      <label
                        htmlFor="terms"
                        className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Set form as require
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <div></div>

            <Button
              type="button"
              onClick={onAddNewForm}
              className="col-span-3"
              variant={"secondary"}
            >
              Add new form
            </Button>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={onSubmitTemplateData}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAiTemplateModal;
