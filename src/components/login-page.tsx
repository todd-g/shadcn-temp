import { LoginForm } from "@/components/login-form";
import { useCallback } from "react";

interface LoginPageProps {
  onLogin?: (email: string, password: string) => void;
  onRegister?: () => void;
  onForgotPassword?: () => void;
  onSocialLogin?: (provider: "apple" | "google" | "meta") => void;
  onTermsClick?: () => void;
  onPrivacyClick?: () => void;
}

export function LoginPage({
  onLogin,
  onRegister,
  onForgotPassword,
  onSocialLogin,
  onTermsClick,
  onPrivacyClick,
}: LoginPageProps) {
  // Handle form submission
  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      if (onLogin) {
        onLogin(email, password);
      }
    },
    [onLogin]
  );

  // Handle social login button clicks
  const handleAppleLogin = useCallback(() => {
    if (onSocialLogin) {
      onSocialLogin("apple");
    }
  }, [onSocialLogin]);

  const handleGoogleLogin = useCallback(() => {
    if (onSocialLogin) {
      onSocialLogin("google");
    }
  }, [onSocialLogin]);

  const handleMetaLogin = useCallback(() => {
    if (onSocialLogin) {
      onSocialLogin("meta");
    }
  }, [onSocialLogin]);

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[800px]">
        <div className="flex flex-col space-y-2 text-center mb-4">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your credentials to sign in to your account
          </p>
        </div>
        <LoginForm
          className="w-full"
          onSubmit={handleSubmit}
          onForgotPasswordClick={(e) => {
            e.preventDefault();
            if (onForgotPassword) onForgotPassword();
          }}
          onRegisterClick={(e) => {
            e.preventDefault();
            if (onRegister) onRegister();
          }}
          onAppleLogin={handleAppleLogin}
          onGoogleLogin={handleGoogleLogin}
          onMetaLogin={handleMetaLogin}
          onTermsClick={(e) => {
            e.preventDefault();
            if (onTermsClick) onTermsClick();
          }}
          onPrivacyClick={(e) => {
            e.preventDefault();
            if (onPrivacyClick) onPrivacyClick();
          }}
        />
      </div>
    </div>
  );
}
