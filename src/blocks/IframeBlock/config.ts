import type { Block } from 'payload'

export const IframeBlock: Block = {
  slug: 'iframe',
  interfaceName: 'IframeBlock',
  fields: [
    {
      name: 'iframeLink',
      type: 'text',
      defaultValue:
        'https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;mode=AGENDA&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showNav=0&amp;src=MDg4ZjQ2ZDk2YTk5YjUzZmIzYWJlZGVjNGJiZmE4ZjY0YTlkYmM5MGQ2ZjI0NTNiMWE2MWZlOTU5ZjZkNGY2ZEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%238E24AA',
    },
    {
      name: 'blockName',
      type: 'text',
      defaultValue: 'iframe',
    },
  ],
}
