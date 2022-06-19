export const encodeBase64NextCursor = (
  order: Array<[string, unknown]>,
  lastObject: any
) => {
  const cursor = order
    .map(([key]) => {
      return `${key}:${
        lastObject[key] instanceof Date
          ? lastObject[key].toISOString()
          : lastObject[key]
      }`;
    }, [])
    .join(",");

  const buff = Buffer.from(cursor);
  const base64data = buff.toString("base64");

  return base64data;
};

export const decodeBase64NextCursor = (base64: string) => {
  const buff = Buffer.from(base64, "base64");
  const string = buff.toString();

  return string ? string.split(",").map((order) => {
    const [first, ...rest] = order.split(":");

    return [first, rest.join(":")];
  }) : [];
};
