// import OneSignal, {
//   ChangeEvent,
//   OpenedEvent,
//   SubscriptionChange,
// } from 'react-native-onesignal';
// // import Config from 'react-native-config';
// // import {ONESIGNAL_APPID} from '@env';
// import {Platform} from 'react-native';
// // import * as RootNavigation from '../navigationref/RootNavigation';
// import {useEffect, useState} from 'react';
// import {useUser} from '../../provider/AuthProvider';
// // import {useGetUserMe} from '../../hooks/useGetUserMe';
// // import {AuthService} from '../auth/authService';
// // const {ONESIGNAL_APPID} = Config;

// export const useSubscribeNotification = () => {
//   const [subscribeCompleted, setSubscribeCompleted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   // const {data, processQuery, error} = useGetUserMe(false, undefined, true);
//   const {
//     authState: {user},
//   } = useUser();
//   const {initNotification} = useNotification({requestPermission: true});

//   const subscribe = () => {
//     setLoading(true);
//     initNotification();
//     // processQuery();
//   };

//   const handleSetExternalUserId = (id: string) => {
//     try {
//       OneSignal.setExternalUserId(id);
//       setLoading(false);
//       setSubscribeCompleted(true);
//     } catch (err) {
//       setLoading(false);
//       throw err;
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       handleSetExternalUserId(user._id);
//     }
//   }, [user]);

//   // useEffect(() => {
//   //   if (error) {
//   //     setLoading(false);
//   //   }
//   // }, [error]);

//   return {subscribe, subscribeCompleted, loading};
// };

// export const useNotification = ({
//   requestPermission = true,
// }: {
//   requestPermission: boolean;
// }) => {
//   const [init, setInit] = useState(false);

//   const handleRedirect = async (notificationData: any) => {
//     let newNotificationData = {
//       data: {
//         ...notificationData.data,
//         isPush: true,
//       },
//       redirect: notificationData.redirect,
//     };

//     if (notificationData && notificationData.redirect) {
//       // const isTokenExpired = await AuthService.getInstance().isTokenExpires();
//       // if (!isTokenExpired) {
//       //   RootNavigation.dispatch(notificationData.redirect, {
//       //     ...newNotificationData,
//       //   });
//       // } else {
//       //   RootNavigation.navigate('LoginPage', {
//       //     ...newNotificationData,
//       //     redirect: notificationData.redirect,
//       //   });
//       // }
//     }
//   };

//   const onOpened = async (notification: OpenedEvent): Promise<void> => {
//     console.log('OneSignal: notification opened:', notification);
//     const notificationData: any = notification.notification.additionalData;
//     console.log('additionalData: ', JSON.stringify(notificationData, null, 2));
//     handleRedirect(notificationData);
//   };

