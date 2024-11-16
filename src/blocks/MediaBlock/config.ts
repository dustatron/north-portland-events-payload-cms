import type { Block } from 'payload'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'position',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Fullscreen',
          value: 'fullscreen',
        },
      ],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'iframeLink',
      type: 'text',
      required: false,
      defaultValue: '',
    },
    {
      name: 'iframeLinkHeight',
      type: 'text',
      required: false,
      defaultValue: '500',
    },
    {
      name: 'iframeLinkWidth',
      type: 'text',
      required: false,
      defaultValue: '100%',
    },
  ],
}
