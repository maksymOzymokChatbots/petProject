class Response<T = any> {
  /**
   * Response logical data
   */
  public data?: T = null;
  /**
   * Info message or message code
   */
  public message?: string = null;
  /**
   * Mirrored model errors
   */
  public errors?: {
    [x: string]: any;
  } = null;
}

export { Response };
