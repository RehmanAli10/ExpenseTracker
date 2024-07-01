import {useMutation, useQueryClient} from '@tanstack/react-query';
import {useToast} from 'react-native-toast-notifications';
import {updateSettingsUseridColumn} from '../Services/apiSetting';

export function useUpdateSettingsUserid() {
  const queryClient = useQueryClient();

  const toast = useToast();

  const {mutate: updateSettingsUserid} = useMutation({
    mutationFn: updateSettingsUseridColumn,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });
    },

    onError: err => {
      toast.show(err.message, {
        type: 'danger',
        placement: 'top',
        duration: 3000,
      });
    },
  });

  return {
    updateSettingsUserid,
  };
}
