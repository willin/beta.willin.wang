import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { markdownSchema } from 'sanity-plugin-markdown';

export default createConfig({
  name: 'default',
  title: 'willin.wang',

  projectId: 'crrougir',
  dataset: 'production',

  plugins: [deskTool(), markdownSchema()],

  schema: {
    types: [
      {
        title: 'Post',
        name: 'post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string'
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            }
          },
          {
            name: 'content',
            title: 'Content',
            type: 'markdown'
          },
          {
            name: 'excerpt',
            title: 'Excerpt',
            type: 'string'
          },
          {
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'tag' }]
              }
            ]
          },
          {
            name: 'lang',
            title: 'Language',
            type: 'string',
            initialValue: 'zhCN'
          }
        ]
      },
      {
        name: 'tag',
        title: 'Tag',
        type: 'document',
        fields: [
          {
            name: 'name',
            title: 'Name',
            type: 'object',
            fields: [
              {
                name: 'zhCN',
                title: '简体中文',
                type: 'string'
              },
              {
                name: 'enUS',
                title: 'English',
                type: 'string'
              }
            ]
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title'
            }
          }
        ]
      }
    ]
  }
});
