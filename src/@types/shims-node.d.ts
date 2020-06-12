declare namespace NodeJS {
  interface Process {
    env: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      BASE_URL: string;
    };
  }
}
