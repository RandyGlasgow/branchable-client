import { NavigationBar } from "../shared/NavigationBar/NavigationBar";

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <NavigationBar />
      {children}
    </div>
  );
};
