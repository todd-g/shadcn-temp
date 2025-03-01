import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { HomePage } from "@/components/home-page";
import { LoginPage } from "@/components/login-page";
import { RegisterPage } from "@/components/register-page";
import { DashboardPage } from "@/components/dashboard-page";
import { DocumentationPage } from "@/components/documentation-page";
import { SettingsPage } from "@/components/settings-page";

// Protected route wrapper component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  // For demo purposes, we'll assume the user is always logged in
  // This would normally check an auth context or similar
  const isAuthenticated = true;
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login if not logged in, but save the location they were trying to access
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

// Main app router
function AppRoutes() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    console.log("Login attempt:", { email, password });
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const handleRegister = (email: string, password: string, name: string) => {
    console.log("Register attempt:", { email, password, name });
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            onGetStarted={() => navigate("/login")}
            onLearnMore={() => navigate("/documentation")}
          />
        }
      />
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <LoginPage
              onLogin={handleLogin}
              onRegister={() => navigate("/register")}
              onForgotPassword={() =>
                alert("Forgot password functionality would go here")
              }
              onSocialLogin={(provider) => {
                console.log(`Social login with ${provider}`);
                setIsLoggedIn(true);
                navigate("/dashboard");
              }}
              onTermsClick={() => alert("Terms of Service")}
              onPrivacyClick={() => alert("Privacy Policy")}
            />
          )
        }
      />
      <Route
        path="/register"
        element={
          isLoggedIn ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <RegisterPage
              onRegister={handleRegister}
              onLogin={() => navigate("/login")}
              onSocialLogin={(provider) => {
                console.log(`Social register with ${provider}`);
                setIsLoggedIn(true);
                navigate("/dashboard");
              }}
              onTermsClick={() => alert("Terms of Service")}
              onPrivacyClick={() => alert("Privacy Policy")}
            />
          )
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage title="Dashboard" parentPath="/" parentLabel="Home">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
                <div className="col-span-2 grid gap-4 lg:col-span-3">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Dashboard
                  </h2>
                  <p className="text-muted-foreground">
                    Welcome to your dashboard. This is where you can manage your
                    account and view your data.
                  </p>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h3 className="text-lg font-semibold">Quick Actions</h3>
                  <div className="mt-4 grid gap-2">
                    <button
                      className="text-left hover:underline"
                      onClick={() => navigate("/settings")}
                    >
                      Update Profile
                    </button>
                    <button
                      className="text-left hover:underline"
                      onClick={() => navigate("/documentation")}
                    >
                      View Documentation
                    </button>
                    <button
                      className="text-left hover:underline"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h3 className="text-lg font-semibold">Recent Activity</h3>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      No recent activity
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                  <h3 className="text-lg font-semibold">Stats</h3>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      No stats available
                    </p>
                  </div>
                </div>
              </div>
            </DashboardPage>
          </ProtectedRoute>
        }
      />
      <Route
        path="/documentation"
        element={
          <DocumentationPage
            title="API Documentation"
            description="Learn how to integrate with our API"
            content="This is a sample documentation page. In a real application, this would contain detailed API documentation with code examples, endpoint descriptions, and more."
          />
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage
              onSave={(data) => {
                console.log("Settings saved:", data);
                alert("Settings saved successfully!");
              }}
            />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
