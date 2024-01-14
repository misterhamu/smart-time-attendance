import {
  fromAddress,
  fromLatLng,
  setKey,
  setLanguage,
  setRegion,
} from "react-geocode";

import Resizer from "react-image-file-resizer";

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
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Distance in kilometers

  return distance;
}

export function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

export const getTime24Format = (date: Date) => {
  const formattedDate = date.toLocaleString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  return formattedDate;
};

export const getDateFormat = (date: Date) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("th-Th", {
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

export const getThaiDateTimeFormat = (date: Date) => {
  const newDate = new Date(date);
  const formattedDate = newDate.toLocaleDateString("th-Th", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    weekday: "short",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
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

export const getLatLongByLocation = async (location: string) => {
  setKey(process.env.NEXT_PUBLIC_GOOGLEMAP_KEY!);
  setLanguage("th");
  setRegion("th");
  const result = await fromAddress(location)
    .then(({ results }) => {
      const { lat, lng } = results[0].geometry.location;
      return { lat, lng };
    })
    .catch(console.error);
  return result;
};

export const getAddressFromLatLong = async (location: {
  lat: number;
  lng: number;
}) => {
  setKey(String(process.env.NEXT_PUBLIC_GOOGLEMAP_KEY));
  setLanguage("th");
  setRegion("th");
  const result = await fromLatLng(location.lat, location.lng)
    .then(({ results }) => {
      const { lat, lng } = results[0].geometry.location;
      return results[0].formatted_address;
    })
    .catch(console.error);
  return result;
};

export const resizeFile = async (file: File) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      650,
      500,
      "JPEG",
      70,
      0,
      (uri) => {
        resolve(uri);
      },
      "file"
    );
  });


  