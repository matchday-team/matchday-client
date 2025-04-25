import { HttpResponse, http } from 'msw';

export const exampleApiMock = [
  http.get('http://175.106.99.16:8080/api/v1/teams/9999/users', () => {
    return HttpResponse.json({
      status: 200,
      data: {
        teamMemberResponses: [
          {
            id: 1,
            name: '김성빈',
            number: 10,
            defaultPosition: 'FW',
            isActive: true,
          },
        ],
      },
      message: 'OK',
    });
  }),
];
