import { handler } from '../../../../src/lambda/sixteenDayForecast';

describe('Sixteen day Forecast Lambda', () => {
  let callback;
  let eventParam;
  let mockSuccessResponse = { cod: '404', message: 'city not found' };

  beforeEach(() => {
    callback = jest.fn();
    eventParam = {
      queryStringParameters: {
        city: 'defaultCity',
        countryCode: 'defaultCC',
      },
    };

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockSuccessResponse),
      })
    );
  });

  describe('fail scenarios', () => {
    test('triggers callback function if city is undefined', () => {
      // Setup
      eventParam = {
        queryStringParameters: {
          city: undefined,
        },
      };

      // Execute
      handler(eventParam, null, callback);

      // Assert
      expect(callback).toHaveBeenCalledWith(null, {
        statusCode: 400,
        body: 'No city in query parameters!!',
      });
    });

    test('triggers callback function if city is empty string', () => {
      // Setup
      eventParam = {
        queryStringParameters: {
          city: '',
        },
      };

      // Execute
      handler(eventParam, null, callback);

      // Assert
      expect(callback).toHaveBeenCalledWith(null, {
        statusCode: 400,
        body: 'No city in query parameters!!',
      });
    });
  });

  describe('successfull scenarios', () => {
    test('triggers callback function with proper parameters', async () => {
      // Setup
      let resolveCommitCalledPromise;
      const callbackCalledPromise = new Promise(resolve => {
        resolveCommitCalledPromise = resolve;
      });
      callback = jest
        .fn()
        .mockImplementation(() => resolveCommitCalledPromise());

      // Execute
      handler(eventParam, null, callback);
      await callbackCalledPromise;

      // Assert
      expect(callback).toHaveBeenCalledWith(null, {
        statusCode: 200,
        body: JSON.stringify(mockSuccessResponse),
      });
    });
  });
});
