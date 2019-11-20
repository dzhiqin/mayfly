FROM java:8
VOLUME /tmp
# 将jar包添加到容器中并更名为app.jar
ADD mayfly-sys-1.0-SNAPSHOT.jar app.jar
# 运行jar包
RUN bash -c 'touch /app.jar'
EXPOSE 8080
# 以profile = prod 启动项目
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-Dspring.profiles.active=prod","-jar","/app.jar"]