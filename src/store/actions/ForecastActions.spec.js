import MUTATION_TYPES from '../mutation-types';
import forecastActions from './ForecastActions';
// import router from '@/router';

jest.mock('@/store', () => {
  return {
    get dispatch() {
      return mockedDispatch;
    },
  };
});

let mockedDispatch = {};

describe('ForecastActions', () => {
  let commit;
  let mockSuccessResponse;
  let resolveDispatchPromise;
  let dispatchPromise;

  beforeEach(() => {
    mockSuccessResponse = {
      cod: '200',
      sys: { country: 'Portugal' },
      weather: [{ id: 0, description: 0 }],
      main: {
        temp: 0,
        feels_like: 0,
        temp_min: 0,
        temp_max: 0,
        humidity: 0,
        pressure: 0,
      },
      wind: { speed: 0, deg: 0 },
      clouds: { all: 0 },
    };
    commit = jest.fn();
    dispatchPromise = new Promise(resolve => {
      resolveDispatchPromise = resolve;
    });

    mockedDispatch = jest.fn().mockImplementation(() => {
      resolveDispatchPromise();
    });

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockSuccessResponse),
      })
    );
  });

  describe('fetchCurrentForecast', () => {
    describe('Fail scenarios', () => {
      test('does not dispatch anything if no city is provided', () => {
        // Execute
        const result = forecastActions.fetchCurrentForecast({ commit });

        // Assert
        expect(mockedDispatch).not.toHaveBeenCalled();
        expect(result).toBeUndefined();
      });

      test('does not dispatch anything if fetch fails', async done => {
        // Setup
        let resolveFetchedPromise;
        const fetchedPromise = new Promise(resolve => {
          resolveFetchedPromise = resolve;
        });
        global.fetch = jest.fn().mockImplementation(() => {
          resolveFetchedPromise();
          return Promise.reject();
        });
        const city = 'Kebabs';
        const countryCode = 'pt';

        // Execute
        forecastActions.fetchCurrentForecast({ commit }, city, countryCode);
        await fetchedPromise;

        // Assert
        expect(mockedDispatch).not.toHaveBeenCalled();
        done();
      });

      test('dispatches location validity as false if response code is 400', async done => {
        // Setup
        const city = 'Kebabs';
        const countryCode = 'pt';
        mockSuccessResponse.cod = '400';

        // Execute
        forecastActions.fetchCurrentForecast({ commit }, city, countryCode);
        await dispatchPromise;

        // Assert
        expect(mockedDispatch).toHaveBeenCalledWith(
          'setLocationValidity',
          false
        );
        done();
      });

      test('dispatches location validity as false if response code is 404', async done => {
        // Setup
        const city = 'Kebabs';
        const countryCode = 'pt';
        mockSuccessResponse.cod = '404';

        // Execute
        forecastActions.fetchCurrentForecast({ commit }, city, countryCode);
        await dispatchPromise;

        // Assert
        expect(mockedDispatch).toHaveBeenCalledWith(
          'setLocationValidity',
          false
        );
        done();
      });
    });

    describe('Successful responses', () => {
      test('dispatches location validity as true', async done => {
        // Setup
        const city = 'Kebabs';
        const countryCode = 'pt';

        // Execute
        forecastActions.fetchCurrentForecast({ commit }, city, countryCode);
        await dispatchPromise;

        // Assert
        expect(mockedDispatch).toHaveBeenCalledWith(
          'setLocationValidity',
          true
        );
        done();
      });

      test('dispatches setCountryCode with responded country', async done => {
        // Setup
        const city = 'Kebabs';
        const countryCode = 'pt';

        // Execute
        forecastActions.fetchCurrentForecast({ commit }, city, countryCode);
        await dispatchPromise;

        // Assert
        expect(mockedDispatch).toHaveBeenCalledWith(
          'setCountryCode',
          mockSuccessResponse.sys.country
        );
        done();
      });

      test('commits SET_CURRENT_WEATHER_FORECAST with extracted forecast from response', async done => {
        // Setup
        const city = 'Kebabs';
        const countryCode = 'pt';
        const expectedResult = {
          description: 0,
          iconId: 0,
          temperature: 0,
          feelsTemperature: 0,
          minTemperature: 0,
          maxTemperature: 0,
          humidity: 0,
          pressure: 0,
          windSpeed: 0,
          windDirection: 0,
          cloudiness: 0,
        };

        // Execute
        forecastActions.fetchCurrentForecast({ commit }, city, countryCode);
        await dispatchPromise;

        // Assert
        expect(commit).toHaveBeenCalledWith(
          MUTATION_TYPES.SET_CURRENT_WEATHER_FORECAST,
          expectedResult
        );
        done();
      });

      test('dispatches fetchSixteenDaysForecast with city and countryCode from parameters', async done => {
        // Setup
        const city = 'Kebabs';
        const countryCode = 'pt';

        // Execute
        forecastActions.fetchCurrentForecast({ commit }, city, countryCode);
        await dispatchPromise;

        // Assert
        expect(mockedDispatch).toHaveBeenCalledWith(
          'fetchSixteenDaysForecast',
          city,
          countryCode
        );
        done();
      });
    });
  });

  describe('fetchSixteenDaysForecast', () => {
    describe('Fail scenarios', () => {
      test('does not dispatch anything if no city is provided', () => {
        // Execute
        const result = forecastActions.fetchSixteenDaysForecast({ commit });

        // Assert
        expect(mockedDispatch).not.toHaveBeenCalled();
        expect(result).toBeUndefined();
      });

      test('does not dispatch anything if fetch fails', async done => {
        // Setup
        let resolveFetchedPromise;
        const fetchedPromise = new Promise(resolve => {
          resolveFetchedPromise = resolve;
        });
        global.fetch = jest.fn().mockImplementation(() => {
          resolveFetchedPromise();
          return Promise.reject();
        });
        const city = 'Kebabs';
        const countryCode = 'pt';

        // Execute
        forecastActions.fetchSixteenDaysForecast({ commit }, city, countryCode);
        await fetchedPromise;

        // Assert
        expect(mockedDispatch).not.toHaveBeenCalled();
        done();
      });
    });

    describe('Successful responses', () => {
      test('commits SET_SIXTEEN_DAY_WEATHER_FORECAST with extracted forecast from response', async done => {
        let resolveCommitCalledPromise;
        const commitCalledPromise = new Promise(resolve => {
          resolveCommitCalledPromise = resolve;
        });

        // Setup
        const city = 'Kebabs';
        const countryCode = 'pt';
        mockSuccessResponse = {
          cod: '200',
          sys: { country: 'Portugal' },
          list: [
            undefined,
            {
              dt: 0,
              temp: { max: 0, min: 0 },
              feels_like: { day: 0 },
              pressure: 0,
              humidity: 0,
              speed: 0,
              deg: 0,
              clouds: 0,
              rain: 0,
              snow: 0,
              weather: [{ id: 0, description: 0 }],
            },
          ],
        };

        const expectedResult = [
          {
            date: new Date(0),
            dateString: 'Thu 1st',
            description: 0,
            iconId: 0,
            avgTemperature: 0,
            feelsTemperature: 0,
            minTemperature: 0,
            maxTemperature: 0,
            humidity: 0,
            pressure: 0,
            windSpeed: 0,
            windDirection: 0,
            cloudiness: 0,
            rain: 0,
            snow: 0,
          },
        ];

        // Execute
        commit = jest
          .fn()
          .mockImplementation(() => resolveCommitCalledPromise());
        forecastActions.fetchSixteenDaysForecast({ commit }, city, countryCode);
        await commitCalledPromise;

        // Assert
        expect(commit).toHaveBeenCalledWith(
          MUTATION_TYPES.SET_SIXTEEN_DAY_WEATHER_FORECAST,
          expectedResult
        );
        done();
      });
    });
  });
});
