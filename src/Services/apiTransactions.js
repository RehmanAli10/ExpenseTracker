import supabase from './Supabase';

export async function getTransactions() {
  let {data, error} = await supabase.from('data').select('*');

  if (error) {
    throw new Error('Error loading Transactions');
  }

  return data;
}

export async function addTransaction(formData) {
  const {error} = await supabase.from('data').insert(formData).select();

  if (error) {
    throw new Error('Error adding Transaction');
  }
}

export async function editTransaction(editedData) {
  const {data, error} = await supabase
    .from('data')
    .update(editedData)
    .eq('id', editedData.id)
    .select();

  if (error) {
    throw new Error('Error adding Transaction');
  }

  return data;
}

export async function deleteTransaction(id) {
  const {error} = await supabase.from('data').delete().eq('id', id);

  if (error) {
    throw new Error('Error deleting transaction');
  }
}

export async function clearAllTransaction(userId) {
  const {data, error} = await supabase
    .from('data')
    .delete()
    .eq('UserUID', userId);

  if (error) {
    throw new Error(error.message);
  }
}

export async function updateCurrency({currency, id}) {
  const {data, error} = await supabase
    .from('data')
    .update({currency: currency})
    .eq('UserUID', id)
    .select();

  if (error) {
    throw new Error(err);
  }

  return data;
}
