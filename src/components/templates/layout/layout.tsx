import { ReactNode } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';

interface LayoutPropsInterface {
  children: ReactNode;
  font: NextFontWithVariable;
}

export const Layout = ({ children, font }: LayoutPropsInterface) => {
  return (
    <>
      <Header font={font} />
      {children}
      <Footer />
    </>
  );
};