//   // const aa = {
//   //   notification: {
//   //     actionButtons: [[Object]],
//   //     additionalData: {
//   //       additionalDataKey: 'additionalDataValue',
//   //       otherKey: 'otherValue',
//   //     },
//   //     androidNotificationId: 1946131958,
//   //     bigPicture:
//   //       'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
//   //     body: 'asuuu',
//   //     collapseId: undefined,
//   //     fromProjectNumber: '530045422051',
//   //     groupKey: undefined,
//   //     groupMessage: undefined,
//   //     largeIcon: undefined,
//   //     launchURL:
//   //       'https://www.youtube.com/watch?v=odVe1pWs4U4&list=RDodVe1pWs4U4&start_radio=1',
//   //     ledColor: undefined,
//   //     lockScreenVisibility: 1,
//   //     notificationId: '21b14a96-91b4-4a10-a88f-1797a9c1f1f5',
//   //     priority: 0,
//   //     rawPayload:
//   //       '{"google.delivered_priority":"normal","google.sent_time":1715742671695,"google.ttl":2419200,"google.original_priority":"normal","custom":"{\\"i\\":\\"21b14a96-91b4-4a10-a88f-1797a9c1f1f5\\",\\"u\\":\\"https:\\\\\\/\\\\\\/www.youtube.com\\\\\\/watch?v=odVe1pWs4U4&list=RDodVe1pWs4U4&start_radio=1\\",\\"a\\":{\\"additionalDataKey\\":\\"additionalDataValue\\",\\"otherKey\\":\\"otherValue\\",\\"actionButtons\\":[{\\"id\\":\\"button_id_1\\",\\"text\\":\\"{\\\\\\"en\\\\\\":\\\\\\"Aceptar\\\\\\",\\\\\\"es\\\\\\":\\\\\\"Botón 1\\\\\\"}\\",\\"icon\\":\\"ic_launcher_round\\"}],\\"actionId\\":\\"__DEFAULT__\\"}}","google.product_id":111881503,"from":"530045422051","alert":"asuuu","bicon":"https:\\/\\/letsenhance.io\\/static\\/73136da51c245e80edc6ccfe44888a99\\/1015f\\/MainBefore.jpg","title":"cuadno esta cerrado","google.message_id":"0:1715742671704254%820371d6f9fd7ecd","google.c.sender.id":"530045422051"}',
//   //     smallIcon: undefined,
//   //     smallIconAccentColor: undefined,
//   //     sound: undefined,
//   //     title: 'cuadno esta cerrado',
//   //   },
//   // };
//   // const desdeDash = {
//   //   notification: {
//   //     actionButtons: [[Object]],
//   //     additionalData: {idWork: '123444'},
//   //     androidNotificationId: 160722614,
//   //     bigPicture:
//   //       'https://img.onesignal.com/tmp/a053a605-59e8-4d0d-bb63-c9781be5eb50/yH5WjikDRkCcyRLq7GiD_Captura%20de%20pantalla%202023-06-09%20152910.png',
//   //     body: 'aadsasa',
//   //     collapseId: undefined,
//   //     fromProjectNumber: '530045422051',
//   //     groupKey: undefined,
//   //     groupMessage: undefined,
//   //     largeIcon:
//   //       'https://img.onesignal.com/tmp/aba03bf3-3b0e-4bff-8ad8-d144521d4363/fdtySYZoTieteTsVCQRo_Captura%20de%20pantalla%202023-07-07%20143820.png',
//   //     launchURL: undefined,
//   //     ledColor: undefined,
//   //     lockScreenVisibility: 1,
//   //     notificationId: 'e0e776b8-6696-4717-ab50-a04b45dfb4b4',
//   //     priority: 5,
//   //     rawPayload:
//   //       '{"google.delivered_priority":"normal","google.sent_time":1715742425947,"google.ttl":259200,"google.original_priority":"normal","custom":"{\\"i\\":\\"e0e776b8-6696-4717-ab50-a04b45dfb4b4\\",\\"a\\":{\\"idWork\\":\\"123444\\",\\"actionButtons\\":[{\\"icon_type\\":\\"system\\",\\"id\\":\\"aceptarClik\\",\\"text\\":\\"Entrar\\",\\"icon\\":\\"app.init\\"}],\\"actionId\\":\\"__DEFAULT__\\"}}","google.product_id":111881503,"pri":"5","vis":"1","from":"530045422051","alert":"aadsasa","bicon":"https:\\/\\/img.onesignal.com\\/tmp\\/a053a605-59e8-4d0d-bb63-c9781be5eb50\\/yH5WjikDRkCcyRLq7GiD_Captura%20de%20pantalla%202023-06-09%20152910.png","licon":"https:\\/\\/img.onesignal.com\\/tmp\\/aba03bf3-3b0e-4bff-8ad8-d144521d4363\\/fdtySYZoTieteTsVCQRo_Captura%20de%20pantalla%202023-07-07%20143820.png","sicon":"aaa","title":"asasa","google.message_id":"0:1715742425959791%820371d6f9fd7ecd","google.c.sender.id":"530045422051"}',
//   //     smallIcon: 'aaa',
//   //     smallIconAccentColor: undefined,
//   //     sound: undefined,
//   //     title: 'asasa',
//   //   },
//   // };
//   const initNotification = () => {
//     OneSignal.setLogLevel(6, 0);
//     OneSignal.setRequiresUserPrivacyConsent(true);
//     OneSignal.provideUserConsent(true);
//     OneSignal.setAppId('1d000840-2cc5-4d8e-8c19-1d76f9ba9b4d');

//     setInit(true);

//     if (Platform.OS === 'ios' && requestPermission) {
//       OneSignal.promptForPushNotificationsWithUserResponse(response => {
//         console.log('Prompt response:', response);
//       });
//     }
//     OneSignal.setNotificationWillShowInForegroundHandler(onReceived);
//     OneSignal.setNotificationOpenedHandler(onOpened);
//     OneSignal.addSubscriptionObserver(changeState);
//   };

//   const onReceived = (notificationReceivedEvent: any) => {
//     console.log(
//       'OneSignal: notification will show in foreground: ',
//       JSON.stringify(notificationReceivedEvent),
//     );
//     let notification = notificationReceivedEvent.getNotification();
//     notificationReceivedEvent.complete(notification);
//   };

//   const changeState = (event: ChangeEvent<SubscriptionChange>) => {
//     console.log('event', event);
//   };

//   return {init, initNotification};
// };
