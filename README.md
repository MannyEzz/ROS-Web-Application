# ROS-Web-Application

A web interface will allow to operate and monitor the robot on ROS. The web interface will be developed using ReadJS, which is a popular JavaScript framework for the front-end development. ROBOWEBTOOLS are also used which is an open-source modules and tools for building web-based robots. It allows the users to interact with the robots through web interfaces by using different libraries and widgets such as ROSLIBJS which will allow to develop a publisher and subscriber to the ROS ecosystem, ROS2DJS which allow to visualize the map into the web browser and NAV2DJS widget which is used for navigation.

ROSBridge is used to communicate between the ROS ecosystem and the Web application. So, it will take all the information from the topics and nodes, for example, pose and velocities and display it on the web interface. The connection happens over the local network with the IP address and the port number from the ROSBridge (which is usually 9090).

Some components are developed to interface with the robot whether by publishing or subscribing the data such as:
1. Connection component:
  Connection component is developed to know whether the required robot is connected with the web application or not. After initializing the ROSBridge, the connection component
  change to robot connected. Also, if the ROSBridge is restarted, the robot will reconnect again automatically.
2. Joystick component:
  Joystick component is developed to operate the robot through a web. The joystick is used to send the velocity commands to the RosBridge then it will execute them on the Ros
  ecosystem. This happens by making a publisher on the topic /cmd_vel and Twist message to publish.
3. Robot state:
  Robot state component is developed to know a live information about the pose of the robot. A Pose subscriber and a callback function are made to receive the pose data (position
  x, y and orientation) published by ROS.
4. Velocity component:
  Velocity component is developed to know a live information about the linear and angular velocities of the robot. A velocity subscriber and a callback function are made to
  receive the velocity data (linear and angular) published by ROS.
5. Map component:
  Map component which displays the navigation map on the web browser and send goal location to the robot to navigate to by using the NAV2D library.
  
  
 



Note: For more information check the Readme in react-ros-robot package.
