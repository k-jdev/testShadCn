import { UserInfoForm } from "@/components/UserInfoForm";
import { ThemeToggle } from "@/components/ThemeToggle";

function App() {
  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="flex items-center justify-end p-4">
        <ThemeToggle />
      </header>
      <main className="flex flex-1 items-center justify-center p-4">
        <UserInfoForm />
      </main>
    </div>
  );
}

export default App;
