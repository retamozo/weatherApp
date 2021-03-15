import { useEffect, useState } from "react";
import axios from "axios";
import {
    UseWeatherApi,
    GetWeatherByCity,
    WeatherApi,
    ForecastApi,
    WeatherState,
    AllowedCity,
} from "../types";
import { API_KEY, BASE_URI, EXCLUDE_PARAMS } from "../utils";

export const useWeatherApi: UseWeatherApi = ({ initialFetch }) => {

    const [state, setState] = useState<WeatherState>({
        isError: false,
        isFetching: false,
        weather: undefined
    })

    const [city, setCity] = useState<AllowedCity>("Buenos Aires")

    useEffect(() => {
        if (initialFetch) {
            getWeatherByCity(city);
        }
    }, [city, initialFetch]);

    const getWeatherByCity: GetWeatherByCity = async (city) => {

        try {
            setState({
                ...state,
                isFetching: true,
            })
            const weather = await axios.get<WeatherApi>(
                `${BASE_URI}/weather?q=${city}&lang=sp&units=metric&APPID=${API_KEY}`,
            );

            const { lat, lon } = weather.data.coord;
            const forecast = await axios.get<ForecastApi>(
                `${BASE_URI}/onecall?lat=${lat}&lang=sp&lon=${lon}&exclude=${EXCLUDE_PARAMS}&units=metric&appid=${API_KEY}`,
            );

            setState(val => ({
                ...val,
                isFetching: false,
                weather: {
                    current: weather.data,
                    forecast: forecast.data,
                }
            }));

        } catch (error) {
            console.error("ERROR CONSLTANDO CLIMA > ", error);
            setState({
                ...state,
                isFetching: false,
                isError: true
            })
        }
    }

    return {
        state,
        setCity,
    };
};
