import { UserInfoForm } from "@/components/UserInfoForm";
import { FieldsSection } from "@/components/FieldsSection";
import { ThemeToggle } from "@/components/ThemeToggle";

function App() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="flex items-center justify-end p-4">
        <ThemeToggle />
      </header>
      <main className="flex flex-1 flex-wrap items-start justify-center gap-6 p-4">
        <UserInfoForm />
        <FieldsSection />
      </main>
    </div>
  );
}

export default App;
