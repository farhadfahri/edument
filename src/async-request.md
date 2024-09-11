# Asynchronous requests

```typescript
async function fetchTenDayForecast(
  year: number,
  month: number,
  firstDay: number,
): Promise<WeatherData[]> {
  const forecasts: WeatherData[] = [];
  for (let i = 0; i < 10; i++) {
    forecasts.push(await fetchWeather(new Date(year, month, firstDay + i)));
  }
  return forecasts;
}
```

## Explain what this code does

- The function will loop 10 times
- It will fetch the weather for that day by invoking fetchWeather function with Date object
- Once weather data is fetched, the function returns a Promise that resolves an array
- Fetching is done sequentially with await, which can take longer time to finish

## Is there any way to improve it?

- we can add concurrency rather than executing code sequentially
- we can run all promises in parallel

```typescript
async function fetchTenDayForecast(
  year: number,
  month: number,
  firstDay: number,
): Promise<WeatherData[]> {
  const promises = [];

  for (let i = 0; i < 10; i++) {
    promises.push(fetchWeather(new Date(year, month, firstDay + i)));
  }
  const forecasts = await Promise.all(promises);
  return forecasts;
}
```

- we can improve by adding some resilience
- we can add error handling
- add logging for failed request

```typescript
async function fetchTenDayForecast(
  year: number,
  month: number,
  firstDay: number,
): Promise<WeatherData[]> {
  const promises = [];

  async function fetchForecast(date: Date): Promise<WeatherData | null> {
    try {
      return await fetchWeather(date);
    } catch (error) {
      console.error(`Failed request for ${date.toDateString()}:`, error);
      return null;
    }
  }

  for (let i = 0; i < 10; i++) {
    const date = new Date(year, month, firstDay + i);

    const forecastPromise = fetchForecasts(date);
    promises.push(forecastPromise);
  }
  const forecasts = await Promise.allSettled(promises);

  const fulfilledForecasts = forecasts
    .filter((result) => result.status !== null)
    .map((result) => result.value);

  return fulfilledForecasts;
}
```

- we can technically add more features if necessary like
- rate limiting
- retries for failed requests
- add caching
