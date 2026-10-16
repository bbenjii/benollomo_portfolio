This was the capstone project I worked on for my computer engineering degree. The goal was to build a smart door lock system combining hardware control, real-time communication, and a full-stack application for secure remote access and monitoring.

I won't go into too much detail because it's been a minute, and you can read more in the report if you're interested. But the main question I was exploring was: how do you connect hardware to a mobile app over the internet and reliably move data between the two? Things like camera footage, authentication events, lock/unlock commands, etc.

The three main components were essentially the hardware, the backend, and the mobile app.

For the hardware, we used an ESP32-S3 microcontroller connected to a fingerprint sensor, a keypad, and a camera. The actual locking mechanism used a solenoid controlled through a relay, so commands from the software could physically lock or unlock the door. The device connected over Wi-Fi, with Bluetooth used during setup to pair it and give it the Wi-Fi credentials.

The backend was built with Python and FastAPI, deployed on Google Cloud Run, with Firebase Firestore for storing users, devices, activity logs, and commands. It was pretty much the middleman between the app and the lock: checking permissions, passing along commands, and keeping track of what happened.

The mobile app was built with React Native and Expo. It let users connect their lock, lock or unlock it remotely, manage guest access, check device status, and review activity logs and recorded camera footage. Owners and guests had different permissions, so having access to a lock didn't automatically mean having control over all its settings.

For communication, we used REST APIs for regular requests and persistent WebSocket connections for real-time updates between the backend, hardware, and app. For example, tapping "unlock" in the app would send a request to the backend, which checked permissions and forwarded the command to the device. The hardware would then send back a confirmation so the app could update its status. We also had acknowledgement and retry logic to track whether commands actually reached the hardware.

We implemented and tested facial recognition too, but decided against using it as a main access method in the final system because of security concerns. Fingerprint, keypad, and remote access were the main focus.
