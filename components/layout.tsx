import {ThemeProvider} from './theme-provider';

const RootLayout = ({ children }:any) => {
  return (
    <>
          <ThemeProvider>
            {children}
          </ThemeProvider>
    </>
  );
};

export default RootLayout;
