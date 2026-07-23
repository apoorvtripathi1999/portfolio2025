export default {
  name: 'musicPlaylist',
  title: 'Music Playlist',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Playlist Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      description: 'e.g. YouTube Music, Spotify',
    },
    {
      name: 'mood',
      title: 'Mood / Genre Tag',
      type: 'string',
      description: 'e.g. Adventure Vibes, High Energy',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'url',
      title: 'Playlist URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'platform' },
  },
};
