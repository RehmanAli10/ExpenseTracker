import supabase from './Supabase';

export async function signupUser({email, password}) {
  let {data, error} = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new error(error.message);
  }

  return data;
}

export async function signinUser({email, password}) {
  let {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new error(error.message);
  }

  return data;
}

export async function signOut() {
  const {error} = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const {data: session} = await supabase.auth.getSession();

  if (!session.session) return null;

  const {data, error} = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function googleLogin() {
  let {data, error} = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  if (error) {
    throw new Error(error.message);
  }

  console.log(data);
}
