import { IconSvgProps } from "@/types/index";
import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      d="M9 8L5 11.6923L9 16M15 8L19 11.6923L15 16"
      stroke="#000000"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
      fill="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </svg>
);

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path
      d="M22 22L20 20"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-black dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-black dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-black"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};

export const Reset: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  const { theme } = useTheme();
  const [image, setImage] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADEklEQVR4nO2aXW9MQRjHfwm6klbTN60Lid6hCcpnELJNaS+oRj8DkX4LtlRDuMONWy/VJuUDiIgQBNslmlRJsCS4UStWJnkqm+kz+3LOnN1zpL9kkt3N2ZnnvzPPy8wsrPH/0g4MARlgFsgCX4FlaV/ksxngDDAMtBITUsAYMAf8Boo1tgJwDzgmfZXDCP8EfAQO44mNwDjwPoDxrvYBOFFGUOlYSz5EpIE3HgXY7S2wXxnXfi7ULFyqYMRjYAI4AuwWv9kANMlr89kIcBZ4WqafP8Bla3a8COkBHjkG/QacBrYH6HenCP/u6Ps+sMWXkF7gtdLRL4lQbYSnCzgnzm+PkwO2hhXS4xDxQpaJb/YBr5TxNJ+sySe05XQDaCY6WoHpKoJC1WiOfQVYR/SsB677EJJ2zERUIgaAhRrDdEVMyJu3vmTebyI6FgPkm4qMK9EpCscu5Z1vISml7DAFXtSkJaMXfQkZU5KdjzxRd+5aQkzGThztSikepOxoOMNKAZhIJiwh5n0imbGEmFI8keQsIbtIKHlLSAfxZEC2ukuSf1axbAkxu7o4slBio0miiRSSsmz8Wc3S6iR+dFk2ftYemk+As++xbDS7yUSG3xHLRrOTXEUmAQlxsppacMh66Anx47ll46D2UJtSNO4gPvQpGz7nIfhcAzZVQWvBmXIPH1c2Vqa8bzSdwA/LttFKCWcphk5/3rJpsZqEfUpZiyZ+N4q9ylGquX6oSEpulup5HOSiGXhp2ZKr4lLoHweVU4ubdTplLD1tvK1cN2h3J2W5qIi5Wscj02vK+FNBOjPT91Dp7BbQQnS0KDNh2oMwFXm3snNcKdb6icaxs8p4xkc3h+281yGmIJczHZ7yhAmxBYeIbXii27HMinJtlpESolb6JE/Zya5YspxCz4TmMxccA660ZzJLRyX3dMi6bpJfvV9K8UmlALSj01TUu9QDjqXmq2WDhNgws3My4HWAq5myo9wfBiKlSYq3WYejVmoFqWJH43TY0QocktL/joTofMmfavJSbkzLzm6wQWXPGtSDv2/hK0X7Ng8JAAAAAElFTkSuQmCC"
  );
  useEffect(() => {
    if (theme === "light") {
      setImage(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADEklEQVR4nO2aXW9MQRjHfwm6klbTN60Lid6hCcpnELJNaS+oRj8DkX4LtlRDuMONWy/VJuUDiIgQBNslmlRJsCS4UStWJnkqm+kz+3LOnN1zpL9kkt3N2ZnnvzPPy8wsrPH/0g4MARlgFsgCX4FlaV/ksxngDDAMtBITUsAYMAf8Boo1tgJwDzgmfZXDCP8EfAQO44mNwDjwPoDxrvYBOFFGUOlYSz5EpIE3HgXY7S2wXxnXfi7ULFyqYMRjYAI4AuwWv9kANMlr89kIcBZ4WqafP8Bla3a8COkBHjkG/QacBrYH6HenCP/u6Ps+sMWXkF7gtdLRL4lQbYSnCzgnzm+PkwO2hhXS4xDxQpaJb/YBr5TxNJ+sySe05XQDaCY6WoHpKoJC1WiOfQVYR/SsB677EJJ2zERUIgaAhRrDdEVMyJu3vmTebyI6FgPkm4qMK9EpCscu5Z1vISml7DAFXtSkJaMXfQkZU5KdjzxRd+5aQkzGThztSikepOxoOMNKAZhIJiwh5n0imbGEmFI8keQsIbtIKHlLSAfxZEC2ukuSf1axbAkxu7o4slBio0miiRSSsmz8Wc3S6iR+dFk2ftYemk+As++xbDS7yUSG3xHLRrOTXEUmAQlxsppacMh66Anx47ll46D2UJtSNO4gPvQpGz7nIfhcAzZVQWvBmXIPH1c2Vqa8bzSdwA/LttFKCWcphk5/3rJpsZqEfUpZiyZ+N4q9ylGquX6oSEpulup5HOSiGXhp2ZKr4lLoHweVU4ubdTplLD1tvK1cN2h3J2W5qIi5Wscj02vK+FNBOjPT91Dp7BbQQnS0KDNh2oMwFXm3snNcKdb6icaxs8p4xkc3h+281yGmIJczHZ7yhAmxBYeIbXii27HMinJtlpESolb6JE/Zya5YspxCz4TmMxccA660ZzJLRyX3dMi6bpJfvV9K8UmlALSj01TUu9QDjqXmq2WDhNgws3My4HWAq5myo9wfBiKlSYq3WYejVmoFqWJH43TY0QocktL/joTofMmfavJSbkzLzm6wQWXPGtSDv2/hK0X7Ng8JAAAAAElFTkSuQmCC"
      );
    } else {
      setImage(
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADRUlEQVR4nO2aW0tVQRTHByoLNFG7PgT5Vgml9RmiMOzyYCX1GYzoW2iWiVFv1UuvXcyg+gAREUZFeSkMzILKguqlOtEvpr2Ccc7aZ7vPvrhP+IMDetjOmr9r1qw1a7YxS/ynAM3AQeA0cBuYAD4DP+TzSb4bBfqBQ0CjKQLASuA4cAf4RXxKwD3gqB3LVLZlhX8A3gMH0hKwCjgFvCU93gG9YYI8W7NpiOgEXpEd08Buxe48knrhQsQkxoABoBvYIXGzAqiTn+13R4AzwJMK4/wGLrreSUUIsAF4FGL0C9AHbKli3G0i/GvI2PeBjakIAVqBl4qRn7JDNcUetNzGWuCsBL/PFLApkRDxhCbiuV0mSQUo9nYB44q9sjnEjQltOV0D6tMW4dhtBEYUu1UL0QL7ErAsKxH/AJYDVxMLkS1W80QmIoB9wOsoL8QSItl60vs7+/vqLESIzZk4IiwLGdRmbH93Sj2wPZtviIlZgDf8sqM/SxHOUrYZPTUhtgD0k13iPJE7wF1PSJ+pNQhqIb8Uj112LDoE9b7LmKlFCIo3lwFTixAcQV26TS1CUGW6bDe1CDDnCWkxBYSgnJmVT6f2gO10uNSZAsL8mmy6JoUQVB4u3xeytNaYgkFwknT5qD00WfRgB9q9OY7X5PZL0IFxGdEeso2EQidEYDCyFpS+rctjUzCAZ94cu7SHmpSicaspCECbcuDTm+DSjM71UJWgFhyt9PAx5WDVnOuMFWwqAL55c+uJSjizRQt64Jw3p5nIhA2cVNZie26z9gB2Kq3UXhOFeMXeLOXWDqowl3rghTeXqahLIXeAvZRzPY8uo9dtvKlcN5TdnVQEOK+IuZxjy/SKYn+omsHsEnuoDHYDaMhEgflrt0HxhOVB1RU5sF45OSKt/46MAntCsWdjdF3SwVtDxJTkcqYlpTxht9hSiIjNSW24ntGWGXJtZgvOtirLjgEl2bnLKZknQmJmmMo8FS8dlrNDi1yE1sl/vUNK8UGlAHSxu9NQpqdUYE/IUkuLidhbbELvnKjmOqACtuwIfWEga0F2yfTIuydaoEZRkpNpT2GaHQSXmPvlhZlbskXPOS/VzEm5MSL38l2LUfYsYXLiD+5LaXaqk4ArAAAAAElFTkSuQmCC"
      );
    }
  }, [theme]);

  return (
    <Image
      width={size || Number(width)}
      height={size || Number(height)}
      alt=""
      src={image}
    />
  );
};

