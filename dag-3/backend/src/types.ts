export type WeatherType = "rain" | "sun" | "cloudy";

export type Weather = {
    id?: string;
    place: string;
    today: WeatherType;
    tomorrow: WeatherType;
    deleted?: boolean;
    description?: string;
};