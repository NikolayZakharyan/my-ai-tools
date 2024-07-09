export default [
  {
    name: "TempName",
    desc: "TEmp desctiption",
    category: "Blog",
    icon: "public/template-icons/blog-title.svg",
    aiPrompts: "tepm ai propms",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter you blog",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
];