export const Done: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  const { theme } = useTheme();

  return (
    <svg
      fill={theme === "light" ? "#000" : "#fff"}
      aria-hidden="true"
      focusable="false"
      height={size || height}
      role="presentation"
      viewBox="0 0 50 50"
      width={size || width}
      {...props}
    >
      <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z" />
    </svg>
  );
};

export const Run: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <Image
      width={size || Number(width)}
      height={size || Number(height)}
      alt=""
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEFklEQVR4nO2ZW4hVZRTHf441RRfSbHQyDMOeDA0UVDQppB6a0SKKpAShRKge0nIa0dDASz2k0e2hF0My8qEIsTSVJgIv5EQSpOWDFYgjYqk45iUv58SC/weLzf72HG32PmfD/OHjnLO+y15rr+u3DgxgAEnMBLqAf4Az+t5OybAKqEbGSkqkCWP4AtAB3KnRIVq1LJr5Tswa40l0as7MrOFxRsy2psy1aq6XEqBXzJo5JXGX5k5TAnSJ2ddS5hbXy7RuBd4HTgAnZf+rgceAEZE97c7ZzSdGanQ6Z28rUojJwKGMMGrjD+AzYIHWD9beFRl7VhQlgDGzFLioB/8EjJcGZkkjXc4X/NgPPKpz7K1/q3W9+l6YJkYB34upCrAGaM4QeBwwH1gHHHYCbQFup054Ur5gjBwFHhF9ELAQ2Aq8AoyO7L8BWAQc0xmHIiE4NxijH7i3uRlo0ZyF0O0pJrQPWAYMTzlvKPCV1q2nQHTqoeeAlyRYKDWOa+64tLFROSAI9HHkzJGaP5Vhmv2Ov/TQqfp9ozRUEX17wkRGuTD6ROTMMU7YORSEHifIJOAX/f5XNh80FPCJc+gY3nCC7KEgvJXiAweBCSlrH5KmzAzviZx3hwvNZ/U5gQLQLGFMM7/LZ26OrPtVjFme6evFmMbW6vs6GghLxNRvGQ7c4qpfM9N7gSvSYN3yisfdurIagzMy1r3tzPNx0Sz/xO4nhSPkhQ0Za0Y4YW3sTBSR1cjokTnmHqZnuGwfq3hx/rBNlXJVhWSTK3uyxptFacPKlBha5QcW0e4XU7bn8xrOn+o0kxsGu/rLwmoM72rNF660uaBcNL2PZ0zT3iPkiFed6odF1jS5fPG8o79TgzlV3bDrQS4YnXDerKiz3t0KnxGtWVHs7z4EOCIhcnP2b1yJcUkXrZdTSpagleDslUYJtajQq8o/rFSfK3s32l5gIulYqARo696TgHXDMFe+P5cIw8HULqspcVvK/qdddWzOf30eTFpy6nZvN2t0JczoKdHPy9RCbpmd8pwHXS5ZnocQtUaQHtVJvrEWwvCLakbsduu36Q7iMTGv/PCjDl58lRGiSR2QqpJj0NIgNR6CgJYQn01ceSt5dBV79cBbrvEqfCxyR2/RPd/WbHL0h0XbRT+jWwcvqVEjw9VguKI3m9WTWplSL3WI9iH9jLarzLRhVNR4yMLXWmsBIeBT0eb1tyBBmL01Rq0TYtCut33hqPZ4hz8gWiznNBx86ycEgpuUay6qK1MKtKf8VTBFtJ8pEZaJaesTB7xQj07j/8WXKY24j0SzvxtKgz/F9FhH2yFaLYGiYXBOTJuDG67TfyoWtodQInS7RGuNvdddz7hUaEvJQXb1vY8Sok2J1u4rPwAP1JuhAQyAbPwHzZWj8uSZcB0AAAAASUVORK5CYII="
    />
  );
};

