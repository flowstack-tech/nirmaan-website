import React from "react";

import { CssBaseline, ThemeProvider } from "@material-ui/core";

import { inject } from "@common/store/inject";
import { Home } from "@features/landing";
import useGlobalTheme from "@hooks/global-theme";

const ThemedApp = inject((root) => ({
  theme: root.preferencesStore.theme,
}))(({ theme }) => {
  const globalTheme = useGlobalTheme(theme);

  return (
    <ThemeProvider theme={globalTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
});

export default ThemedApp;
