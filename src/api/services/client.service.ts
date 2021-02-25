import { Response, HttpService } from '@api';

class ClientService {
  public constructor(private http: HttpService) {}

  /**
   * Get Clients
   */
  public get = async () =>
    this.http.request<Response<{ clients: any }>>({
      url: '/api/v1/clients'
    });
}

export { ClientService };