export const Str: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <Image
      width={size || Number(width)}
      height={size || Number(height)}
      alt=""
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGS0lEQVR4nM1aeWyVRRD/9QFFqwJ/SDQ0VTywGjEBAYkR6pV4UMVExEqligcNHglU1OcVrNpgE4ltNYpoYtQmKoIRFaWiEikqRqtSiUoEAS8EiQe2UinQz0z9TTNs93u8q/36S75kZ2f37cweM7OzD/gfAwBcAOBuAK8A+A7AbgCrAYxE9DgVwCoAfwDYCGApgHkAJgMYqI1OBvADgCDk+wXAoREqMRDAtoPId4o0fJ8VzQCqAZQAKAQwGMA68kTzqDCZMjQByKNsJZS1mbz3wOUKKLiLavIqER0qKYPI4mIweb+D5yGgpi6uIm8ZosMyyiCyuCgkT3ToPNwHa7jFqT8SwIsAfgXwFoBjMhBU+q4B0MoDfaLD35LERIsOuDfB0sU4QAeAIaa+3jlwjQBKAZTzmwsgDuAe/m41y3HytF0plbC/tc6MM4Rjt1KWsK0vOqCYREPIjH1MvpjizwH8ZgY9H8D+BBYl2U+EPR7AXtLbebg/IC0y+NBAvuiAfBI7Qho/kUCAAgAbjOVYxK+WszWfqxBnWepqTLuV7PszTXwQ8okMPuwgX3TohM7yME/jmeTJ7IxnGxVeHNVrLF+B1FFsJuE4ln/iGGeZbScyuBhGnsjehXdZOcnTYaxn737Iugmc6YCeNlXcwb6PU/AAwFrDVz82JsEkyKp24RF7aBwcwr27B0Au695g+0sAlLH8chqKPMu+twKYwvKr5OVyzL2UwYUaKZG9C1ezcknIgOvJH0X6OdJlZsW+SkORtcZo3MZyHXmjSMvYPiwhX2TvwkhWbgrp9AL5M0g/SnoOgMNpueyKWeSyjYscAH+Zw7qQ5dnkX0taxvZhE/kHBLX9AbTRDA7ydNLZEmskuJ30Y6S/JT3WCFnKVVKT+g2AaeQJTnCspZ7Ti0nXkJaxXQyirG2U/QB8xo4TPR2vJE+8ueBS0iucFbuF9FMJTOkzjleWyAA0wYHx7C+RnuqRZyJ5InM3PE3mw/SiI/gjYpW2kncf257kbMVyE5Ndw/J+ruBofrXGec4C8KSxdkex3AKgH39zHuu2UoaplClGGQPK3A1nc7mkQbtnJj81EfIAttlHR5bPvi3GMMjWcFFrgrzvWT7DmNJGJzxp8sihssl4RT5FdGbVW8pSLwdQxX2rM6X4ku3OIe0OKqvgYrTTZjtnWGOmBU77fhy7irLo9hMZb0SWUOM4whlJKHK602a+MwnFiPDm1mjMrM6YtXAWdYa/m2fjWJ6dfwEcgQggJvAfCjGcdZcbQd3DXudEymo47rd3iqigZvchUxc3RiPse55nI2YuTuo/IoEGersADDX1F9LKuQpsMNGB4DJjWFxj0ut4k8IsDgm1J9CByVmwEA//BfvKrTFyiCf+mwLdlUK/ImOCJc3TJ1DCc9HOC1IyuJmKSDjTp7A4wW3OhwVsX4E+hlnGIiWD1xPcSiPFaRRsc5LtNxvHKRmUPoMYU5eBx0L5sNyY5Q4mGmaGpG57HXqXvy5Jxc/ltbnFKNXG+3+x79LUGziPGUER5qYU+x7G+/9KXg0CE+53Phn0FiZxJgNmRjLx0vkA7jTJdXn26BVMYeJB81N6J4cTssgqncnZTza5HfCRp8cxzSQXfEnw/qx3g8htDG0qef8/2tN3vCcx2CMoN2G5huQWBSZv1c53v+aQa7QGjtNN/7IEMVzWUMFZ7mBuy7eVdppcrkTJ9k1wDK+qkpz+yBiJFaZdFese7Ckl4sb2S6rTIod8XalVIdvGxXRPMm4p6yQ/lnU8wB/fx0yg+4rVYJSsTsF6VXiSD+tZJ/f8rCHHJBv20FJZjDO5r53cWqlAM/px4yw18+lLt6aFGLODmjC4yFFwrjnAa+yjSwrQ37+etL6V/JglHTq3hmbeW5k1t8kHfUjtYHJBEneZhDbFxsEK/U4WdOhM7+iB+5PODCblv9Hc19N5rbJQMz2OtPvEkDbERL5tsnr6LgKaTQ1HmrIUgusTwXDSi9KM2bqh3jgpDdryeGlSB7bQ/qElQ+zib+aRXk1aouO0MZR+oMXMdiHfOgLWZ9u2a5gT4znTv5Uk44NCUWD2/gj6C82SfN1DYbUm6YoA3GDGyhg6+/arTyFyTRU2JxzwE4UyhqyEJAfEuX0S8j+VbELOhph5eTMXa+gLQhPiPzmmd+nYc129AAAAAElFTkSuQmCC"
    />
  );
};

