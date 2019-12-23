package mayfly.sys.module.redis.controller;

import io.lettuce.core.api.sync.BaseRedisCommands;
import io.lettuce.core.api.sync.RedisKeyCommands;
import mayfly.core.log.MethodLog;
import mayfly.core.permission.Permission;
import mayfly.core.result.Result;
import mayfly.core.util.StringUtils;
import mayfly.core.validation.annotation.Valid;
import mayfly.sys.common.utils.BeanUtils;
import mayfly.sys.redis.commands.KeyInfo;
import mayfly.sys.redis.commands.KeyValueCommand;
import mayfly.sys.module.redis.service.RedisService;
import mayfly.sys.module.redis.controller.form.KeyValueForm;
import mayfly.sys.module.redis.controller.form.ScanForm;
import mayfly.sys.module.redis.controller.vo.KeyScanVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * @author meilin.huang
 * @version 1.0
 * @date 2019-01-21 3:35 PM
 */
@Permission(code = "redis:key:")
@RestController
@RequestMapping("/devops/redis")
public class RedisController {
    @Autowired
    private RedisService redisService;

    @MethodLog(value = "查询redis key", resultLevel = MethodLog.LogLevel.DEBUG)
    @GetMapping("/{cluster}/{id}/scan")
    public Result scan(@PathVariable Boolean cluster, @PathVariable Integer id, @Valid ScanForm scanForm) {
        RedisKeyCommands<String, byte[]> cmds = getKeyCmd(cluster, id);
        KeyScanVO scan = cluster ? KeyValueCommand.clusterScan(cmds, scanForm.getCount(), scanForm.getMatch())
                : KeyValueCommand.scan(cmds, scanForm.getCursor(), scanForm.getCount(), scanForm.getMatch());
        return Result.success(scan);
    }

    @MethodLog(value = "查询redis value", resultLevel = MethodLog.LogLevel.DEBUG)
    @GetMapping("/{cluster}/{id}/value")
    public Result value(@PathVariable Boolean cluster, @PathVariable Integer id, String key) {
        if (StringUtils.isEmpty(key)) {
            return Result.paramError("key不能为空!");
        }
        return Result.success(KeyValueCommand.value(getKeyCmd(cluster, id), key));
    }

    @MethodLog(value = "新增redis key value")
    @PostMapping("/{cluster}/{id}/value")
    public Result addKeyValue(@PathVariable Boolean cluster, @PathVariable Integer id, @Valid KeyValueForm keyValue) {
        BaseRedisCommands<String, byte[]> cmds = cluster ? redisService.getClusterCmds(id) : redisService.getCmds(id);
        KeyValueCommand.addKeyValue(cmds, BeanUtils.copyProperties(keyValue, KeyInfo.class));
        return Result.success();
    }

    @MethodLog("删除key")
    @DeleteMapping("/{cluster}/{id}")
    public Result delete(@PathVariable Boolean cluster, @PathVariable Integer id, String key) {
        if (StringUtils.isEmpty(key)) {
            return Result.paramError("key不能为空！");
        }
        KeyValueCommand.del(getKeyCmd(cluster, id), key);
        return Result.success();
    }

    private RedisKeyCommands<String, byte[]> getKeyCmd(Boolean cluster, Integer id) {
        return cluster ? redisService.getClusterCmds(id) : redisService.getCmds(id);
    }
}
