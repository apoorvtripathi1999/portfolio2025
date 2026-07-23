export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'resumeFile',
      title: 'Resume PDF',
      type: 'file',
      options: { accept: '.pdf' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Display label, e.g. "Apoorv Tripathi Resume 2025"',
      initialValue: 'Resume',
    },
    {
      name: 'updatedAt',
      title: 'Last Updated',
      type: 'datetime',
      description: 'When was this resume last updated?',
    },
  ],
  preview: {
    select: { title: 'label', subtitle: 'updatedAt' },
  },
};
