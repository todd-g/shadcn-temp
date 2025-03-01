import { RegisterForm } from "@/components/register-form";
import { useCallback } from "react";

interface RegisterPageProps {
  onRegister?: (email: string, password: string, name: string) => void;
  onLogin?: () => void;
  onSocialLogin?: (provider: "apple" | "google" | "meta") => void;
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
}

export function RegisterPage({
  onRegister,
  onLogin,
  onSocialLogin,
  onTermsClick,
  onPrivacyClick,
}: RegisterPageProps) {
  // Handle form submission with the RegisterForm's expected format
  const handleRegister = useCallback(
    (data: { name: string; email: string; password: string }) => {
      if (onRegister) {
        onRegister(data.email, data.password, data.name);
      }
    },
    [onRegister]
  );

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[800px]">
        <div className="flex flex-col space-y-2 text-center mb-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your information to create an account
          </p>
        </div>
        <RegisterForm
          className="w-full"
          onRegister={handleRegister}
          onLogin={onLogin}
          onSocialRegister={onSocialLogin}
          onTermsClick={onTermsClick}
          onPrivacyClick={onPrivacyClick}
        />
      </div>
    </div>
  );
}
