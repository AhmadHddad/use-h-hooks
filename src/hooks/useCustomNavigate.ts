// import { useCallback } from 'react';
// import { useNavigate, NavigateOptions } from 'react-router-dom';

// export function useCustomHistory() {
//   const navigate = useNavigate();

//   const push = useCallback(
//     (
//       {
//         path = '',
//         query = '',
//         queryObj = {},
//         reset = false,
//         includePathSearchParams = true,
//       },
//       navigateOptions: NavigateOptions
//     ) => {
//       let queryPrams = '';
//       const splitPath = path.split('?');

//       if (!reset) {
//         const { query: firstQueryParams } = parseUrl(splitPath[1] || '');
//         const { query: oldQueryParams } = parseUrl(
//           window.location.search || ''
//         );
//         const { query: newQueryParams } = parseUrl(query || '');

//         queryPrams = stringifyUrl({
//           url: path,
//           query: {
//             ...oldQueryParams,
//             ...firstQueryParams,
//             ...newQueryParams,
//             ...queryObj,
//           },
//         });
//       }

//       navigate(splitPath[0] + queryPrams, navigateOptions);
//     },
//     [navigate]
//   );

//   return push;
// }
