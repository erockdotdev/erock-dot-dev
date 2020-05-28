/* eslint-disable react/no-danger */
import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Image from '@components/ImageComponent';

export default function FormatRichTextField(field) {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
      [BLOCKS.EMBEDDED_ASSET]: node => {
        // const {
        //   node: {
        //     data: {
        //       target: {
        //         fields: { file: url }
        //       }
        //     }
        //   }
        // } = node;
        const { fields } = node.data.target;
        // const {
        //   description,
        //   file: { url }
        // } = fields;
        console.log('node', node);
        // return `<img src=${url} alt=${description} />`;
        return <Image imageData={fields} />;
      }
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