export const Agi: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <Image
      width={size || Number(width)}
      height={size || Number(height)}
      alt=""
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACkUlEQVR4nO2XTYiNURjHf2N8zPWxsBiKYWuhSD5KZseQCEubWaB8bSyVBWZEM0USG2ysFRYyhbIyoTSkbNwpH5mZhMSYGSPj1an/eztO773ue7/mjp5fne69p/c553ne83+e81wwDMMwDMMwDKO+mA10Av3AuD47gAxTLIhHQJQweqdSMJ1y+g2wEZgDbALeav4EdYB7m9uA43JoK9AYPNMvh10QPm2azzJJzAfagRvASIJcXgDLvOfHNT83WGee5n/U0vnFwGHgHvDTc/o38AQ4DZzS23XzQ0BzcCJOTkkn8qrazru3ehR4LIdj510g9xWYC9CnCXig5y5orsPLkTadzGYvR5wsq8Ju4HkglxFJqV3SKsRK2bz28qg3T9V6qOArznlvk0/ANWBXyhLZKPtf3lxGxSCrnMnqJKoSxHY5MArsAaaXsVakMSnc1eYHSrRfWg+BrAK+aPN/5UDMNGCdqtUz2TbUOpAmlUNXWd4FCViIjGf3PiF5qUUgC4F9wC3ge+DAAHBZeRKyBDgE9ABjgZ2rTBe93w3VCmS57gJX5iYCJ14CXUCr50CSnX+HuDWeAieB1QUcj8oNxJdMfOHEY0wX2RGgJYVk3B1yG9gPLMqzb8UCmQF0A8OBE4PAFWCH2ulQMgeBOwmScbfwJWALMKuI/fMFEhUYg/J5pr9Qt9f79KktWBNIxn1fq7a6L1h0Qv8ZjgErSniRpQQSaTjfc3zQ5PpgA3cKO4GrauT8BYbVdrjLbwHl8U1rtqSw2eCdTI4hr+f3JTNapmSK5abW79H+xdAqG5eTOc7mObZyJZOmU/6cUlLxOBMm+zngo5o9J5m9FZBMGpysrgNfiwxgQOX/r2Q3DMMwDMMwjP+fP2EBGpjbmJVFAAAAAElFTkSuQmCC"
    />
  );
};

