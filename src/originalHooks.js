const React = require("react");


export function parseQueryParams(queryString = window.location.search || "") {
  const query = {};
  if (!queryString?.trim()?.length) return query;

  const pairs = (queryString[0] === "?" ? queryString.substr(1) : queryString).split("&");
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
  }
  return query;
}

export function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function objectToQueryParams(obj) {
  return (
    "?" +
    Object.keys(obj)
      .filter(function (key) {
        return obj[key] !== undefined;
      })
      .map(function (key) {
        return "".concat(key, "=").concat(obj[key]);
      })
      .join("&")
  );
}

function setQueryStringWithoutPageReload(qsValue) {
  const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + qsValue;
  window.history.pushState({ path: newurl }, "", newurl);
}

function setQueryStringValue(key, value, queryString = window.location.search) {
  const values = parseQueryParams(queryString);
  const newQsValue = objectToQueryParams({
    ...values,
    [key]: value,
  });
  setQueryStringWithoutPageReload(`${newQsValue}`);
}

function getQueryStringValue(key, queryString = window.location.search) {
  const values = parseQueryParams(queryString);
  return values[key];
}

export function useQueryString({
  setOnMount = true,
  key = "",
  initialValue = "",
  fallbackToQueryAsInitValue = true,
  initialValueAsFallback = false,
}) {
  const initVal = initialValueAsFallback ? initialValue : getQueryStringValue(key);

  const [value, setValue] = React.useState(
    isNullOrUndefined(initVal) && fallbackToQueryAsInitValue ? getQueryStringValue(key) : initVal
  );

  React.useEffect(() => {
    if (!setOnMount) return;
    setQueryStringValue(key, initialValue);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSetValue = React.useCallback(
    (newValue) => {
      setValue(newValue);
      setQueryStringValue(key, newValue);
    },
    [key]
  );

  const removeQuery = React.useCallback(() => {
    const filteredLocationSearch = window.location.search
      .replace("?", "")
      .split("&")
      .filter((qs) => !qs.includes(key));

    setQueryStringWithoutPageReload("?" + filteredLocationSearch);
  }, [key]);

  return [value, onSetValue, removeQuery];
}

export function useCustomHistory() {
  const history = useHistory();

  const push = React.useCallback(
    ({ path = "", query = "", queryObj = {}, reset = false }, ...args) => {
      let queryPrams = "";
      const splitPath = path.split("?");

      if (!reset) {
        const firstQueryParams = parseQueryParams(splitPath[1]);
        const oldQueryParams = parseQueryParams(window.location.search);
        const newQueryParams = parseQueryParams(query);

        queryPrams = objectToQueryParams({
          ...oldQueryParams,
          ...firstQueryParams,
          ...newQueryParams,
          ...queryObj,
        });
      }

      history.push(splitPath[0] + queryPrams, ...args);
    },
    [history]
  );

  return React.useMemo(() => ({ ...history, push: push }), [history, push]);
}

export function useSessionStorage() {
  const removeItems = React.useCallback(function (keys = [""]) {
    keys.forEach((key) => {
      sessionStorage.removeItem(key);
    });
  }, []);

  return React.useMemo(() => ({ ...sessionStorage, removeItems: removeItems }), [removeItems]);
}



//
// const getQueryParamsAsObject = function (search) {
//   var params = {};
//   new URLSearchParams(search).forEach(function (_, key) {
//     var keyValues = new URLSearchParams(search).getAll(key);
//     // default array key
//     if (key.endsWith("[]")) {
//       var keyName = key.slice(0, -2);
//       params[keyName] = keyValues;
//       // empty array key
//     } else if (key.endsWith("[-]")) {
//       var keyName = key.slice(0, -3);
//       params[keyName] = [];
//       // string key
//     } else {
//       params[key] = keyValues[0];
//     }
//   });
//   return params;
// };
//

//
// export function useQueryAsState (key, initialValue){
//   const { pathname, search } = useLocation();
//   const history = useHistory();
//
//   // helper method to create an object from URLSearchParams
//   const params = getQueryParamsAsObject(search);
//
//   console.log("params", params);
//   console.log("search", search);
//   function updateQuery (updatedParams){
//     Object.assign(params, updatedParams);
//     // helper method to convert {key1:value,k:v} to '?key1=value&k=v'
//     history.replace(pathname + objectToQueryParams(params));
//   };
//
//   useEffect(() => {
//     // updateQuery("")
//   }, []);
//
//   return [params, updateQuery];
// };
//
// export function useParamsAsState (){
//   const { path, params } = useRouteMatch();
//   const history = useHistory();
//
//   function updateParams (updatedParams){
//     Object.assign(params, updatedParams);
//     history.push(generatePath(path, params));
//   };
//   return [params, updateParams];
// };
