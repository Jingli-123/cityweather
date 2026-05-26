export interface IMenuItem {
  label: string;
  href: string;
}

export interface MobileNavMenuProps {
  menuitem: IMenuItem[];
  onClose: () => void;
}

export interface IMapPinProps {
  onclick: () => void;
  cityName?: string;
}

export interface CloseButtonProps {
  onClose: () => void;
}

export interface PopUpProps extends CloseButtonProps {
  cityName: string;
}

export interface ICurrentWeather {
  cityName?: string;
  time: string;
  temperature_2m: number;
  wind_speed_10m: number;
  weather_code: number;
}

export interface IMobileCityCardProps {
  cityName: string;
  cityPic: string;
  selectedCity: string;
  latitude: number;
  longitude: number;
  onSelect: (name: string) => void;
}
