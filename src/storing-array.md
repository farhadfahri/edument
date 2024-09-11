```typescript
interface WeatherStats {
  year: number;
  month: number;
  day: number;
  averageTemp: number;
}
class WeatherDatabase {
  async store(stats: WeatherStats[]): Promise<void> {
    /* SQL statements that we don't need to care about */
  }
}
interface WeatherData {
  temp: number[]; // Contains one measurement per hour
  time: Date;
}
async function storeForecasts(weatherData: WeatherData[]) {
  const db = new WeatherDatabase();

  const stats: WeatherStats[] = weatherData.map((data) => {
    const year = data.time.getFullYear();
    const month = data.time.getMonth() + 1;
    const day = data.time.getDate();

    const averageTemp =
      data.temp.reduce((sum, temp) => sum + temp, 0) / data.temp.length;

    return {
      year,
      month,
      day,
      averageTemp,
    };
  });

  await db.store(stats);
}
```
