import supabase from './Supabase';

export async function getData() {
  let {data, error} = await supabase.from('data').select('*');

  if (error) {
    console.error(error);
    throw new error('Error loading data');
  }

  return data;
}
