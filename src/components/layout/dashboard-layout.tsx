import React from 'react';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem
} from '@/components/ui/menubar';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-dvh flex-col bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between bg-white px-6 py-4 shadow-sm">
        <h1 className="text-xl font-semibold">Dashboard</h1>

        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="flex items-center space-x-2 focus:outline-none">
              <span className="text-sm font-medium">社員氏名</span>
            </MenubarTrigger>
            <MenubarContent align="end">
              <MenubarItem>Logout</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col p-6">{children}</main>
    </div>
  );
};

export default Layout;
