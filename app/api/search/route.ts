import { createTokenizer } from '@orama/tokenizers/mandarin';
import { createFromSource } from 'fumadocs-core/search/server';

import { source } from '@/lib/source';

export const { GET } = createFromSource(source, undefined, {
  localeMap: {
    'zh-cn': {
      tokenizer: createTokenizer(),
      search: {
        threshold: 500,
        tolerance: 0,
      },
    },
    // use the English tokenizer
    en: 'english',
  },
});