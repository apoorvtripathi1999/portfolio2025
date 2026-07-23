export default {
  name: 'technology',
  title: 'Technology Category',
  type: 'document',
  fields: [
    {
      name: 'categoryName',
      title: 'Category Name',
      type: 'string',
      description: 'e.g. Programming Languages, Frameworks & DevOps',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'color',
      title: 'Accent Color',
      type: 'string',
      description: 'Theme color for this category (e.g. neonGreen, electricBlue, toxicPurple)',
      options: {
        list: [
          { title: 'Neon Green', value: 'neonGreen' },
          { title: 'Electric Blue', value: 'electricBlue' },
          { title: 'Toxic Purple', value: 'toxicPurple' },
          { title: 'Hot Pink', value: 'hotPink' },
          { title: 'Cyber Yellow', value: 'cyberYellow' },
          { title: 'Acid Orange', value: 'acidOrange' },
          { title: 'Laser Red', value: 'laserRed' },
        ],
      },
      initialValue: 'neonGreen',
    },
    {
      name: 'items',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    },
  ],
  preview: {
    select: { title: 'categoryName', subtitle: 'color' },
  },
};
