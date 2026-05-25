export interface IMenuItem {
  label: string;
  href: string;
}

export interface MobileNavMenuProps {
  menuitem: IMenuItem[];
  onClose:()=>void;
}

export interface IMapPinProps {
  onclick: () => void;
  cityName?: string;
}

export interface CloseButtonProps {
  onClose: () => void;
}

export interface PopUpProps extends CloseButtonProps{
  cityName:string;
}

export interface ICurrentWeather {
  time: string;
  temperature_2m: number;
  wind_speed_10m: number;
  weather_code:number;
}
