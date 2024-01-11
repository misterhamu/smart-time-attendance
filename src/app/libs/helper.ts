export const clockRealTime = () => {
  var today = new Date();
  var h = String(today.getHours());
  var m = String(today.getMinutes());
  var s = String(today.getSeconds());
  m = checkTime(String(m));
  s = checkTime(String(s));
  return h + ":" + m + ":" + s;
};

const checkTime = (i: string) => {
  if (Number(i) < 10) {
    i = "0" + i;
  }
  return i;
};


export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth radius in kilometers

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers

  return distance;
}

export function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export const getDateFormat = (date: Date) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    weekday: "short",
  });
  return formattedDate;
};

export const getThaiDateFormat = (date: Date) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("th-Th", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    weekday: "long",
  });
  return formattedDate;
};

export const getShortThaiDateFormat = (date: Date) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("th-Th", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    weekday: "short",
  });
  return formattedDate;
};