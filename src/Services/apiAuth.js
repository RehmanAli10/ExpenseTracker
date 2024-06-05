// import AsyncStorage from '@react-native-async-storage/async-storage';
// import supabase from './Supabase';

// export async function signupUser({email, password}) {
//   let {data, error} = await supabase.auth.signUp({
//     email,
//     password,
//   });

//   if (error) {
//     throw new error(error.message);
//   }

//   return data;
// }

// export async function signinUser({email, password}) {
//   let {data, error} = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (error) {
//     throw new error(error.message);
//   }

//   return data;
// }

// export async function signOut() {
//   await AsyncStorage.removeItem('session');
//   const {error} = await supabase.auth.signOut();

//   if (error) throw new Error(error.message);
// }

// export async function getCurrentUser() {
//   const {data: session} = await supabase.auth.getSession();

//   if (!session.session) return null;

//   const {data, error} = await supabase.auth.getUser();

//   if (error) throw new Error(error.message);

//   await AsyncStorage.setItem(
//     'session',
//     data?.user.role === 'authenticated' ? 'true' : 'false',
//   );

//   return data?.user;
// }

// export async function googleLogin() {
//   const redirectUrl = 'myapp://auth-callback';
//   const {data, error} = await supabase.auth.signInWithOAuth({
//     provider: 'google',
//     options: {
//       redirectTo: redirectUrl,
//     },
//   });

//   if (error) {
//     throw new Error(error.message);
//   }
//   console.log(data);
// }

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
  await AsyncStorage.removeItem('session');
  const {error} = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const {data: session} = await supabase.auth.getSession();

  if (!session.session) return null;

  const {data, error} = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  const isAuthenticated = data?.user.role === 'authenticated';
  await AsyncStorage.setItem('session', isAuthenticated ? 'true' : 'false');

  return data?.user;
}

export async function googleLogin() {
  const redirectUrl = 'myapp://auth-callback';
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
}
