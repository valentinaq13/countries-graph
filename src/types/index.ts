export interface Country {
    code: string;
    name: string;
    emoji: string;
    capital: string;
    languages: { name: string }[];
    continent: {
      code: string;
      name: string;
    };
  }
  