export const Vit: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <Image
      width={size || Number(width)}
      height={size || Number(height)}
      alt=""
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEIklEQVR4nNWafWhXZRTHP9PpdK00xYZLJCtFE/wjiUVoRjmH5gtRKUILS5ogJIK6RJYGphCRqKilEw1m4Hwp0JT8w7cs0zIz8A0VfJmmMcuXZUtn+8mB74XD5Te3IH3u/cLld85zz+Wec5/nOW/PD/5flAAHgJOi4xgH1AK/AMNJKEqAW0BG189ZZOrc/UZgEAlDN+CSFFwC/AvcBnJjcpcls1O/h4G2JAgbpdguYJTos1nkPtO9tcBp0RNJCMqk0HXgSX1l46dkke2l5Wez9YHkzgMdCYwewBX3ZSeJPgW0b+aZKsms0T4yeiaBsUmKbAYecvvkNWAksB34C6gX/XJsVsolbx+jaygjxkqJq8CjwDzx3wEfOu8Uv+YCq0V/CmwVvSCEEQ8AF6TAO0AR8DfQJEVt/B9gOtBd1wyNZTRunq0BeFGzY/ceu9+GvC+F9gA5wCLxNcAOp2wcFbpny+xr0ZOBVaKr7rch3+rFpeJrxQ+Q98poFuIoch5upujF8nbNuex7ig16sS0Xw0/i322lIeYU9okuU4Q3+niIdMRe/Lu81Svi65xLjYz0eE/36p287bcV4hcRANHy+kT8HvFH3Wav0CwUyYibMQ9WKY/XoM3fL4QhT+vlt6TAs/JapuyXzbheu/+9aMu7OgFLxa8jIJZLib1K/qrF22yNl3eqV8DbBrwOHJHMNOAJGW4fpH9IQzorV4rSjELgt7sEw4xbfnlu5ixABscItydsuRUDB5WaZDPiB6CPAmG08W0PJQLLpNQJ4MFWyFtCeUzPzCJB6AD8+h+WSaVbYs1lycHQ15WwLSEqeV8gocjoagmNkouXwqkzpEmXJZypNSRXMhZISbMhHSVzg5QbUuDiR6qXVgfXyLNE8ylSvNlLVURllGtZXGlDCg2JlthCeS97ZgvwMAlAjkvVPb5RY3uCEsU4rG30h549pPZrULSRMpaSRyiMJYxW4s7OomwvNfUySvMfIWGGDHFt0QPOoAZ1TKweiWAZ8BHXhQyGtlLCelQRok7iF+KtybDepSiXY33f3q4XEAy5WZLGjzU2J2ZwVFD9CeRr3PZPtas4g6FdltTjK4295YxYozErvJ7XeE9gv4v4zxEQ7V1ciHBQYy/J0Brx19xp1TCX1p8GBhIYea7kjXBOY/3d7FxROZyrM5LbGrdmdhcSgGyGXNTYMre5ra5/XPsg8nJzkhbZ66WcRW2/tBr0W6LDoKitaoYOJYE4KgWjRHBLLCDecPQmBcxEYrOUHB07ZtvtzkbMO71KwrEgdjYy3zW089TwTgXKpfjn4qeL/4iUoViK2180DG+LX0nKkK+4cFMBcowMsRiSOhx3x3CDXUmbOtRIedsvz4j+kRTiTSlv54pvuPQjdSgAzsQC4VRSigE6YrNIbkWVtYDuKe4AnoieNbCRQ9wAAAAASUVORK5CYII="
    />
  );
};

