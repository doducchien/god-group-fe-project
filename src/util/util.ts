export const fakeApi = <T>(data: T, delay:number = 2500):Promise<T> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  };