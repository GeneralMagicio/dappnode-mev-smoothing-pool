import type { Preview } from '@storybook/react'
import 'tailwindcss/tailwind.css'
import '@rainbow-me/rainbowkit/styles.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
}

export default preview