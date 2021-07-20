import { useEffect, useReducer } from 'react';
import useRetry from './useRetry';

export default function useQuery(promiseFn, deps = []) {
  const [state, setState] = useReducer(
    (state, updater) => ({
      ...state,
      ...updater,
    }),
    {
      loading: true,
      data: null,
      error: null,
    },
  );
  const [retry, doRetry] = useRetry();

  useEffect(() => {
    if (!state.loading) setState({ loading: true });
    promiseFn()
      .then((data) => setState({ loading: false, error: null, data }))
      .catch((error) => setState({ loading: false, error }));
  }, [...deps, retry]);

  return { ...state, refetch: doRetry };
}
