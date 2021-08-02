export const safe = (fn: any) => (r: any) => {
  try {
    if (fn) {
      return fn(r);
    }

    return r;
  } catch {
     return r;
   }
}