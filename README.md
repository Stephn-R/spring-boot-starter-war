# spring-boot-starter-war
A starter template project for building Spring Boot projects that deploy as WAR

Read more about Spring Boot on their [Github page](https://github.com/spring-projects/spring-boot)

## Installation and Getting Started <a name="getting-started"/>

The Spring-Boot-Starter-WAR project has already been built and is ready to use **out of the box**!

#### Required Command Line Tools

1. NodeJS
2. Gradle
3. Bower
4. Gulp

#### STS (Spring Tool Suite):

1. Verify that you have [Gradle STS Support](http://docs.spring.io/sts/docs/2.9.0.old/reference/html/gradle/installation.html)
2. Import the Gradle using the Gradle import tool
3. Open the Tasks Quick Launcher by pressing <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>SHIFT</kbd>+<kbd>R</kbd>
4. Type in `appRun` and press <kbd>ENTER</kbd>
5. [Click Here to open the page](http://localhost:5555/app/starter)
6. Enjoy!

#### Terminal

1. Open up a terminal
2. Cd into the directory containing the project
3. Run the command `npm start`
4. [Click Here to open the page](http://localhost:5555/app/starter)
5. Enjoy!

## Important Tips

I have included several automation tools to help with building the project and managing changes. As such, below are some of the tools that come attached with Gradle:

1. Additional Build Automation with [Gulp](http://gulpjs.com/) (Javascript based Build Automation Tool)
2. Project management via separate config files for Gulp and Gradle

## Reporting Issues <a name="reporting-issues"/>

Having trouble with the Spring-Boot-Starter-WAR project? We'd like to help! Please navigate to the [Contributing.md](https://github.com/Stephn-R/spring-boot-starter-war/blob/master/CONTRIBUTING.md) for instructions on how to submit an issue/PR

## Modules

There are a number of modules being used with this project

**spring-boot-starters**

Starters are a set of convenient dependency descriptors. You get a one-stop-shop for all the Spring and related technology that you need without having to hunt through sample code and copy paste loads of dependency descriptors. For this project, we use the Web, Log4j2, Actuator, and Test starters

**gretty**

Gretty is a feature-rich gradle plugin for running web-apps on embedded servlet containers. It supports Jetty versions 7, 8 and 9, Tomcat versions 7 and 8, multiple web-apps and many more. It wraps servlet container functions as convenient Gradle tasks and configuration DSL.

**jackson**

Jackson is a simple tool that allows you to send POJOs as JSON from the server to the client side. For an example of this, see the @RequestMapping for "/api/test" in the `com.base.starter.api` package.

## License

Spring-Boot-Starter-WAR is released under the [MIT License](https://github.com/Stephn-R/spring-boot-starter-war/blob/master/LICENSE)

