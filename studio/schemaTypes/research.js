export default {
  name: 'research',
  title: 'Research',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Research Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publicationUrl',
      title: 'Publication URL',
      type: 'url',
      description: 'Link to the published paper (leave blank if not published)',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Progress', value: 'in-progress' },
          { title: 'Published', value: 'published' },
          { title: 'Completed', value: 'completed' },
        ],
      },
      initialValue: 'in-progress',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'status' },
  },
};
