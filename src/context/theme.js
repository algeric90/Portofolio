import React from 'react';

const theme = React.createContext();

export const ThemeProvider = theme.Provider;
export const ThemeConsumer = theme.Consumer;

export default theme;
