import config from 'utils/config';
import signalR from '@aspnet/signalr';

const hubConnection = new signalR.HubConnectionBuilder()
  .withUrl(`${config.API_ADDRESS}//chatHub`, {
    transport: signalR.HttpTransportType.WebSockets,
  })
  .configureLogging(signalR.LogLevel.Information)
  .build();
