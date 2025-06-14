import { createFileRoute, redirect } from '@tanstack/react-router';

import { userQuery } from '@/apis/queries';
import { queryClient } from '@/react-query-provider';

export const Route = createFileRoute('/')({
  beforeLoad: async () => {
    await queryClient.prefetchQuery(userQuery.me);
    const user = queryClient.getQueryData(userQuery.me.queryKey);

    if (user?.teamId) {
      throw redirect({
        to: `/teams/$teamId`,
        params: {
          teamId: user.teamId.toString(),
        },
      });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>IndexPage fallback</div>;
}
