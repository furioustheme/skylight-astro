import type { ContentEntryMap } from "astro:content";

export type MenuItem = {
  name: string;
  url: string;
  hasChildren?: boolean;
  children?: MenuItem[];
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};
