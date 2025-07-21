// components/PrivateRoute.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';

export default function PrivateRoute({ children }: { children: React.ReactNode }) {
const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  return user ? <>{children}</> : null;
}
