const getExample = async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { message: '데이터를 성공적으로 가져왔습니다!' };
};

export const exampleQuery = {
  queryKey: ['example'],
  queryFn: getExample,
};
