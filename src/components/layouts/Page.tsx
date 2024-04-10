"use client";
import { NavigationBar } from "../shared/NavigationBar/NavigationBar";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-2 px-1 md:px-0 ">
      <NavigationBar />
      {children}
    </div>
  );
};
