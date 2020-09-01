type KeywordsMeta = {
  name: string
  content: string
}

type KeywordsGenerator = (keywords: string[]) => KeywordsMeta | [];

export const getKeywords: KeywordsGenerator = (keywords) =>
  keywords.length > 0
    ? {
        content: keywords.join(`, `),
        name: `keywords`,
      }
    : [];