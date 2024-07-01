import {useQueryClient, useMutation} from '@tanstack/react-query';
import {useToast} from 'react-native-toast-notifications';

import {updateSettings as updateSettingsApi} from '../Services/apiSetting';

export function useSettingsUpdate() {
  const queryClient = useQueryClient();

  const toast = useToast();

  const {isLoading: isUpdating, mutate: updateSettings} = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });
    },

    onError: err => {
      toast.show(err.message, {
        type: 'danger',
        placement: 'top',
        duration: 1000,
      });
    },
  });
  return {isUpdating, updateSettings};
}
