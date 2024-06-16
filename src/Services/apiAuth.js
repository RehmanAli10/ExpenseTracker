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
  try {
    const {data: session} = await supabase.auth.getSession();

    if (!session?.session) return null;

    const {data, error} = await supabase.auth.getUser();
    if (error) throw new Error(error.message);

    console.log('Supabase getUser data:', data);

    if (!data?.user || typeof data.user.role !== 'string') {
      throw new Error('User data or role is undefined or not a string');
    }

    const sessionValue = data?.user.role === 'authenticated' ? 'true' : 'false';
    await AsyncStorage.setItem('session', sessionValue);

    // Log the value being stored
    console.log('Stored session value:', sessionValue);

    // Retrieve and log the stored value to confirm
    const storedSession = await AsyncStorage.getItem('session');
    console.log('Retrieved session value:', storedSession);

    return data?.user;
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

export async function googleLogin() {
  const redirectUrl = 'myapp://auth-callback';
  try {
    const {data, error} = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUrl,
      },
    });

    if (error) {
      throw new Error(error.message);
    }
    console.log(data);
  } catch (error) {
    console.error('Error with Google login:', error);
  }
}
