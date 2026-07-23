export default {
  name: 'about',
  title: 'About Me',
  type: 'document',
  fields: [
    {
      name: 'bioText',
      title: 'Bio Text',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return { title: 'About Me' };
    },
  },
};
