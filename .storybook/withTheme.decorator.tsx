import { DecoratorHelpers } from '@storybook/addon-themes';
import React from 'react';
import type { Decorator } from '@storybook/react';

const { initializeThemeState, pluckThemeFromContext } = DecoratorHelpers;

export const withTheme = ({ 
  themes, 
  defaultTheme 
}: { 
  themes: Record<string, unknown>; 
  defaultTheme: string 
}): Decorator => {
  initializeThemeState(Object.keys(themes), defaultTheme);

  return (Story, context) => {
    const selectedTheme = pluckThemeFromContext(context);
    const { themeOverride } = context.parameters.themes ?? {};
    const selected = themeOverride || selectedTheme || defaultTheme;

    React.useEffect(() => {
      // Set the data-theme attribute on the html element
      document.documentElement.setAttribute('data-theme', selected);
    }, [selected]);

    return <Story />;
  };
}; 