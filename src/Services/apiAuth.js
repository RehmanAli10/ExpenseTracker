import AsyncStorage from '@react-native-async-storage/async-storage';
import supabase from './Supabase';

export async function signupUser({email, password}) {
  let {data, error} = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function signinUser({email, password}) {
  let {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function signOut() {
  try {
    await AsyncStorage.removeItem('session');
    const {error} = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  } catch (error) {
    console.error('Error signing out:', error);
  }
}

export async function getCurrentUser() {
  const {data: session} = await supabase.auth.getSession();

  if (!session?.session) return null;

  const {data, error} = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}
