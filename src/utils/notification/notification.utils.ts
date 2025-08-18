import { LogLevel, OneSignal } from "react-native-onesignal";

export function initOneSignal() {
  // Mostrar logs en consola (solo en desarrollo)
  OneSignal.Debug.setLogLevel(LogLevel.Verbose);

  // Inicializar con tu App ID
  OneSignal.initialize("1d000840-2cc5-4d8e-8c19-1d76f9ba9b4d");

  // Pedir permiso para notificaciones
  OneSignal.Notifications.requestPermission(true);

  // Escuchar cuando llega una notificación mientras la app está abierta
  OneSignal.Notifications.addEventListener("foregroundWillDisplay", (event) => {
    console.log("📩 Notificación recibida en primer plano:", event);
    event.preventDefault(); // Evita que la notificación se muestre automáticamente
    event.getNotification().display(); // La muestras manualmente
  });

  // Escuchar cuando el usuario abre una notificación
  OneSignal.Notifications.addEventListener("click", (event) => {
    console.log("👆 Notificación abierta:", event);
    // Aquí puedes navegar a otra pantalla o manejar la data
  });

  console.log("✅ OneSignal inicializado");
}
