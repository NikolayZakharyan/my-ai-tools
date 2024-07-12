export enum SlugEnum {
  BlogTitle = "generate-blog-title",
  ProductDescription = "generate-product-description",
  SocialMediaPost = "generate-social-media-post",
  EmailNewsletter = "generate-email-newsletter",
  Resume = "generate-resume",
  EmailResponse = "generate-email-response",
  ImageGenerator = "generate-image",
  CodeReviewer = "review-code",
}

export interface FORM {
  label: string;
  field: "input" | "textarea";
  name: string;
  required?: boolean;
}

export interface TEMPLATE {
  name: string;
  desc: string;
  category: string;
  icon: string;
  bgImage: string;
  aiPrompts: string;
  slug: SlugEnum;  // Updated slug type to use the Slug enum
  form: FORM[];
  likes?: number;
}

export const getTemplateBySlug = (slug: SlugEnum) => {
  return templates.find(template => template.slug === slug) ;
}

const templates: TEMPLATE[] = [
  {
    name: "Blog title",
    desc: "Generate engaging and SEO-friendly blog titles that attract readers and improve your content's visibility.",
    category: "Blog",
    icon: "/template-icons/blog-title.svg",
    bgImage: "https://picsum.photos/300/200?random=1",
    aiPrompts: "Generate a catchy blog title based on the provided niche and outline. Use keywords and phrases that are relevant to the blog's content.",
    slug: SlugEnum.BlogTitle,
    form: [
      {
        label: "Enter your blog niche",
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
  {
    name: "Product Description",
    desc: "Create compelling and detailed product descriptions that highlight key features and benefits.",
    category: "E-commerce",
    icon: "/template-icons/product-description.svg",
    bgImage: "https://picsum.photos/300/200?random=2",
    aiPrompts: "Generate a detailed product description based on the product's features and benefits. Include persuasive language to encourage purchases.",
    slug: SlugEnum.ProductDescription,
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter product features",
        field: "textarea",
        name: "features",
      },
    ],
  },
  {
    name: "Social Media Post",
    desc: "Craft engaging social media posts that capture attention and encourage interaction on various platforms.",
    category: "Social Media",
    icon: "/template-icons/social-media-post.svg",
    bgImage: "https://picsum.photos/300/200?random=3",
    aiPrompts: "Generate an engaging social media post based on the provided content and target audience. Use hashtags and mentions appropriately.",
    slug: SlugEnum.SocialMediaPost,
    form: [
      {
        label: "Enter post content",
        field: "textarea",
        name: "content",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "Email Newsletter",
    desc: "Design informative and visually appealing email newsletters that keep your audience informed and engaged.",
    category: "Email Marketing",
    icon: "/template-icons/email-newsletter.svg",
    bgImage: "https://picsum.photos/300/200?random=4",
    aiPrompts: "Generate an email newsletter based on the provided content and audience. Include headlines, subheadings, and calls to action.",
    slug: SlugEnum.EmailNewsletter,
    form: [
      {
        label: "Enter email content",
        field: "textarea",
        name: "content",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "input",
        name: "audience",
      },
    ],
  },
  {
    name: "AI Resume Builder",
    desc: "Create professional and well-structured resumes that showcase your skills and experience effectively.",
    category: "Career",
    icon: "/template-icons/resume-builder.svg",
    bgImage: "https://picsum.photos/300/200?random=5",
    aiPrompts: "Generate a professional resume based on the provided personal information, work experience, and skills. Ensure proper formatting and structure.",
    slug: SlugEnum.Resume,
    form: [
      {
        label: "Enter your name",
        field: "input",
        name: "name",
        required: true,
      },
      {
        label: "Enter your work experience",
        field: "textarea",
        name: "experience",
        required: true,
      },
      {
        label: "Enter your skills",
        field: "textarea",
        name: "skills",
        required: true,
      },
    ],
  },
  {
    name: "AI Email Assistant",
    desc: "Generate professional and effective email responses based on the context and requirements provided.",
    category: "Communication",
    icon: "/template-icons/email-response.svg",
    bgImage: "https://picsum.photos/300/200?random=6",
    aiPrompts: "Generate an appropriate email response based on the provided context and requirements. Maintain a professional tone and clarity.",
    slug: SlugEnum.EmailResponse,
    form: [
      {
        label: "Enter email context",
        field: "textarea",
        name: "context",
        required: true,
      },
      {
        label: "Enter email requirements",
        field: "textarea",
        name: "requirements",
      },
    ],
  },
  {
    name: "AI Image Generator",
    desc: "Generate high-quality and unique images based on the provided descriptions and parameters.",
    category: "Design",
    icon: "/template-icons/image-generator.svg",
    bgImage: "https://picsum.photos/300/200?random=7",
    aiPrompts: "Generate a unique image based on the provided description and parameters. Ensure high quality and relevance to the description.",
    slug: SlugEnum.ImageGenerator,
    form: [
      {
        label: "Enter image description",
        field: "textarea",
        name: "description",
        required: true,
      },
      {
        label: "Enter image parameters",
        field: "textarea",
        name: "parameters",
      },
    ],
  },
  {
    name: "AI Code Reviewer",
    desc: "Review and provide feedback on code snippets to improve quality and adherence to best practices.",
    category: "Programming",
    icon: "/template-icons/code-reviewer.svg",
    bgImage: "https://picsum.photos/300/200?random=8",
    aiPrompts: "Review the provided code snippet and provide feedback on its quality, efficiency, and adherence to best practices.",
    slug: SlugEnum.CodeReviewer,
    form: [
      {
        label: "Enter code snippet",
        field: "textarea",
        name: "code",
        required: true,
      },
      {
        label: "Enter specific review requirements",
        field: "textarea",
        name: "requirements",
      },
    ],
  },
];

export default templates;
