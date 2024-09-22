import { useState, useEffect } from 'react';
import { useSupabase } from '../services/SupabaseProvider';
import { User } from '@supabase/supabase-js'; // Import the correct User type

export const useUser = () => {
  const [user, setUser] = useState<User | null>(null); // Set the type to match Supabase's User type
  const [loading, setLoading] = useState(true);
  const supabase = useSupabase();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error.message);
      } else {
        setUser(data.user ?? null); // Ensure data.user is assigned correctly
      }
      setLoading(false);
    };

    fetchUser();
  }, [supabase]);

  return { user, loading };
};
