package mayfly.sys.redis.commands;

import io.lettuce.core.api.sync.RedisCommands;
import io.lettuce.core.api.sync.RedisServerCommands;
import mayfly.common.exception.BusinessRuntimeException;
import mayfly.common.utils.Assert;
import mayfly.common.utils.StringUtils;
import mayfly.sys.redis.connection.RedisConnectionRegister;
import mayfly.sys.redis.enumration.RedisConfEnum;
import mayfly.sys.redis.enumration.RedisInfoEnum;
import mayfly.sys.redis.parser.RedisInfoParser;

import java.util.HashMap;
import java.util.Map;

/**
 * @author meilin.huang
 * @version 1.0
 * @date 2019-01-18 9:23 AM
 */
public class ServerCommand {

    private static RedisConnectionRegister register = RedisConnectionRegister.getInstance();

    /**
     * 获取redis命令操作
     * @param redisId
     * @return
     */
    public static RedisCommands<String, byte[]> getCmds(int redisId) {
        return register.getCmds(redisId);
    }

    /**
     * 获取redis info信息
     * @param redisId  redis id
     * @return
     */
    public static Map<RedisInfoEnum, Map<String, Object>> info(RedisServerCommands serverCommands) {
        return RedisInfoParser.parse(serverCommands.info());
    }

    public static long dbsize(RedisServerCommands serverCommands) {
        return serverCommands.dbsize();
    }

    /**
     * 获取 redis.conf的配置信息
     * @param redisId
     * @return
     */
    public static Map<String, String> getConf(int redisId) {
        RedisCommands cmds = getCmds(redisId);
        Map<String, String> result = new HashMap<>();
//        for (RedisConfEnum confParam : RedisConfEnum.values()) {
//            result.putAll(cmds.configGet(confParam.parameter));
//        }

        return cmds.configGet("*");
    }

    /**
     * 设置并保存redis指定配置
     * @param redisId
     * @param param
     * @param value
     */
    public static void configSetAndRewrite(int redisId, RedisConfEnum param, String value) {
        Assert.notNull(param, "配置文件的参数值不能为空！");

        if (!StringUtils.isEmpty(param.valuePattern)) {
            if (!value.matches(param.valuePattern)) {
                throw new BusinessRuntimeException("value值不正确！");
            }
        }
        RedisCommands cmds = getCmds(redisId);
        cmds.configSet(param.parameter, value);
        cmds.configRewrite();
    }

}