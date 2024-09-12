import { defineCollection, z } from "astro:content";

// Blog collection schema
const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    date: z.date().optional(),
    image: z.string().optional(),
    author: z.string().default("Admin"),
    categories: z.array(z.string()).default(["others"]),
    featured: z.boolean().default(false),
    draft: z.boolean().optional(),
  }),
});

// Author collection schema
const authorsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    email: z.string().optional(),
    image: z.string().optional(),
    description: z.string().optional(),
    social: z
      .array(
        z
          .object({
            name: z.string().optional(),
            icon: z.string().optional(),
            link: z.string().optional(),
          })
          .optional(),
      )
      .optional(),
    draft: z.boolean().optional(),
  }),
});

// Pages collection schema
const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const FieldSchema = z.object({
  label: z.string(),
  type: z.unknown(),
  id: z.string(),
  placeholder: z.string()
});

const ContactDetailSchema = z.object({
  icon: z.string(),
  title: z.string(),
  value: z.string(),
  link: z.string(),
});

const ContactInfoSchema = z.object({
  title: z.string(),
  description: z.string(),
  contact_details: z.array(ContactDetailSchema),
});

// Contact collection schema
const contactCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    meta_title: z.string().optional(),
    description: z.string(),
    image: z.string().optional(),
    support_options: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        icon: z.string()
      }),
    ),
    contact_section: z.object({
      form: z.object({
        fields: z.array(FieldSchema),
        submit_button: z.object({
          text: z.string(),
        }),
      }),
      contact_info: ContactInfoSchema,
    })
  }),
});

const CounterSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const FeaturesSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const ImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
});

// About collection schema
const aboutCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    meta_title: z.string().optional(),
    description: z.string().optional(),
    mission_vision_section: z.object({
      mission: z.object({
        heading: z.string(),
        subheading: z.string(),
        description: z.string(),
        counter: z.array(CounterSchema),
        image: z.string(),
      }),
      vision: z.object({
        heading: z.string(),
        subheading: z.string(),
        description: z.string(),
        features: z.array(FeaturesSchema),
        image: z.string(),
      }),
    }),
    journey_story: z.object({
      title: z.string(),
      description: z.string(),
      images: z.array(ImageSchema),
    }),
    image: z.string(),
    logo: z.object({
      enable: z.boolean(),
      images: z.array(z.string()),
    }),
    draft: z.boolean().optional(),
  }),
});

// Banner schema
const bannerSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string(),
  button: z.object({
    enable: z.boolean(),
    label: z.string(),
    link: z.string(),
  }),
});

// Features schema
const featureSchema = z.object({
  title: z.string(),
  image: z.string(),
  content: z.string(),
  bulletpoints: z.array(z.string()),
  button: z.object({
    enable: z.boolean(),
    label: z.string().optional(),
    link: z.string().optional(),
  }),
});

// Content schema (for the main content structure with banner and features)
const contentSchema = z.object({
  banner: bannerSchema,
  features: z.array(featureSchema),
});

// Content collection schema
const contentCollection = defineCollection({
  schema: contentSchema,
});

// Testimonial schema
const testimonialSchema = z.object({
  name: z.string(),
  designation: z.string(),
  avatar: z.string(),
  content: z.string(),
});

// Testimonials schema
const testimonialsSchema = z.array(testimonialSchema);

// Call to Action schema
const callToActionSchema = z.object({
  enable: z.boolean(),
  title: z.string(),
  image: z.string(),
  description: z.string(),
  button: z.object({
    enable: z.boolean(),
    label: z.string(),
    link: z.string().url(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
  pages: pagesCollection,
  contact: contactCollection,
  about: aboutCollection,
  content: contentCollection,
  testimonials: testimonialsSchema,
  callToAction: callToActionSchema,
};
