type Category = {
  slug: {
    current: string;
  };
  title: string;
};

type Project = {
  name: string;
  description: string;
  category: Category[];
  githubUrl: string;
  url: string;
  image: {
    asset: {
      url: string;
      metadata: {
        lquip: string;
      };
    };
  };
};
