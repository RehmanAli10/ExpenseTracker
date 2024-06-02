import supabase from './Supabase';

export async function signupUser({userName, email, password}) {
  let {data, error} = await supabase.auth.signUp({
    email: email || userName,
    password,
  });

  if (error) {
    throw new error(error.message);
  }

  return data;
}

export async function signinUser({userName, email, password}) {
  let {data, error} = await supabase.auth.signInWithPassword({
    email: email || userName,
    password: password,
  });

  if (error) {
    throw new error(error.message);
  }

  return data;
}
