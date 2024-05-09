import supabase from './Supabase';

export async function getTransactions() {
  let {data, error} = await supabase.from('data').select('*');

  if (error) {
    console.error(error);
    throw new error('Error loading Transactions');
  }

  return data;
}

export async function addTransaction(formData) {
  const {error} = await supabase.from('data').insert(formData).select();

  if (error) {
    console.error(error);
    throw new error('Error adding Income');
  }
}
