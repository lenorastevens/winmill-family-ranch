export type FAQType = {
    question: string;
    answer: string;
};

export type Pricing = {
  price_level: string;
  price_amount: number;
  price_description: string;
  price_perks: string[];
}

export type Projects = {
  project_name: string;
  project_description: string,
};
