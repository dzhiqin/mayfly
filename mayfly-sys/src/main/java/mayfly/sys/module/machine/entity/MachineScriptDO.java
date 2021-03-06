package mayfly.sys.module.machine.entity;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * @author meilin.huang
 * @version 1.0
 * @date 2020-01-15 4:27 下午
 */
@Data
public class MachineScriptDO {

    private Long id;

    private Integer machineId;

    private String desc;

    private String script;

    private LocalDateTime createTime;

    private LocalDateTime updateTime;
}
