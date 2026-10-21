import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { authService, type User } from '../../services/api/auth';

interface AdminRouteProps {
  children: React.ReactNode;
}

export default function AdminRoute({ children }: AdminRouteProps) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    let isMounted = true;
    authService.me()
      .then((res) => {
        if (isMounted) {
          setUser(res.user);
          setLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setUser(null);
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
          <span className="text-xs font-semibold text-gray-500">Verifying administrator access...</span>
        </div>
      </div>
    );
  }

  // Not logged in -> redirect to login/auth
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  // Logged in with non-ADMIN role -> redirect to dashboard
  if (user.role !== 'ADMIN') {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}
