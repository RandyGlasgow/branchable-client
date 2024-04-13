"use client";
import { NavigationBar } from '../shared/NavigationBar/NavigationBar';

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-2 px-2 py-2 lg:px-0">
      {children}
    </div>
  );
};
