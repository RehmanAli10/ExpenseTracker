import {useQuery} from '@tanstack/react-query';
import {getSettings} from '../Services/apiSetting';
import {useUser} from '../Authentication/useUser';

export function useSettings() {
  const {user} = useUser();

  const {
    data: settings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['settings'],
    queryFn: getSettings,
  });

  const userSettings = settings?.filter(
    currUser => currUser.userId === user?.id,
  );

  return {
    settings: userSettings,
    isLoading,
    error,
  };
}
