export interface Article {
  title: string;
  url: string;
}

export interface Section {
  title: string;
  articles: Article[];
}

export interface Course {
  title: string;
  sections: Section[];
}

export interface Curriculum {
  title: string;
  courses: Course[];
}

export const data: Curriculum = {
  title: "Example Curriculum",
  courses: [
    {
      title: "Course 1",
      sections: [
        {
          title: "Section 1",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
        {
          title: "Section 2",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
        {
          title: "Section 3",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
      ],
    },
    {
      title: "Course 2",
      sections: [
        {
          title: "Section 1",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
        {
          title: "Section 2",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
        {
          title: "Section 3",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
      ],
    },
    {
      title: "Course 3",
      sections: [
        {
          title: "Section 1",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
        {
          title: "Section 2",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
        {
          title: "Section 3",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
      ],
    },
    {
      title: "Course 4",
      sections: [
        {
          title: "Section 1",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
        {
          title: "Section 2",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
        {
          title: "Section 3",
          articles: [
            {
              title: "Article 1",
              url: "article_url",
            },
            {
              title: "Article 2",
              url: "article_url",
            },
          ],
        },
      ],
    },
  ],
};