export const Spe: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => {
  return (
    <Image
      width={size || Number(width)}
      height={size || Number(height)}
      alt=""
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE50lEQVR4nO2Za4xdUxTHfx7TGQytos+ZoCp8KtJOTURKqogMSoQE05QgIZHqB4+QiioiEZWmj/SDVjwiREtoJGToEOoRtIRGS1LqVbQebUczNR1zZSX/nawcc8/d594zj5P4Jzvn7H3WWvu19tr/vQ/8j4q4GFgP/AV06b2NguFBoFQmPUCBZqIE7AduB8Yr3aGyUlFmplONtU4kcae+mZsNe3SpseP6+TZO3/ZSAOxVY82dkpiob3soANarsbYmkrirSK7V5ha7rYkJStaJv4u02FGILXz4DWiTC3UVeUMsNFqB54AdwD8prmXffpLsmQwzLAL6UhpfLpnOQoYJ7lWjetShE4GDU+Tt2yTxsR7pmo0hxTUa1V7gsir0L5eu2biaIcLZjgTOq8HObbJhe8y5DDImA7vUgKWufAbQHKHfLNmApbK1CziJQcJoYKsqfhU4JLEJvhVh423J2ppCNsxWSbatjgFFHfCmKvwCGAkcBDzmItHmCDtfOvkVCgCNwKcqeweoH6hOWIOfUkU/Ak3Aoa4s7B1fR9jaltB5UrPSJNuhzOocsDC7D5gOjADWqMzO5TfpfXuErR2SvdbR/leABuAMd6ZZkHcnrlKItBGcDRwOvK7K/gTO0vnD8j9H2PtdsscA04DflO8EjgQucmG5Pa9OWCO7XZgdBbznGj1FcqNV9keEzX2SPUL5KbJVAjaojnnKd6sNNSNEqGXAWLcgzYVOdnKNzs0qIayNEPGQre0qtzrGqM4QyarGuy6yHNCofKX8ln72izonm4YRjtIk0ewGbqtI5QHXDotmmdFbhuht0miljXQa1zqqwgXEGDfrIfW6Z2aEyNECrNVsrNTeUQ5hLR3myuYCcxINNZmdKXZGAauAbxXNptdy+/KrlP06qIQ90hnp3K1Hqd65j8l8n8HuKRki4n8QptfIYSx2Suc45UNILomfoYGJ3TgDzpHORqrAy1K+LoNO2JXt/spwuuvITBdqLf95Brs3SudFqsDDUn4kg06gHnZwMpzvOnK9ylqU/ziD3cXSeYgqcEUVIW+LdE5Vvt115D6VzajC7vvSMVaRGRNFEbpFSWLwmSo8Tfn5riOrE7P0RqTNRh3g+srcJ2dqWOwx9iMXsr17+oZfqvy6jJ6xkRqwSEaejZTfkIh0q1xHQpS6UnljzjF4XvI13bZM0pTudyE15t9IiFDrXEe6db6Yo/zTEfaOdW5V8xG4M8OVzWuSNRpu+CBBNca6UPp4hL2Fku0gB1zo6HkaPfF7z+xEON6tp1GNWx2bTsPRTu88ckIY2SUV5F6QnB3EPF/r0PMWd763C7o0LHPnk9zQImbbq1Eth2dUebtCdkk+PjfhYn0VqE+r6rI0lZwRRmhbioutlswNwPGOHNoiv19c7Dud79OY7zeRHlAVGty+0lnmumalc6FAvT/JUEedc8PNieNArpjsGO4anfY8lujbfPcLziJZDGxgXnJnlQG/cWx1544O3YSQuG1crJ+h9v5E5H4RfqLurrAOc8U0d/drPj/LEcLkfxKjGGm4APjBzcRUBhkniIqX3FnBGnGzFvgvwN0VImFwJUsfKkAMCep1GxjuqQK5W6BZGq8g0aD3WWIIm5y86d7Tz3obEjRpXYS1E5NsLTwq3WGHBtH05bqNtMsCI4uW7N3K7Nslks0N/wKpeuZE0hh1owAAAABJRU5ErkJggg=="
    />
  );
};

