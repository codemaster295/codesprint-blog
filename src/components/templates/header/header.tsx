import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import Link from 'next/link';
import { useState } from 'react';

import BlogLogo from '@icons/blog-logo.svg';
import { LanguageSelector } from '@src/components/features/language-selector';
import { Container } from '@src/components/shared/container';

const navigation = [
  { name: 'About-us', href: '/about-us' },
  { name: 'Contact-us', href: '/contact-us' },
  { name: 'Privacy', href: '/privacy-policy' },
  { name: 'Disclaimer', href: '/disclaimer' },
];

export const Header = ({ font }: { font: NextFontWithVariable }) => {
  const { t } = useTranslation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray100">
      <Container className="">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" title={t('common.homepage')}>
              <BlogLogo />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-gray-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                title={item.name}
                className="text-gray-900 text-sm font-semibold leading-6"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <LanguageSelector />
          </div>
        </nav>
        <Dialog
          as="div"
          className={`lg:hidden ${font.variable} font-sans`}
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="sm:ring-gray-900/10 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray100 px-6 py-6 sm:max-w-sm sm:ring-1">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
              <button
                type="button"
                className="text-gray-700 -m-2.5 rounded-md p-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="divide-gray-500/10 -my-6 divide-y">
                <div className="space-y-2 py-6">
                  {navigation.map(item => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-900 hover:bg-gray-50 -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <LanguageSelector />
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </Container>
    </header>
  );
};
