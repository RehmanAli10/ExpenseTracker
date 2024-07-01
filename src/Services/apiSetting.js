import supabase from './Supabase';

export async function getSettings() {
  let {data, error} = await supabase.from('settings').select('*');

  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function updateSettings({curr, userId}) {
  const {data, error} = await supabase
    .from('settings')
    .update({settingCurrency: curr})
    .eq('userId', userId)
    .select();

  if (error) {
    throw new Error('Error updating setting');
  }
  return data;
}

export async function updateSettingsUseridColumn(userId) {
  const {error} = await supabase
    .from('settings')
    .update({userId: userId})
    .is('userId', null)
    .select();

  if (error) {
    throw new Error(error.message);
  }
}
