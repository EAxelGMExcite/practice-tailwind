export const getFullDateFromString = ({ string_date = "" }) => {
  if (string_date.length === 8) {
    const fecha = `${string_date.slice(0, 4)}-${string_date.slice(4, 6)}-${string_date.slice(6, 8)}`;
    return fecha;
  }

  return null;
};
