// import axios from 'axios';

// let OV;
// let session;

// function joinSession() {
//   const mySessionId = document.getElementById('sessionId').value;

//   OV = new OpenVidu();
//   session = OV.initSession();

//   session.on('streamCreated', event => {
//     session.subscribe(event.stream, 'subscriber');
//   });

//   getToken(mySessionId).then(token => {
//     session
//       .connect(token)
//       .then(() => {
//         document.getElementById('session-header').innerText = mySessionId;
//         document.getElementById('join').style.display = 'none';
//         document.getElementById('session').style.display = 'block';

//         const publisher = OV.initPublisher('publisher');
//         session.publish(publisher);
//       })
//       .catch(error => {
//         console.log(
//           'There was an error connecting to the session:',
//           error.code,
//           error.message,
//         );
//       });
//   });
// }

// function leaveSession() {
//   session.disconnect();
//   document.getElementById('join').style.display = 'block';
//   document.getElementById('session').style.display = 'none';
// }

// window.onbeforeunload = function() {
//   if (session) session.disconnect();
// };

// const OPENVIDU_SERVER_URL = `104.43.134.198:4443`;
// const OPENVIDU_SERVER_SECRET = 'MY_SECRET';

// function getToken(mySessionId) {
//   return createSession(mySessionId).then(sessionId => createToken(sessionId));
// }

// createSession(sessionId) {
//   axios({
//     method: 'POST',
//     url: `${OPENVIDU_SERVER_URL}/api/sessions`,
//     data: { customSessionId: sessionId },
//     headers: {
//       Authorization: `Basic ${btoa(`OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`)}`,
//       'Content-Type': 'application/json',
//     },
//   })
//     .then(response => response.id)
//     .catch(error => {
//       if (error.status === 409) {
//         console.log(sessionId);
//       }
//       console.warn(
//         `No connection to OpenVidu Server. This may be a certificate error at ${OPENVIDU_SERVER_URL}`,
//       );
//       if (
//         window.confirm(
//           `No connection to OpenVidu Server. This may be a certificate error at \"${OPENVIDU_SERVER_URL}\"\n\nClick OK to navigate and accept it. ` +
//             `If no certificate warning is shown, then check that your OpenVidu Server is up and running at "${OPENVIDU_SERVER_URL}"`,
//         )
//       ) {
//         location.assign(`${OPENVIDU_SERVER_URL}/accept-certificate`);
//       }
//     });
// }

// createToken(sessionId) {
//     axios({
//       type: 'POST',
//       url: `${OPENVIDU_SERVER_URL}/api/tokens`,
//       data: JSON.stringify({ session: sessionId }),
//       headers: {
//         Authorization: `Basic ${btoa(`OPENVIDUAPP:${OPENVIDU_SERVER_SECRET}`)}`,
//         'Content-Type': 'application/json',
//       }
//     })
//       .then(response => response.token)
//       .catch(error => console.log(error));
// };
