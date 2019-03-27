package mayfly.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

/**
 * @author meilin.huang
 * @version 1.0
 * @date 2018-12-07 4:14 PM
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RoleResource {

    private Integer id;

    private Integer roleId;

    private Integer resourceId;

    /**
     * 资源类型，1：菜单；2：权限
     */
    private Integer type;

    private LocalDateTime createTime;
}
