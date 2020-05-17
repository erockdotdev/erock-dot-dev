import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

export default function FormatRichTextField(field) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`
    }
  };
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: documentToHtmlString(field, options)
      }}
    />
  );
}
