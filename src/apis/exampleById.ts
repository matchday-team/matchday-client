const getExampleById = async (id: number) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return { message: `데이터 ${id}를 성공적으로 가져왔습니다!` };
};

export const exampleQueryById = (id: number) => ({
  queryKey: ['example', id],
  queryFn: () => getExampleById(id),
});
