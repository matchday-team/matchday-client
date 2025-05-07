import { http } from '@/apis/http';
import { ApiResponse } from '@/apis/models';

export const postTemporaryUser = async (name: string) => {
  const response = await http.post('v1/users', {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  });

  return response.json() as Promise<ApiResponse<number>>;
};