export const Click: React.FC<IconSvgProps> = ({
  size = 48,
  width,
  height,
  ...props
}: IconSvgProps) => {
  const { theme } = useTheme();

  return (
    <svg
      width={size || Number(width)}
      height={size || Number(height)}
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          className="cls-1"
          d="M17.07,20.61H9.79a2,2,0,0,1-2-2,2,2,0,0,1,2-2h1.87L5,9.86a2,2,0,0,1-.19-2.65,1.88,1.88,0,0,1,1.47-.68,1.84,1.84,0,0,1,1.35.55l4.06,4.06,4.08-3.06a1.91,1.91,0,0,1,2.5.18h0A17.18,17.18,0,0,1,22.42,15l.06.19"
        ></path>
        <path
          className="cls-1"
          d="M10.63,10.12A4.73,4.73,0,0,0,11,8.17,4.78,4.78,0,1,0,6.26,13a4.67,4.67,0,0,0,1.55-.26"
        ></path>
      </g>
    </svg>
  );
};

export const Camera: React.FC<IconSvgProps> = ({
  size = 48,
  width,
  height,
  ...props
}: IconSvgProps) => {
  const { theme } = useTheme();

  return (
    <svg
    width={size || Number(width)}
    height={size || Number(height)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#fff"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
        <path
          d="M3 16.8V9.2C3 8.0799 3 7.51984 3.21799 7.09202C3.40973 6.71569 3.71569 6.40973 4.09202 6.21799C4.51984 6 5.0799 6 6.2 6H7.25464C7.37758 6 7.43905 6 7.49576 5.9935C7.79166 5.95961 8.05705 5.79559 8.21969 5.54609C8.25086 5.49827 8.27836 5.44328 8.33333 5.33333C8.44329 5.11342 8.49827 5.00346 8.56062 4.90782C8.8859 4.40882 9.41668 4.08078 10.0085 4.01299C10.1219 4 10.2448 4 10.4907 4H13.5093C13.7552 4 13.8781 4 13.9915 4.01299C14.5833 4.08078 15.1141 4.40882 15.4394 4.90782C15.5017 5.00345 15.5567 5.11345 15.6667 5.33333C15.7216 5.44329 15.7491 5.49827 15.7803 5.54609C15.943 5.79559 16.2083 5.95961 16.5042 5.9935C16.561 6 16.6224 6 16.7454 6H17.8C18.9201 6 19.4802 6 19.908 6.21799C20.2843 6.40973 20.5903 6.71569 20.782 7.09202C21 7.51984 21 8.0799 21 9.2V16.8C21 17.9201 21 18.4802 20.782 18.908C20.5903 19.2843 20.2843 19.5903 19.908 19.782C19.4802 20 18.9201 20 17.8 20H6.2C5.0799 20 4.51984 20 4.09202 19.782C3.71569 19.5903 3.40973 19.2843 3.21799 18.908C3 18.4802 3 17.9201 3 16.8Z"
          stroke="#fff"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>{" "}
      </g>
    </svg>
  );
};
