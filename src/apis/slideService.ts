const url = '/slideShow';

const SlideServiceConfig = {
  get: () => ({
    url,
    method: 'GET'
  }),
  create: (picture: string) => ({
    url,
    method: 'POST',
    data: { picture }
  }),
  delete: (id: number) => ({
    url: `${url}/${id}`,
    method: 'DELETE'
  })
};

export default SlideServiceConfig;
