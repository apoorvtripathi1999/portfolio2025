export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'degree',
      title: 'Degree / Certification Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'institution',
      title: 'Institution',
      type: 'string',
    },
    {
      name: 'startYear',
      title: 'Start Year',
      type: 'string',
      description: 'e.g. 2024',
    },
    {
      name: 'endYear',
      title: 'End Year',
      type: 'string',
      description: 'e.g. 2026 (leave blank if ongoing)',
    },
    {
      name: 'gpa',
      title: 'GPA',
      type: 'string',
      description: 'e.g. 3.78/4.0',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'highlights',
      title: 'Highlights / Coursework',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'isCertification',
      title: 'Is this a Certification?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 99,
    },
  ],
  preview: {
    select: { title: 'degree', subtitle: 'institution' },
  },
};
